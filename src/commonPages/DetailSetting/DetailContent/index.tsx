import React, { useEffect } from 'react';
import { Typography, Tooltip, Divider, Image } from 'antd';
import { Table } from '@/components';
import type { formProps, tableListProps } from '@/components'
import { InfoCircleOutlined, QuestionCircleOutlined, EditOutlined, SendOutlined } from '@ant-design/icons';
import { Link } from 'umi';
import Props, { DetailListProps } from './interface.d'
import './index.less'
import { Jump } from '@/utils';

/**
 * key
 * name：参数
 * desc：描述
 * status： 类型
 * default：默认值
 * global: 是否可全局配置
 * mark：特需的备注
 */

const DetailContent: React.FC<Props> = ({ list = [], noRed = false }) => {


  useEffect(() => {}, [])

  const columns: tableListProps[] = [
    {
      title: '参数',
      dataIndex: 'name',
      tip: noRed ? undefined : '红色可为全局配置',
      width: '15%',
      render: (_, dom:any) => {
        if(dom.global) return <span style={{color: '#f81d22'}}>{dom.name}</span>
        return <span>{dom.name}</span>;
      },
    },
    {
      title: '描述',
      width: '60%',
      render: (_, dom:any) => {

        const render = <span>
          {dom.desc}
          {dom.mark ? <span style={{color: '#f81d22'}}>({dom.mark})</span> : undefined}
          {
            dom.href &&
            <Link to={dom.href || '/'} style={{marginLeft: 6}}><Tooltip title={dom.tooltip || '去这里'}><SendOutlined /></Tooltip></Link>
          }
        </span>

        if(!Array.isArray(dom.desc)){
          return render
        }

        return <Typography.Paragraph>
          <ul>
            {
              dom.desc.map((item:any, index:number) => (
                <li key={index + 'desc'}>
                  {item?.render || item}
                  {item?.mark ? <span style={{color: '#f81d22'}}>({item?.mark})</span> : undefined}
                  {
                    item?.href &&
                    <Link to={item?.href || '/'} style={{marginLeft: 6}}><Tooltip title={item?.tooltip || '去这里'}><SendOutlined /></Tooltip></Link>
                  }
                </li>
              ))
            }
          </ul>
        </Typography.Paragraph>;
      },
    },
    {
      title: '类型',
      width: '15%',
      dataIndex: 'status',
      renderText: (val: string) => <span style={{color: '#c41d7f'}}>{val}</span>,
    },
    {
      title: '默认值',
      width: '10%',
      dataIndex: 'default',
    },
  ];

  const tooltipRender = (item: DetailListProps, suffix?: React.ReactNode) => {
    return <Typography.Text >
      <Tooltip title={item.tooltip}>
        {
          item.selfHref ?
          <Typography.Text style={{marginLeft: 8} }>
            <span onClick={() => Jump.go(item.selfHref ? item.selfHref : '/', item?.selfPayload)} >{ item.suffix ? item.suffix : suffix ? suffix : <QuestionCircleOutlined /> }</span>
          </Typography.Text> :
          item.tooltipHref ?
          <Typography.Link style={{marginLeft: 8}} href={item.tooltipHref} target={item.tooltipBlank ? '_blank' : '_self'}>
            { item.suffix ? item.suffix : suffix ? suffix : <QuestionCircleOutlined /> }
          </Typography.Link> :
          <Typography.Text style={{marginLeft: 8}}>
            { item.suffix ? item.suffix : suffix ? suffix : <QuestionCircleOutlined /> }
          </Typography.Text>
        }
      </Tooltip>
    </Typography.Text>
  }

  const contentRender = (item: DetailListProps) => {
    return (
      <>
       { item.href ?
          <Typography.Link href={item.href} target={item.blank ? '_blank' : '_self'}>{item.render}</Typography.Link>
          : item.red ?
          <Typography.Text code={item.code} type="danger">{item.render}</Typography.Text>
          : item.strong ?
          <Typography.Text code={item.code} strong={item.strong}>{item.render}</Typography.Text>
          :
          <Typography.Text code={item.code}>{item.render}</Typography.Text>
        }
      </>
    )
  }

  const getSource = (list: Array<any> ) => {
    let res:any = []
    list.map((item, index) => {
      res = [...res, {
        key: index,
        type: 'text',
        ...item,
      }]
    })
    return res
  }

  return <div className='DetailContent'>
    {
      list.map((item, index) => <div key={index}>
        {
          item.type === 'table' && Array.isArray(item.tableList)?
          <Table
            dataSource={getSource(item.tableList)}
            search={false}
            cardBordered={true}
            pagination={false}
            tableList={columns}
            rowKey={'name'}
            options={false}
          />
          :
          item.type === 'ellipsis' ?
          <Typography.Paragraph
            style={{...item.style}}
            ellipsis={{
              // expandable: true,
              rows: 5,
              ...item.ellipsis
            }}
          >
            { contentRender(item) }
          </Typography.Paragraph> :
          item.type === 'prv' ?
          <Typography.Paragraph style={{...item.style}}>
            <pre>{item.render}</pre>
          </Typography.Paragraph> :
          item.type === 'title' ?
            <Typography.Title id={item.id} level={item.main ? 2 : item.effect === 4 ? 4 : item.effect === 5 ? 5 : 3} style={item.effect === 3 ? {display: 'flex',justifyContent: 'flex-start', alignItems: 'center'} : {display: 'flex',justifyContent: 'flex-start', alignItems: 'center', margin: '15px 0'}} >
              {
                item.render
              }
              <Typography.Text >
                {
                  item.selfHref &&
                  <Tooltip title={item.hrefTooltip}>
                    <Typography.Title style={{marginTop: 8,marginLeft: 10}} level={5}>
                      <a onClick={() => Jump.go(item?.selfHref ? item.selfHref : '/', item?.selfPayload)}>{ item.suffix ? item.suffix : <SendOutlined /> }</a>
                    </Typography.Title>
                  </Tooltip>
                }
                {
                 item.href && <Typography.Title style={{marginTop: 8,marginLeft: 10}} level={5}>
                    <Typography.Link href={item.href} target={'_blank'}>
                      <Tooltip title={item.hrefTooltip}>
                        <SendOutlined />
                      </Tooltip>
                    </Typography.Link>
                  </Typography.Title>
                }
                {
                  item.tooltip &&
                  <Tooltip title={item.tooltip}>
                    <Typography.Title style={{marginTop: 8,marginLeft: 10}} level={5}>
                      { item.suffix ? item.suffix : <InfoCircleOutlined /> }
                    </Typography.Title>
                  </Tooltip>
                }
              </Typography.Text>
            </Typography.Title>
          : item.type === 'divider' ?
          <Divider orientation={item.way || 'left'} style={{...item.style}}>
            { contentRender(item) }
            { item.tooltip && tooltipRender(item, <EditOutlined />) }
          </Divider>
          : item.type === 'list' ?
          <Typography.Paragraph style={{...item.style}}>
            <ul>
            {
              Array.isArray(item.list) && item.list.map((ele, eleIndex) => (
                <li key={eleIndex + 'li'}>
                  { contentRender(ele) }
                  { ele.tooltip && tooltipRender(ele) }
                </li>
              ))
            }
            </ul>
          </Typography.Paragraph>
           : (item.type === 'img' && typeof item.render === 'string') ?
           <Image
              width={'100%'}
              style={{...item.style}}
              src={item.render}
            />
           :
          <Typography.Paragraph style={{...item.style}}>
            { contentRender(item) }
            { item.tooltip && tooltipRender(item) }
          </Typography.Paragraph>
        }
      </div>)
    }
  </div>
};

export default DetailContent;
