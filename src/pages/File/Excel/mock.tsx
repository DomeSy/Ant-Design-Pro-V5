import React,{ useState } from 'react';
import { Button, OssUpLoad } from '@/components';
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

export const ImportMock: React.FC<any> = () => {
  const [maskVisible, setMaskVisible] = useState<boolean>(false);
  const [file, setFile] = useState<any>('');

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
      <OssUpLoad
        listType={'picture'}
        rules={{
          type: ['xlsx', 'jpg'],
          typeMsg: '请上传Excel文件'
        }}
        _config={{
          text: '上传Excel文件'
        }}
        getFiles={(file: Array<any>, flag) => {
          const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
          message.success(msg)
          console.log('获取到的图片：', file)
        }}
      />
    </>
  );
};


export default Mock;
