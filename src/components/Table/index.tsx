import React, { useState, useEffect, useRef } from 'react';
import ProTable from '@ant-design/pro-table';
import type { FormInstance } from 'antd';
import { Button, message, Popconfirm, Divider } from 'antd';
import { tableSy } from '@/utils/Setting';
import { paginationConfig, searchConfig } from './components'
import Props, { TableListProps, RuleProps, editTools, deleteTools, stateTools, createProps } from './interface.d';
import { Mask, Form } from '@/components';
import type { tableListProps } from './interface.d';
import type { formProps } from '@/components'
import type { ActionType } from '@ant-design/pro-table';
import { Jump } from '@/utils'
import moment from 'moment';

// 表格批量操作

interface EditsProps {
  formList: formProps[],
  data: editTools
}

const Table: React.FC<Props> = ({
  getRef,
  getFormRef,
  tableList,
  pagination,
  search,
  _config,
  toolBar,
  ...props
}) => {
  const actionRef = useRef<ActionType>();
  const FormRef = useRef<FormInstance>();

  const [list, setList] = useState<tableListProps[] | undefined>(undefined);
  const [maskVisible, setMaskVisible] = useState<boolean>(false);
  const [tool, setTool] = useState<'create' | 'edit' | boolean>(false); //用于判断一些特殊情况
  const [editList, setEditList] = useState< EditsProps | boolean>(false); //用于判断一些特殊情况
  const [recordDetail, setRecordDetail] = useState<Object>({}); //编辑时带出一整行的数据
  const [fieldValues, setFieldValues] = useState<Array<any>>([]); //编辑时带出一整行的数据

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
      } else if(item.type === 'tools'){
        rules = toolsRules(item)
      }
      result = [...result, { ...item, ...rulesRender(item), ...rules }];
    });
    return result;
  };

  // 工具配置属性
  const toolsRules = (data: tableListProps) => {
    return {
      dataIndex: 'optionTools',
      ...data,
      render: (_:React.ReactNode, record:any) => {
        if(!data.tools || !Array.isArray(data.tools)) return <>-</>
        return <>
          {
            data.tools.map((item, index) => (
              <span key={index + 'optionTools'}>
                {
                  item.method === 'edit' ? editToolsConfig(item.edit, record) :
                  item.method === 'delete' ? deleteToolsConfig(item.delete, record) :
                  item.method === 'state' ? stateToolsConfig(item.state, record) : item.fieldRender ? <>{item.fieldRender(record)}</> : <div>请写入method或这在fieldRender操作</div>
                }
                {index + 1 !== data.tools?.length && <Divider type="vertical" />}
              </span>
            ))
          }
        </>
      }
    }
  }

  // 状态工具属性
  const stateToolsConfig = (data: stateTools | undefined, record:any) => {
    if(!data) return <div style={{color: 'red'}}>请在state中写入对应操作</div>;
    const state:any = data.onState(record);
    if(typeof state !== 'boolean') {
      message.error('onState返回布尔类型！')
      return
    }
    return <Popconfirm
    title={ data?.title ? data.title :`你确定要${state ?  data.closeText || tableSy.tools.state.cancelText : data.openText || tableSy.tools.state.okText}吗？`}
    onConfirm={async () => {
      const param = data.onEdit(record);
      if(typeof param !== 'object' || Array.isArray(param)) return message.error('请在onEdit中返回正确对象，包含「open和close属性」')

      if(!param['open'] || !param['close']) return message.error('请在onEdit中返回open和close')

      if(typeof param['open'] !== 'object' || Array.isArray(param['open']) || typeof param['close'] !== 'object' || Array.isArray(param['close'])) return message.error('请在onEdit中返回open和close为字符串或则对象')

      const result = state ? data?.onRequestClose ? await data.onRequestClose(param['close']) : await data.onRequest(param['close']) : await data.onRequest(param['open'])
      if(result){
        if(data.onSuccess) await data.onSuccess(result, state)
        const msg:string = state ? `${data.closeText || tableSy.tools.state.cancelText}成功` : `${data.openText || tableSy.tools.state.okText}成功`
        message.success(msg)
        actionRef?.current?.reload()
      }
    }}
    okText={data.okText || "确定"}
    cancelText={data.cancelText || "取消"}
  >
    <a style={{ ...tableSy.tools.commonStyle, ...tableSy.tools.state.style, ...data?.style}}>{state ? data.closeText || tableSy.tools.state.cancelText : data.openText || tableSy.tools.state.okText}</a>
    <a href="">{state}</a>
  </Popconfirm>
  }

  // 删除工具属性
  const deleteToolsConfig = (data: deleteTools | undefined, record:any) => {
    if(!data) return <div style={{color: 'red'}}>请在delete中写入对应操作</div>;
    return <Popconfirm
    title={ data.title || `你确定要${data.text || tableSy.tools.edit.text}么?`}
    onConfirm={async () => {
      const param = data.onEdit ? data.onEdit(record) : false
      if(typeof param === 'string') return message.error(param)
      if(typeof param !== 'object' || Array.isArray(param)) return message.error('请在onEdit中返回对象或是字符串！')
      const res = await data.onRequest(param)
      if(res){
        if(data.onSuccess) await data.onSuccess(res)
        message.success( data.message || `${data.text || tableSy.tools.delete.text}成功`)
        actionRef?.current?.reload()
      }
    }}
    okText={data.okText || "确定"}
    cancelText={data.cancelText || "取消"}
  >
    <a style={{...tableSy.tools.commonStyle, ...tableSy.tools.delete.style, ...data?.style}}>{data.text || tableSy.tools.delete.text}</a>
  </Popconfirm>
  }

  // 编辑工具属性
  const editToolsConfig = (edit: editTools | undefined, record:any) => {
    if(!edit) return <div style={{color: 'red'}}>请在edit中写入对应操作</div>;
    return <a
      onClick={async () => {
        if(edit?.go){
          const payload = edit?.onBeforeStart ? await edit.onBeforeStart(record) : edit.payload;
          if(typeof payload === 'string') return message.error(payload)
          if(typeof payload !== 'object' || Array.isArray(payload)) return message.error('请onBeforeStart中返回一个对象或者是字符串')
          Jump.go(edit.go, payload)
          return
        }
        let result:formProps[] = []
        if(edit?.onBeforeStart) {
          // 处理自定义组件的回显问题
          if(edit?.onBeforeFiled){
            const filed = edit.onBeforeFiled(record);
            if(!Array.isArray(filed)){
              message.error('需要在onBeforeFiled返回数组，格式与Form的fieldValues一样！')
              return
            }
            setFieldValues(filed)
          }
          result = await edit.onBeforeStart(record)
          if(typeof result === 'string') {
            message.error(result)
            return
          }
          if(!Array.isArray(result)){
            message.error('请返回对应FormList数组，或则返回字符串！')
            return
          }
        }else {
          result = edit?.formList ? edit.formList : []
        }
        setEditList({
          data: edit,
          formList: result
        })
        setRecordDetail(record)
        setTool('edit')
        setMaskVisible(true)
      }}
      style={{ ...tableSy.tools.commonStyle, ...tableSy.tools.edit.style,  ...edit?.style}}
    >{edit.text || tableSy.tools.edit.text}</a>
  }

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
            : item.method === 'number'
            ? tableSy.tableList.rule.reNumber
            : item.method === 'numberFloat'
            ? tableSy.tableList.rule.reNumberFloat
            : item.method === 'numberZero'
            ? tableSy.tableList.rule.reNumberZero
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
            : item.method === 'number'
            ? '正整数'
            : item.method === 'numberZero'
            ? '非0正整数'
            : item.method === 'numberFloat'
            ? '数字或小数点后两位'
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

  // 弹框渲染组件
  const MaskRender = (mask: editTools, method: string, formList: formProps[] = []) => {
    const title = method === 'create' ? tableSy.toolBar.create.text : tableSy.tools.edit.text
    return <Mask.Form
      title={title}
      message={`${title}成功`}
      onEdit={(value) => {
        if(mask.onEdit) {
          const payload:any = mask.onEdit(value, recordDetail)
          return payload
        }
        return value
      }}
      {...mask?.maskFrom}
      visible={maskVisible}
      formList={formList}
      form={{
        ...mask?.form,
        fieldValues: fieldValues.length !== 0 ? fieldValues : mask?.form?.fieldValues
      }}
      onCancel={() => {
        setMaskVisible(false);
        setTool(false);
        setEditList(false);
        setRecordDetail({})
        setFieldValues([])
      }}
      onSubmit={async () => {
        if(mask && typeof mask.maskFrom !== 'boolean' && mask?.maskFrom && mask.maskFrom?.onSubmit){
          await mask?.maskFrom.onSubmit()
        }
        actionRef?.current?.reload()
        setTool(false)
        setEditList(false)
        setMaskVisible(false)
        setFieldValues([])
      }}
    />
  }

  // 新建按钮
  const toolBarCreate = (data: createProps | undefined) => {
    if(!data || typeof data !== 'object' || Array.isArray(data)){
      message.error('请在create中写入对应的参数')
      return []
    }
    return [
      <Button
        type="primary"
        onClick={async () => {
          if(data.onBefore) data.onBefore()
          if(data?.go){
            Jump.go(data.go, data.payload)
            return
          }
          let formList:any = []
          if(data.formList) {
            formList = data.formList
          } else if(data.onBeforeFormList){
            const resList = await data.onBeforeFormList()
            if(!Array.isArray(resList)) return
            formList = resList
          }
          setEditList({
            data,
            formList
          })
          setMaskVisible(true)
          setTool('create')
        }}
        {...data?.button}
        style={{ ...tableSy.toolBar.commonStyle,...tableSy.toolBar.create.style, ...data.button?.style}}
      >
       { data.prefix  || tableSy.toolBar.create.prefix} {data?.text ||  tableSy.toolBar.create.text}
      </Button>
    ]
  }

  return (
    <>
      <ProTable<any>
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
        toolBarRender={props?.toolBarRender ? props.toolBarRender : (action:any) => {
          if(!Array.isArray(toolBar)) return [];
          let result:React.ReactNode[] = [];
          toolBar.map((item) => {
            if(item.method === 'create') {
              const arr = toolBarCreate(item.create);
              result = [...result, ...arr];
            } else if(item.method === 'button'){
              if(!item.button) return message.error('请在button中写对应的参数！')
              const arr = <Button
                type={item.button.type}
                onClick={item.button.onClick}
                {...item.button.props}
                style={{ ...tableSy.search.commonStyle, ...item.button.style}}
              >
                {item.button.prefix} {item.button.text || '自定义按钮'}
              </Button>
              result = [...result, arr]
            }else{
              if(!item.fieldRender) return message.error('自定义需要在fieldRender中构建！');
              const arr = item.fieldRender(action)
              if(!Array.isArray(arr)) return message.error('请返回数组，并且为React.ReactNode类型！')
              result = [...result, ...arr];
            }
          })

          return result
        }}
        columns={list}
        search={searchConfig(search, actionRef)}
        pagination={paginationConfig(pagination)}
      />
      {
        maskVisible && tool === 'create' &&  typeof editList !== 'boolean' && MaskRender(editList?.data, tool, editList?.formList)
      }
      {
        maskVisible &&  tool === 'edit' && typeof editList !== 'boolean' && MaskRender(editList?.data, tool, editList?.formList)
      }
    </>
  );
};

export default Table;
