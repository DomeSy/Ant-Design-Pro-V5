import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock, { MockRules, MockCorp } from './mock'

import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'ossUpload'}).then((res) => {
      setDetail({
        ...res.list,
        code:{
          hrefTooltip: '为演示方便结合 Form（表单） 使用 ，点击跳转',
          selfHref: '/table/field',
          wrap: true,
          showCode: [
            {
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
            {
              component: <MockRules />,
              title: '上传规则',
              content: <div>
                <p>OSSUpload 的主要功能有 文件上传的类型限制，大小限制，默认检测同一张图片不让上传等设置，协助更好完成开发任务</p>
                <p>当设置一张图片，采用单选设置，多张图片采用多选图片模式，当然，假设只允许上传2张，而你多选的时候上传了3张，那么则会取2张的照片</p>
                <p>限制规则： 如果你选了 type 为 png，那么只允许 png图片上传，其他格式不允许上床</p>
                <p>文件大小限制： 这里的限制的单位是 M</p>
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

  export default Mock;
              `
            },
            {
              component: <MockCorp />,
              title: '裁剪',
              content: <div>
                <p>OSSUpload 的主要功能有 文件上传的类型限制，大小限制，默认检测同一张图片不让上传等设置，协助更好完成开发任务</p>
                <p>当设置一张图片，采用单选设置，多张图片采用多选图片模式，当然，假设只允许上传2张，而你多选的时候上传了3张，那么则会取2张的照片</p>
                <p>限制规则： 如果你选了 type 为 png，那么只允许 png图片上传，其他格式不允许上床</p>
                <p>文件大小限制： 这里的限制的单位是 M</p>
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

  export default Mock;
              `
            },
          ]
        },
      })
    })
  }, []);

  return (
    <DetailSetting {...detail} />
  );
};

export default Index;
