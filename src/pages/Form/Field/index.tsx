import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock, { MockDefault } from './mock'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'

const Index: React.FC<any> = () => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])

  useEffect(() => {
    queryDetail({detail: 'field'}).then((res) => {
      setAnchorList(res.anchorList)
      setDetail({
        ...res.list,
        code:{
          hrefTooltip: '更多 OSSUpload 的使用方法，点击查看',
          selfHref: '/file/ossUploadShow',
          wrap: true,
          showCode: [
            {
              id: 'code1',
              component: <Mock />,
              title: '基本使用',
              content: <div>
                <p>自定义组件想要让表单获取到值，必须使用 fieldValues 这个属性，你需要通过自定义组件获取道德之，赋值到 fieldValues，并且 name 要等于才能赋值成功</p>
                <p>如果是第一种情况，则不需要 fieldValues 表单会自动获取</p>
              </div>,
              code: `
  import React, { useState } from 'react';
  import { message } from 'antd';
  import { OssUpLoad, Form } from '@/components';
  import type { formProps } from '@/components'

  const Mock: React.FC<any> = () => {
    const [file, setFile] = useState<any>('');
    const [file1, setFile1] = useState<any>('');

    const list: formProps[] = [
      {
        name: 'field',
        label: '自定义',
        type: 'field',
        fieldRender: (
          <OssUpLoad
            getFiles={(file: Array<any>) => {
              setFile(file)
            }}
          />
        ),
      },
      {
        name: 'field1',
        label: '必填',
        type: 'field',
        required: true,
        fieldRender: (
          <OssUpLoad
            getFiles={(file: Array<any>) => {
              setFile1(file)
            }}
          />
        ),
      },
    ];

    return <Form
      onFinish={(values: any) => {
        message.success('打开控制台观看');
        console.log(values, '动态表单的值')
      }}
      fieldValues={[
        {
          name: 'field',
          value: file
        },
        {
          name: 'field1',
          value: file1
        }
      ]}
      formList={list}
    />
  }

  export default Mock;
              `
            },
            {
              id: 'code1',
              component: <MockDefault />,
              title: '赋值',
              content: <div>
                <p>自定义组件想要一开始就有值需要注意两点，就是在 fieldValues 对应的值里直接赋值，并且在使用的自定义组件中将默认值上赋予，才会显示并获取到值</p>
                <p>第一种情况下，只需要付给 default 即可</p>
              </div>,
              code: `
  import React, { useState, useEffect } from 'react';
  import { message } from 'antd';
  import { OssUpLoad, Form } from '@/components';
  import type { formProps } from '@/components'

  export const MockDefault: React.FC<any> = () => {

    const [file, setFile] = useState<any>('');
    useEffect(() => {
      setFile('https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png')
    }, [])

    const list: formProps[] = [
      {
        name: 'field',
        label: '自定义',
        type: 'field',
        fieldRender: (
          <OssUpLoad
            initFile={['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png']}
            getFiles={(file: Array<any>) => {
              setFile(file)
            }}
          />
        ),
      },
    ];

    return <Form
      onFinish={(values: any) => {
        message.success('打开控制台观看');
        console.log(values, '动态表单的值')
      }}
      fieldValues={[
        {
          name: 'field',
          value: file
        },
      ]}
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
