import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Select, message, Col, Dropdown, Menu, Row } from 'antd';
import { Button, OssUpLoad, Form, PageLayout, Table, Mask } from '@/components';
import type { formProps, tableListProps } from '@/components'
import { PlusOutlined } from '@ant-design/icons';
import { queryRule } from './services'
const { Option } = Select;

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Welcome: React.FC<any> = (props) => {
  useEffect(() => {}, []);
  const [file, setFile] = useState<any>('');
  const [ref, setRef] = useState<any>(false);

  const columns: tableListProps[] = [
    {
      title: '规则名称',
      dataIndex: 'name',
      tip: '规则名称是唯一的 key',
      render: (dom, entity) => {
        return <a>{dom}</a>;
      },
    },
    {
      title: '描述',
      dataIndex: 'desc',
      valueType: 'textarea',
      rules: [
        {
          max: 3,
        },
      ],
    },
    {
      title: '服务调用次数',
      dataIndex: 'callNo',
      sorter: true,
      hideInForm: true,
      renderText: (val: string) => `${val} 万`,
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        0: { text: '关闭', status: 'Default' },
        1: { text: '运行中', status: 'Processing'},
        2: { text: '已上线', status: 'Success' },
        3: { text: '异常', status: 'Error' },
      },
    },
    {
      title: '时间',
      dataIndex: 'updatedAt',
      sorter: true,
      hideInForm: true,
      type: 'date',
      method: 'dateTimeRange',
      required: true,
      hideInSearch: true,
    },
    // {
    //   title: '操作',
    //   dataIndex: 'option',
    //   render: (_, record) => {
    //     return (
    //       <div>
    //         <a
    //           onClick={() => {
    //             // handleUpdateModalVisible(true);
    //             // setStepFormValues(record);
    //           }}
    //         >
    //           配置
    //         </a>
    //         <a href="">订阅警报</a>
    //       </div>
    //     );
    //   },
    // },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      type: 'tools',
      tools: [
        {
          method: 'edit',
          edit: {
            // go: '/list',   //跳转
            // payload: {text: '1'},
            onBeforeStart: (data:any) => {
              const list: formProps[] = [
                {
                  name: 'test1',
                  label: '编辑测试1'
                },
                {
                  name: 'test2',
                  default: data.callNo,
                  label: '服务器调用次数'
                },
              ]
              // return '暂未配置' // 返回对应字符串
              return list // 返回列表
            },
            form: {
              layout: {
                way: 'vertical'
              },
            },
            maskFrom: {
              onRequest: queryRule
            },
            onEdit: (values: any, record: any) => {
              return {
                ...values,
                key: record.key
              };
            },
          }
        },
        {
          method: 'state',
          state: {
            onState: (value: any) => {
              return value.status === 1 ? true : false
            },
            onEdit: (value: any) => {
              return {
                open: { status: '0' },
                close: { status: '1' },
              }
            },
            onRequest: queryRule
          }
        },
        {
          method: 'delete',
          delete: {
            onEdit:(values: any) => {
              return {
                key: values.key
              };
            },
            onRequest: queryRule
          }
        },
        {
          fieldRender: (data:any) => {
            return <a>自定义获取{data.key}</a>
          }
        }
      ]
    },
  ];
  const tab = [
    {
      tab: '基本信息',
      key: 'base',
    },
    {
      tab: '详细信息',
      key: 'info',
    },
  ];
  return (
    <PageLayout
      tab={tab}
    >
      <Table
        getRef={(ref) => setRef(ref)}
        request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
        tableList={columns}
        rowKey="key"
        search={{
          options: [
            {
              method: 'export',
              export: {
                onExportBefore: () => {
                  const columns: tableListProps[] = [
                    {
                      title: '组件',
                      dataIndex: 'name',
                    },
                    {
                      title: '组件',
                      dataIndex: 'component',
                    },
                    {
                      title: '描述',
                      dataIndex: 'desc',
                    },
                  ]
                  const file =[
                    { name: 'Form', component: '动态表单', desc: '帮助快速开发的工具'},
                    { name: 'Table', component: '动态表格', desc: '对ProForm进行封装'},
                    { name: 'PageLayout', component: '页面容器', desc: '对PageContainer进行封装'},
                  ]
                  const list = [
                    {headers: columns, data: file, sheetName: '导出1'},
                    {headers: columns, data: file, sheetName: '导出2'}
                  ]
                  return {
                    title: '表单导出Excle',
                    list
                  }
                }
              }
            },
            {
              method: 'button',
              button: {
                prefix: <PlusOutlined />,
                text: '测试Button'
              }
            }
          ]
        }}
        toolBar={[
          {
            method: 'create',
            create: {
              formList: [
                {
                  name: 'test1',
                  label: 'MaskFrom111asdasd1'
                },
                {
                  name: 'test2',
                  label: 'MaskFrom3'
                },
              ],
              form: {
              },
              maskFrom: {
                onEdit:(values: any) => {
                  return values;
                },
                onRequest: queryRule
              }
            }
          },
          {
            fieldRender: (action:any) => {
              return [<Button>测试</Button>]
            }
          }
        ]}
        _config={{
        }}
      />
    </PageLayout>
  );
};

export default Welcome
