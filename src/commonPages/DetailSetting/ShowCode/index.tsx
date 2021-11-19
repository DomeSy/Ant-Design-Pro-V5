
import React, { useState, useRef, useEffect } from 'react';
import { Typography, Tooltip, Divider, Button } from 'antd';
import { SendOutlined, ExclamationCircleOutlined, ArrowsAltOutlined } from '@ant-design/icons';
import DetailContent from '../DetailContent'
import { useFullscreen } from 'ahooks';
import Code from '../Code'


export interface ShowCodeProps {
  id?: string,
  title?: string, // 标题
  content?: React.ReactNode, // 内容
  titleTooltip?: string, // 标题提示
  titleTooltipHref?: string, // 标题链接
  contentTooltip?: string, //内容提示
  contentTooltipHref?: string, //内容链接
  code?: string //代码
}

const ShowCode: React.FC<ShowCodeProps> = ({ children, ...props }) => {

  const [codeShow, setCodeShow] = useState<boolean>(false)
  const cardRef = useRef<any>();
  const contentRef = useRef<any>(null);
  const [, { enterFullscreen }] = useFullscreen(contentRef);

  useEffect(() => {
  }, [])

  return (
    <div
      ref={cardRef}
      id={props?.id}
      style={{ width: '100%', borderRadius: 2, border: '1px solid #f0f0f0', marginBottom: 24}}
    >
      <div style={{padding: '24px 24px 0 24px', background: 'white'}} ref={contentRef}>
        {children}
      </div>
      <DetailContent
       list={[
         {
           render: props?.title || '说明',
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
      {
        props.code && <>
        <Divider style={{margin: 0}} />
          <div style={{ display: 'flex',marginTop: 12, justifyContent: 'center', alignContent: 'center'}}>
            <Typography.Paragraph  copyable={{text: props.code, tooltips: '复制代码' }}  />
            <Tooltip title={'全屏'}>
              <ArrowsAltOutlined
                style={{marginLeft: 24, cursor: 'pointer', position: 'relative', top: 4, opacity: 0.8}}
                onClick={enterFullscreen}
              />
            </Tooltip>
            <Tooltip title={codeShow ? '收起代码' : '展开代码'}>
              {
                codeShow ? <img src="https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg" onClick={() => setCodeShow(false)} style={{width: 21, height: 21, marginLeft: 20, opacity: 0.3, cursor: 'pointer'}} /> :
                <img onClick={() => setCodeShow(true)} src="https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg" style={{width: 21, height: 21, marginLeft: 20, opacity: 0.3, cursor: 'pointer'}} />
              }
            </Tooltip>
            </div>
            <Divider style={{margin: 0}} />
            {
              codeShow &&
              <Code width={cardRef.current.clientWidth}>
                  {props.code}
              </Code>
            }
        </>
      }
    </div>
  )
}

export default ShowCode;
