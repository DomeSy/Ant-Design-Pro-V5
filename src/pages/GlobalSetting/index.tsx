import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { PageLayout } from '@/components'
import { useModel } from 'umi';
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'

const Hook: React.FC<any> = ({children, ...props}) => {

  const { domeSy } = useModel('@@initialState', (ret) => ({
    domeSy: ret.initialState.domesy
  }))

  const [detail, setDetail] = useState<DetailSettingListProps>({})
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])

  useEffect(() => {
    console.log(domeSy)

    getDetail()
    getAnchorList()
  }, []);

  const getDetail = () => {
    const { layoutSy, pageLayoutSy, fromSy, tableSy, maskSy, OssUpLoadSy, storageSy } = domeSy
    const result: DetailSettingListProps = {
      use: {
        title: '文件位置',
        id: 'file'
      },
      useList: [
        {
          render: '除了本身 config 里的设置外，其他部分可以再此设置~',
        },
        {
          render: '/src/utils/Setting',
          type: 'prv'
        }
      ],
      api: {
        id: 'Api',
        noRed: true
      },
      apiList: [
        {
          type: 'title',
          id: 'Api1',
          effect: 4,
          render: '布局 layoutSy'
        },
        {
          type: 'table',
          tableList: [
            {
              name: 'logo',
              desc: '设置logo',
              status: "React.ReactNode",
              default: JSON.stringify(layoutSy.logo),
            },
            {
              name: 'footer',
              desc: '底部按钮，为true展示Footer组件',
              status: "boolean",
              default: JSON.stringify(layoutSy.footer),
            },
            {
              name: 'waterMark',
              desc: [
                '是否开启水印',
                'false关闭，string 设置内容，对象时，满足水印的参数'
              ],
              status: "false | string | WaterMarkProps",
              default: JSON.stringify(layoutSy.waterMark),
            },
            {
              name: 'footer',
              desc: '底部按钮，为true展示Footer组件',
              status: "boolean",
              default: JSON.stringify(layoutSy.footer),
            },
            {
              name: 'footer',
              desc: '底部按钮，为true展示Footer组件',
              status: "boolean",
              default: JSON.stringify(layoutSy.footer),
            },
            {
              name: 'footer',
              desc: '底部按钮，为true展示Footer组件',
              status: "boolean",
              default: JSON.stringify(layoutSy.footer),
            },
            {
              name: 'footer',
              desc: '底部按钮，为true展示Footer组件',
              status: "boolean",
              default: JSON.stringify(layoutSy.footer),
            },
          ]
        },
      ],
    }
    setDetail(result)
  }

  const getAnchorList = () => {
    const result: AnchorLinkProps[] = [
      {
        title: '文件位置',
        href: 'file'
      },
      {
        title: 'Api',
        href: 'Api',
        children: [
          {
            title: 'Ant Design Pro 介绍',
            href: 'AntDesign',
          },
        ]
      },
    ]
    setAnchorList(result)
  }

  return (
    <PageLayout
      content='这是有关部分组件的全局Api，通过修改，从而更好的适配本身的项目~'
    >
      <DetailSetting anchorList={anchorList} {...detail} />
    </PageLayout>
  );
};

export default Hook;
