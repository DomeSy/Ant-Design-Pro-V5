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
    queryDetail({detail: 'maskFrom'}).then((res) => {
      setAnchorList(res.anchorList)
      setDetail({
        ...res.list,
        code:{
          hrefTooltip: '为演示方便结合 Form（表单） 使用 ，点击跳转',
          selfHref: '/table/field',
          wrap: true,
          showCode: [
            {
              id: 'code1',
              component: <Mock />,
              title: '基本使用',
              content: <div>
                <p>默认图片可以值传入 string[] 为链接地址，这是预览时的弹框名称为固定的图片，如果要传入对象，则参照 Upload 默认值的传入</p>
                <p>是否是 OSS上传， 可以通过全局设置，不用每个都进行设置</p>
                <p>Oss 上传后的格式为：['地址1', '地址2']</p>
              </div>,
              code: `
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
