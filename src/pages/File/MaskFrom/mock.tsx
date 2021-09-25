import React,{ useState, useEffect } from 'react';
import { Button, OssUpLoad, Mask } from '@/components';
import type { formProps } from '@/components'
import { queryDetail } from './services'

const Mock: React.FC<any> = () => {
  const [maskVisible, setMaskVisible] = useState<boolean>(false);
  const [file, setFile] = useState<any>('');

  useEffect(() => {
    setFile('https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png')
  }, []);

  const list: formProps[] = [
    {
      name: 'field3',
      label: '自定义',
      type: 'field',
      required: true,
      fieldRender: (
        <OssUpLoad
          initFile={
          [{ uid: 1, name: 'logo', url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }]}
          getFiles={(file: Array<any>) => {
            setFile(file[0]);
          }}
        />
      ),
    },
    {
      name: 'name',
      label: '自定义',
    },
    {
      name: 'detail',
      default: 'maskFrom',
      label: '请求参数',
      readonly: true
    },
  ];

  return (
    <>
    <Button onClick={() => {
      setMaskVisible(true)
    }}>弹框表单</Button>
    {
      maskVisible &&
      <Mask.Form
        title="表单弹框"
        message={"编辑成功"}
        visible={maskVisible}
        onRequest={queryDetail}
        formList={list}
        form={
          {
            fieldValues: [
              {
                name: 'field3',
                value: file
              }
            ]
          }
        }
        onCancel={() => setMaskVisible(false)}
        onSubmit={() => setMaskVisible(false)}
        onEdit={(value) => {
          return value
        }}
      />
    }

    </>

  );
};

export default Mock;
