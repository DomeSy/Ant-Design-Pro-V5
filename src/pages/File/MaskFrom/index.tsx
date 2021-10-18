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
          selfHref: '/form/field',
          wrap: true,
          showCode: [
            {
              component: <Mock />,
              title: '基本使用',
              content: <div>
                <p>弹出表单支持表单的所有属性，并且将按钮等可以自定义设置，这里以特殊的自定义为例！</p>
                <p>首先我们需要传入接口：onRequest 这里只是传入接口的函数</p>
                <p>其次就是接口所需要的参数，如果无其他参数，那么参数就是表单的参数，如果有多余的参数，那么则需要 onEdit 的帮助，这个函数 最终的返回值 会作为 onRequest 的参数</p>
              </div>,
              code: `
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
