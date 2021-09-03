import React from 'react';
import { Divider } from 'antd';
import { Typography } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { SendOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import DetailContent from '../DetailContent'

interface ShowCodeProps {
  title?: string,
  content?: React.ReactNode,
  titleTooltip?: string,
  titleTooltipHref?: string,
  contentTooltip?: string,
  contentTooltipHref?: string,
}

const ShowCode: React.FC<ShowCodeProps> = ({ children, ...props }) => {

  return (
    <div
      style={{ width: '100%', borderRadius: 2, border: '1px solid #f0f0f0'}}
    >
      <div style={{padding: '24px 24px 0 24px'}}>
        {children}
      </div>
      <DetailContent
       list={[
         {
           render: props?.title || '标题',
           type: 'divider',
           tooltip: props?.titleTooltip || 'gitHub',
           tooltipHref: props?.titleTooltipHref || 'https://github.com/DomeSy/Ant-Design-Pro-V5'
         },
         {
          strong: true,
          style: { padding: '0 24px 24px 24px' },
          render: props?.content || '我是内容',
          suffix: props.contentTooltipHref ? <SendOutlined /> : <ExclamationCircleOutlined />,
          tooltip:  props.contentTooltip ? props.contentTooltip : undefined,
          tooltipHref: props.contentTooltipHref ? props.contentTooltipHref : undefined,
         }
       ]}
      />
      <Divider style={{margin: 0}} />
      <div style={{ display: 'flex',marginTop: 12, justifyContent: 'center', alignContent: 'center'}}>
        {/* <CopyOutlined /> */}
        <Typography.Paragraph copyable={{text: '111'}} />
        <span>{`<  >`}</span>
      </div>
    </div>
  )
}

export default ShowCode;
