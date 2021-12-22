import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock from './mock'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'
const Index: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])

  useEffect(() => {
    queryDetail({detail: 'date'}).then((res) => {
      setAnchorList(res.anchorList)
      setDetail({
        ...res.list,
        code:{
          showCode: [
            {
              id: 'code1',
              component: <Mock />,
              title: '基本使用',
              content: <div>
                <p>结合日期组件的常用功能，通过method来控制不同的端</p>
                <p>比较重要的是设置时间限制，预设状态等</p>
              </div>,
              code: `
  import React from 'react';
  import { message } from 'antd';
  import { Form } from '@/components';
  import type { formProps } from '@/components'
  import { Method } from '@/utils';
  import moment from 'moment';

  const Mock: React.FC<any> = () => {
    const list: formProps[] = [
      {
        name: 'date',
        label: '日期',
        type: 'date',
      },
      {
        name: 'date1',
        label: '必填日期',
        type: 'date',
        required: true
      },
      {
        name: 'date2',
        label: '前五天，后五天',
        tooltip: "dateLimit: { add: 5, subtract: 5 }",
        type: 'date',
        dateLimit: {
          add: 5,
          subtract: 5,
        },
      },
      {
        name: 'date3',
        label: '前后1个月',
        tooltip: "dateLimit: { add: 1, subtract: 1,  methodAdd: 'month',  methodSubtract: 'month' }",
        type: 'date',
        dateLimit: {
          add: 1,
          subtract: 1,
          methodAdd: 'month',
          methodSubtract: 'month'
        },
      },
      {
        name: 'date4',
        label: '禁用时间段',
        tooltip: "dateLimit: { end: Method.getDate({add: 3}), start: Method.getDate({}) }",
        type: 'date',
        dateLimit: {
          start: Method.getDate({}),
          end: Method.getDate({add: 3}),
        },
      },
      {
        name: 'date5',
        label: '只能选择今天之后的日期',
        tooltip: "dateLimit: { type: 1 }",
        type: 'date',
        dateLimit: {
          type: 1
        },
      },
      {
        name: 'date6',
        label: '只能选择今天之前的日期（包含当天）',
        tooltip: "dateLimit: { type: 2 }",
        type: 'date',
        dateLimit: {
          type: 2
        },
      },
      {
        name: 'date7',
        label: '只选择时间段',
        tooltip: "dateLimit: { type: 3, end: Method.getDate({add: 3}), start: Method.getDate({})} ",
        type: 'date',
        dateLimit: {
          type: 3,
          start: Method.getDate({}),
          end: Method.getDate({add: 3}),
        },
      },
      {
        name: 'date8',
        label: '日期时间段',
        method: 'dateRange',
        tooltip: "method: dateRange",
        type: 'date',
      },
      {
        name: 'date9',
        label: '时间段为7天',
        method: 'dateRange',
        tooltip: "dateLimit: { type: 3, start: '2021-06-07', end: '2021-06-12' }",
        type: 'date',
        dateLimit: {
          type: 3,
          start: Method.getDate({subscribe: 7}),
          end: Method.getDate({add: 7}),
        },
      },
      {
        name: 'date10',
        label: '限制前7后7',
        method: 'dateRange',
        tooltip: ”dateLimit: { type: 3, start: '2021-06-07', end: '2021-06-12' }”,
        type: 'date',
        dateLimit: {
          type: 3,
          start: Method.getDate({subscribe: 7}),
          end: Method.getDate({add: 7}),
        },
      },
      {
        name: 'date11',
        label: '时间',
        method: 'time',
        tooltip: ”method: 'time'”,
        type: 'date',
      },
      {
        name: 'date12',
        label: '日期+时间',
        method: 'dateTime',
        tooltip: ”method: 'dateTime',”,
        type: 'date',
      },
      {
        name: 'date13',
        label: '时间+时间段',
        method: 'timeRange',
        tooltip: "dateLimit: { type: 3, start: '2021-06-07', end: '2021-06-12' }",
        type: 'date',
      },
      {
        name: 'date14',
        label: '日期时间+日期时间段',
        method: 'dateTimeRange',
        tooltip: "dateLimit: { type: 3, start: '2021-06-07', end: '2021-06-12' }",
        type: 'date',
      },
      {
        name: 'date15',
        label: '预设状态',
        method: 'dateTimeRange',
        tooltip: "",
        ranges: {
          今天: [moment(), moment()],
          本月: [moment().startOf('month'), moment().endOf('month')],
        },
        type: 'date',
      },
    ];

    return <Form
      onFinish={(values: any) => {
        message.success('打开控制台观看');
        console.log(values, '动态表单的值')
      }}
      formList={list}
    />
  }

  export default Mock;
              `
            },
          ]
        },
      })
    })
  }, []);

  return (
    <DetailSetting anchorList={anchorList} {...detail} />
  );
};

export default Index;
