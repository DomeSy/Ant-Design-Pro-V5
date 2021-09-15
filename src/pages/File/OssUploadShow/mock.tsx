import React, { useState, useCallback, memo } from 'react';
import { Button, message } from 'antd';
import { OssUpLoad, Form } from '@/components';
import type { formProps, tableListProps } from '@/components'

const Mock: React.FC<any> = () => {
  const [file, setFile] = useState<any>('');

  const list: formProps[] = [
    {
      name: 'field3',
      label: '获取图片',
      type: 'field',
      fieldRender: (
        <OssUpLoad
          // amount={3}
          // initFile={
          //   [
          //     'http://bmx-system.oss-cn-shanghai.aliyuncs.com/web/domesy/images/1629963410227undefined.jpeg',
          //     'http://bmx-system.oss-cn-shanghai.aliyuncs.com/web/domesy/images/1629963410227undefined.jpeg'
          //   ]
          // }
          // OSS={false}
          // crop
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
            setFile(file);
          }}
        />
      ),
    },
  ];

  return (
    <Form
      onFinish={(values: any) => {
        message.success('打开控制台观看');
        console.log(values)
      }}
      formList={list}
      _config={{
        back: true
      }}
      fieldValues={[
        {
          name: 'field3',
          value: file
        }
      ]}
    />
  );
};

export const MockMemo: React.FC<any> = () => {
  const [count,setCount] = useState(0)
  const [show,setShow] = useState(true)

  const  add = useCallback(()=>{
    setCount(count + 1)
  },[count])

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'flex-start'}}>
        <TestButton title="普通点击" onClick={() => setCount(count + 1) }/>
        <TestButton title="useCallback点击" onClick={add}/>
      </div>
      <div style={{marginTop: 20}}>count: {count}</div>
      <Button onClick={() => {setShow(!show)}}> 切换</Button>
    </div>
  )
}

const TestButton = memo((props:any)=>{
  console.log(props.title)
  return <Button type='primary' onClick={props.onClick} style={props.title === 'useCallback点击' ? {
  marginLeft: 20
  } : undefined}>{props.title}</Button>
})

export default Mock;
