import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock from './mock'
import type { AnchorLinkProps } from '@/components'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])
  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'excel'}).then((res) => {
      setAnchorList(res.anchorList)
      setDetail({
        ...res.list,
        code:{
          hrefTooltip: '可和表单的导出结合使用',
          selfHref: '/table',
          showCode: [
            {
              component: <Mock />,
              title: '提取Excel数据',
              content: <div>
                <p>结合Table(动态表单)，可实现导出Excel文件</p>
                <p>可设定文件名，并且设置多个表，表名称等操作</p>
              </div>,
              code: `
  import React,{ useState } from 'react';
  import { Button } from '@/components';
  import type { tableListProps } from '@/components'
  import { Table } from '@/components';
  import { Method } from '@/utils'
  import { queryTable } from './services'
  import { message } from 'antd';

  const Mock: React.FC<any> = () => {

    const [file, setFile] = useState<Array<any>>([])

    const columns: tableListProps[] = [
      {
        title: 'id',
        dataIndex: 'key',
        tip: '对应key',
      },
      {
        title: '姓名',
        dataIndex: 'name',
        hideInSearch: true,
      },
      {
        title: '地址',
        dataIndex: 'address',
        hideInSearch: true,
      },
    ];

    return (
      <>
        <Button
          onClick={() => {
            const Top10File = file.slice(0, 10)
            const File = file.slice(10, 101)
            Method.ExportExcel([
              {headers: columns, data: Top10File, sheetName: "前10数据"},
              {headers: columns, data: File, sheetName: "后90条数据" },
            ],'自定义导出组件')
            message.info('导出成功');
          }}
        >导出数据为Excel</Button>
        <Table
          headerTitle={'导出数据'}
          request={async (params, sorter, filter) => {
            const res = await queryTable({ ...params, sorter, filter });
            console.log(res,'--')
            setFile(res.data)
            return res
          }}
          tableList={columns}
          search={false}
          rowKey="key"
        />
      </>
    );
  };

  export default Mock;
              `
            },
          ]
        },
      })
    })
  }, []);

  return (
    <DetailSetting {...detail} anchorList={anchorList} />
  );
};

export default Index;
