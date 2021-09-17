import React from 'react';
import { message } from 'antd';
import { OssUpLoad, Form } from '@/components';
import type { formProps } from '@/components'

const Mock: React.FC<any> = () => {

  const list: formProps[] = [
    {
      name: 'pic',
      label: '上传图片',
      type: 'field',
      fieldRender: (
        <OssUpLoad
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
          }}
        />
      ),
    },
    {
      name: 'pic1',
      label: '更改文字',
      tooltip: '可全局配置',
      type: 'field',
      fieldRender: (
        <OssUpLoad
          _config={{
            text: '上传'
          }}
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
          }}
        />
      ),
    },
    {
      name: 'pic2',
      label: '图片数量',
      tooltip: 'amount={3}',
      type: 'field',
      fieldRender: (
        <OssUpLoad
          amount={3}
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
          }}
        />
      ),
    },
    {
      name: 'pic3',
      label: '默认图片',
      type: 'field',
      tooltip: 'initFile = {[]}',
      fieldRender: (
        <OssUpLoad
          amount={3}
          initFile={
            [
              'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              {
                name: '图片标签',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                status: 'done'
              }
            ]
          }
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
          }}
        />
      ),
    },
    {
      name: 'pic4',
      label: 'OSS上传',
      tooltip: '可全局配置OSS功能是否开启',
      type: 'field',
      fieldRender: (
        <OssUpLoad
          OSS
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
          }}
        />
      ),
    },
    {
      name: 'pic5',
      label: '普通上传',
      type: 'field',
      tooltip: '可全局配置OSS功能是否开启',
      fieldRender: (
        <OssUpLoad
          OSS={false}
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
          }}
        />
      ),
    },
  ];

  return (
    <Form.List
      formList={list}
    />
  );
};

export const MockRules: React.FC<any> = () => {

  const list: formProps[] = [
    {
      name: 'pic',
      label: 'png上传',
      type: 'field',
      fieldRender: (
        <OssUpLoad
          amount={2}
          rules={{
            type: 'png',
            typeMsg: '请上传png的图片类型'
          }}
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
          }}
        />
      ),
    },
    {
      name: 'pic1',
      label: 'png,jpg上传',
      type: 'field',
      fieldRender: (
        <OssUpLoad
          amount={2}
          rules={{
            type: ['png', 'jpg'],
            typeMsg: '请上传png，jpg的图片类型'
          }}
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
          }}
        />
      ),
    },
    {
      name: 'pic2',
      label: '文件大小',
      type: 'field',
      fieldRender: (
        <OssUpLoad
          amount={2}
          rules={{
            size: 1,
          }}
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
          }}
        />
      ),
    },
    {
      name: 'pic3',
      label: '检测',
      type: 'field',
      tooltip: '如果上传两张相同的图片，则不会上传',
      fieldRender: (
        <OssUpLoad
          amount={2}
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
          }}
        />
      ),
    },
    {
      name: 'pic4',
      label: '单选图片',
      type: 'field',
      tooltip: '如果有多张图片的话，只可每次选择一张',
      fieldRender: (
        <OssUpLoad
          _config={{
            radio: true
          }}
          amount={2}
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
          }}
        />
      ),
    },
    {
      name: 'pic5',
      label: '非图片类型提示语',
      type: 'field',
      fieldRender: (
        <OssUpLoad
          _config={{
            pictureCardTip: '默认为: 默认"请上传正确的图片类型！"'
          }}
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
          }}
        />
      ),
    },
  ];

  return (
    <Form.List
      formList={list}
    />
  );
};

export const MockCorp: React.FC<any> = () => {

  const list: formProps[] = [
    {
      name: 'pic',
      label: '裁剪',
      type: 'field',
      fieldRender: (
        <OssUpLoad
          crop
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
          }}
        />
      ),
    },
    {
      name: 'pic1',
      label: '设置文字',
      type: 'field',
      fieldRender: (
        <OssUpLoad
          crop
          cropConfig={{
            title: '裁剪标题',
            cropText: '裁剪按钮文字',
            cancelText: '取消按钮文字'
          }}
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
          }}
        />
      ),
    },
  ];

  return (
    <Form.List
      formList={list}
    />
  );
};

export const MockOther: React.FC<any> = () => {

  const list: formProps[] = [
    {
      name: 'pic',
      label: 'text格式',
      type: 'field',
      fieldRender: (
        <OssUpLoad
          listType={'text'}
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
          }}
        />
      ),
    },
    {
      name: 'pic',
      label: 'picture格式',
      type: 'field',
      fieldRender: (
        <OssUpLoad
          listType={'picture'}
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
          }}
        />
      ),
    },
    {
      name: 'pic',
      label: '设置文字',
      type: 'field',
      fieldRender: (
        <OssUpLoad
          listType={'picture'}
          getFiles={(file: Array<any>, flag) => {
            const msg = flag ? '新增成功, 请打开控制台查看' : '删除成功，请打开控制台查看'
            message.success(msg)
            console.log('获取到的图片：', file)
          }}
        >
          <div>自定义上传</div>
        </OssUpLoad>
      ),
    },
  ];

  return (
    <Form.List
      formList={list}
    />
  );
};

export default Mock;
