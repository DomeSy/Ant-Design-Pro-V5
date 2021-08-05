import React, { useState, useEffect, useRef } from 'react';
import ProTable from '@ant-design/pro-table';
import type { FormInstance } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import type { ActionType } from '@ant-design/pro-table';
import { tableSy } from '@/utils/Setting';
import { paginationConfig, searchConfig } from './components'
import Props, { TableListProps, RuleProps } from './interface.d';
import type { tableListProps } from './interface.d';
import { Mask, Form } from '@/components';
import { Jump } from '@/utils'
import moment from 'moment';

/**
 * 1>columns 有几个参数
 * formItemProps: 制定规则，
 * fieldProps： 当前属性的其他属性
 * renderFormItem： 自定义搜索框的样式
 */

const Table: React.FC<Props> = ({
  getRef,
  getFormRef,
  tableList,
  pagination,
  search,
  _config,
  ...props
}) => {
  const actionRef = useRef<ActionType>();
  const FormRef = useRef<FormInstance>();
  const [maskFormRef, setMaskFormRef] = useState<any>(false);

  const [list, setList] = useState<tableListProps[] | undefined>(undefined);
  const [maskVisible, setMaskVisible] = useState<boolean>(false);

  useEffect(() => {
    if (getRef) getRef(actionRef);
    if (getFormRef) getFormRef(FormRef);
    setList(props?.columns ? props.columns : tableListConfig(tableList));
  }, [tableList, props.columns]);

  // 配置表单项
  const tableListConfig = (list: tableListProps[] | undefined) => {
    if (list?.length === 0 || typeof list === 'undefined') return undefined;
    let result: tableListProps[] = [];
    list.map((item, index) => {
      let rules: tableListProps = {};
      if (item.type === 'date') {
        rules = DateRules(item);
      }
      result = [...result, { ...item, ...rulesRender(item), ...rules }];
    });
    return result;
  };

  /**
   * @returns 公共配置规则部分
   */
  const rulesRender = (data: tableListProps) => {
    if (!data.readonly && data.required && !data.rules) {
      return {
        formItemProps: {
          ...data.formItemProps,
          rules: [{ required: true, message: data.message || `${data.title}为必填项` }],
        },
      };
    }
    if (data.readonly || (!data.rules && !data.rulesRender))
      return { formItemProps: data.formItemProps };
    if (data.rulesRender)
      return { formItemProps: { ...data.formItemProps, rules: data.rulesRender } };
    if (!data.rules) return { formItemProps: data.formItemProps };
    let rules: Array<RuleProps> = [];
    let require = {
      flag: false,
      message: '',
    };
    data.rules.map((item) => {
      if (item.reMessage) require.message = item.reMessage;
      if (item.pattern) {
        const result = {
          pattern: item.pattern,
          message: item.message || `请输入合法的字符`,
        };
        rules = [...rules, result];
      } else if (item.min || item.max) {
        const message =
          item.max && item.min
            ? `请输入${item.min}~${item.max}个字符`
            : item.max
            ? `请输入最多${item.max}个字符`
            : `请输入至少${item.min}个字符`;
        const result = {
          min: item.min || undefined,
          max: item.max || undefined,
          message: item.message || message,
        };
        rules = [...rules, result];
      } else if (item.max) {
        const result = {
          max: item.max,
          message: item.message || `请输入最多${item.max}个字符`,
        };
        rules = [...rules, result];
      } else if (item.len) {
        const result = {
          len: item.len,
          message: item.message || `请输入${item.len}个字符`,
        };
        rules = [...rules, result];
      } else if (item.method) {
        const pattern =
          item.method === 'tel'
            ? tableSy.tableList.rule.reTel
            : item.method === 'password'
            ? tableSy.tableList.rule.rePassword
            : item.method === 'name'
            ? tableSy.tableList.rule.reName
            : item.method === 'card'
            ? tableSy.tableList.rule.reCard
            : item.method === 'sfz'
            ? tableSy.tableList.rule.reSfz
            : item.method === 'emil'
            ? tableSy.tableList.rule.reEmil
            : tableSy.tableList.rule.reTelEmil;
        const message =
          item.method === 'tel'
            ? '电话号码'
            : item.method === 'password'
            ? '密码，长度必须为6至20位'
            : item.method === 'name'
            ? '姓名'
            : item.method === 'card'
            ? '银行卡号'
            : item.method === 'sfz'
            ? '身份证'
            : item.method === 'emil'
            ? '邮箱'
            : '邮箱活电话号码';
        const result = {
          pattern: pattern,
          message: item.message || `请输入正确的${message}`,
        };
        rules = [...rules, result];
      } else if (item.required) {
        require.flag = true;
        const result = {
          required: true,
          message: item.message || `请输入${data.title || ''}`,
        };
        rules = [...rules, result];
      }
    });
    if (!require.flag && !data.noRequired) {
      const result = {
        required: true,
        message: require.message || `${data.title}为必填项`,
      };
      rules = [...rules, result];
    }

    return {
      formItemProps: {
        ...data.formItemProps,
        rules,
      },
    };
  };

  /**
   * @returns 日期限制规则
   */
  const DateRules = (item: tableListProps) => {
    return {
      valueType: item.method,
      fieldProps: item?.fieldProps
        ? item.fieldProps
        : (form: any, config: any) => {
            const { defaultInitShowTime } = tableSy.tableList;

            let dateRangeValue: any = null;
            let time: any = null;
            return {
              showTime:
                item.method === 'dateTimeRange'
                  ? {
                      defaultValue:
                        typeof item.config?.defaultInitTime === 'boolean'
                          ? undefined
                          : item.config?.defaultInitTime
                          ? Array.isArray(item.config.defaultInitTime)
                            ? item.config.defaultInitTime
                            : [
                                moment(
                                  item.config.defaultInitTime.showStartTime,
                                  item.config.defaultInitTime.showStartType || 'HH:mm:ss',
                                ),
                                moment(
                                  item.config.defaultInitTime.showEndTime,
                                  item.config.defaultInitTime.showEndType || 'HH:mm:ss',
                                ),
                              ]
                          : defaultInitShowTime
                          ? [
                              moment(
                                defaultInitShowTime.showStartTime,
                                defaultInitShowTime.showStartType,
                              ),
                              moment(
                                defaultInitShowTime.showEndTime,
                                defaultInitShowTime.showEndType,
                              ),
                            ]
                          : undefined,
                    }
                  : undefined,
              disabledDate: (current: any) => {
                if (!dateRangeValue || dateRangeValue.length === 0) {
                  if (!item.config || (!item.config.add && !item.config.subtract)) return undefined;
                  const {
                    add = 0,
                    subtract = 0,
                    methodAdd = 'days',
                    methodSubtract = 'days',
                  } = item.config;
                  return (
                    current > moment().add(add, methodAdd) ||
                    current <
                      moment().subtract(
                        methodSubtract === 'days' ? subtract + 1 : subtract,
                        methodSubtract,
                      )
                  );
                }

                if (!item.config || !item.config.range) return undefined;
                const {
                  range,
                  methodRange = 'day',
                  add = 0,
                  subtract = 0,
                  methodAdd = 'days',
                  methodSubtract = 'days',
                } = item.config;

                const tooLate =
                  dateRangeValue[0] && current.diff(dateRangeValue[0], methodRange) > range - 1;
                const tooEarly =
                  dateRangeValue[1] && dateRangeValue[1].diff(current, methodRange) > range - 2;

                if (add || subtract) {
                  return (
                    tooEarly ||
                    tooLate ||
                    current > moment().add(add, methodAdd) ||
                    current <
                      moment().subtract(
                        methodSubtract === 'days' ? subtract + 1 : subtract,
                        methodSubtract,
                      )
                  );
                } else {
                  return tooEarly || tooLate;
                }
              },
              onCalendarChange: async (value: any) => {
                dateRangeValue = value;
              },
              onOpenChange: (open: any) => {
                let data: any = {};
                if (open) {
                  time = FormRef.current?.getFieldsValue()[String(item?.dataIndex)];
                  if (item.dataIndex) data[String(item.dataIndex)] = null;
                  FormRef.current?.setFieldsValue({ ...data });
                } else {
                  if (!dateRangeValue || !dateRangeValue[0] || !dateRangeValue[1]) {
                    if (item.dataIndex) data[String(item.dataIndex)] = time;
                    FormRef.current?.setFieldsValue({ ...data });
                  }
                }
                dateRangeValue = null;
              },
              onBlur: (value: any) => {
                if (!value.target.value) dateRangeValue = null;
              },
            };
          },
    };
  };

  return (
    <>
      <ProTable<TableListProps>
        {...props}
        actionRef={actionRef}
        formRef={FormRef}
        options={
          props.options === false || tableSy.options === false
            ? false
            : {
                density: tableSy.options.density,
                fullScreen: tableSy.options.fullScreen,
                setting: tableSy.options.setting,
                reload: tableSy.options.reload,
                ...props.options,
              }
        }
        rowKey={props.rowKey ? props.rowKey : tableSy.rowKey}
        form={{
          ignoreRules: false,
          ...props.form,
        }}
        toolBarRender={() => [ _config?.create ?
          <Button
            type="primary"
            onClick={() => {
              const { create } = _config
              if(typeof create === 'boolean') return
              if(create?.go){
                Jump.go(create.go, create.payload)
                return
              }
              setMaskVisible(true)
            }}
            {..._config?.create?.button}
          >
            <PlusOutlined /> {_config?.create?.text || '新建'}
          </Button> : <> </>,
        ]}
        columns={list}
        search={searchConfig(search)}
        pagination={paginationConfig(pagination)}
      />
      {
        _config?.create && typeof _config.create === 'object' && maskVisible  &&
        <Mask.Form
          title={'新建'}
          message={"新建成功"}
          {..._config.create?.maskFrom}
          visible={maskVisible}
          formRef={maskFormRef}
          onCancel={() => setMaskVisible(false)}
          onSubmit={async () => {
            if(_config.create && typeof _config.create.maskFrom !== 'boolean' && _config.create?.maskFrom && _config.create.maskFrom?.onSubmit){
              await _config.create?.maskFrom.onSubmit()
            }
            actionRef?.current?.reload()
            setMaskVisible(false)
          }}
        >
          <Form
            {..._config.create?.form}
            method="mask"
            formList={_config.create?.formList || []}
            getRef={(formRef: any) => {
              setMaskFormRef(formRef);
            }}
          >
          </Form>
        </Mask.Form>
      }
    </>
  );
};

export default Table;
