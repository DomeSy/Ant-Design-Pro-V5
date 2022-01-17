import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock, { MockTools, MockBlock, MockBlockTools } from './mock'
import type { AnchorLinkProps } from '@/components'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])
  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'darg'}).then((res) => {
      // setAnchorList(res.anchorList)
      setDetail({
        ...res.list,
        code:{
          wrap: true,
          showCode: [
            {
              id: 'code1',
              component: <Mock />,
              title: '基本使用',
              content: <div>
                <p>可通过传入的 list 和 render 来自定义渲染的数据</p>
                <p>id代表唯一值</p>
                <p>通过onChange能把排序好的数据全部返回</p>
              </div>,
              code: `
  import React from 'react';
  import { Drag } from '@/components';
  import { dragTest } from './test'
  import { message } from 'antd';

  const Mock: React.FC<any> = () => {

    return (
      <Drag
        list={dragTest}
        id="value"
        render={(data) => {
          return <div style={{margin: 3, fontSize: 13, border: '1px dashed #cccccc', borderRadius: 4, padding: '0 8px', lineHeight: '30px', color: '#666666', background: 'rgba(255, 255, 255, 0.7)'}}>{data.data}</div>
        }}
        onChange={(list) => {
          message.info('数据置换成功，打卡控制台看看吧~')
          console.log('改变后的数据:', list)
        }}
      />
    );
  };

  export default Mock;
              `
            },
            {
              id: 'code1',
              component: <MockTools />,
              title: '结合使用增加删除功能',
              content: <div>
                <p>可操作List来改变来实行对应的操作</p>
              </div>,
              code: `
  import React, { useState } from 'react';
  import { Drag } from '@/components';
  import { dragTest1 } from './test'
  import { Input, message, Button } from 'antd';
  import img from './delete.png'

  const Mock: React.FC<any> = () => {
    const [data, setData] = useState<any>('')
    const [list, setList] = useState<any>(dragTest1)

    return (
      <>
        <Input style={{width: 200}} onChange={(e) => setData(e.target.value)} value={data} />
        <Button style={{marginLeft: 12, marginBottom: 20}} type='primary' onClick={() => {
          if(data){
            const test:any = [ ...list, { data, value: Math.random(), }]
            setList(test)
            setData('')
          }
        }}>增加</Button>
        <Drag
          list={list}
          id="value"
          render={(data) => {
            return <div style={{margin: 3, fontSize: 13, position:'relative',  border: '1px dashed #3b9de9', borderRadius: 4, padding: '0 8px', lineHeight: '30px', color: '#666666', background: 'rgba(255, 255, 255, 0.7)'}}>
              <img
                src={img}
                style={{position: 'absolute', top: -1, right: -1, width: 16, height: 16, cursor: 'pointer'}}
                onClick={() => {
                  const test = list.filter((item:any) => item.id !== data.id)
                  setList(test)
                }}
              />
              {data.data}
            </div>
          }}
          onChange={(list) => {
            message.info('数据置换成功，打卡控制台看看吧~')
            console.log('改变后的数据:', list)
            setList([...list])
          }}
        />
      </>
    );
  };

  export default Mock;
              `
            },
            {
              id: 'code2',
              component: <MockBlock />,
              title: '块状结构',
              content: <div>
                <p>默认为  inline 模式，使用 block 为块状模式</p>
              </div>,
              code: `
  import React, { useState } from 'react';
  import { Drag } from '@/components';
  import { dragTest1 } from './test'
  import { message } from 'antd';

  const Mock: React.FC<any> = () => {
    const [data, setData] = useState<any>('')

    return (
      <Drag
        list={dragTest1}
        id="value"
        render={(data) => {
          return <div style={{margin: 3, fontSize: 13, border: '1px dashed #cccccc', borderRadius: 4, padding: '0 8px', lineHeight: '30px', color: '#666666', background: 'rgba(255, 255, 255, 0.7)'}}>{data.data}</div>
        }}
        block
        onChange={(list) => {
          message.info('数据置换成功，打卡控制台看看吧~')
          console.log('改变后的数据:', list)
        }}
      />
    );
  };

  export default Mock;
              `
            },
            {
              id: 'code3',
              component: <MockBlockTools />,
              title: '结合使用增加删除功能',
              content: <div>
                <p>快状结构增加、删除功能</p>
              </div>,
              code: `
  import React, { useState } from 'react';
  import { Drag } from '@/components';
  import { dragTest1 } from './test'
  import { Input, message, Button } from 'antd';
  import img from './delete.png'

  const Mock: React.FC<any> = () => {
    const [data, setData] = useState<any>('')
    const [list, setList] = useState<any>(dragTest1)

    return (
      <>
        <Input style={{width: 200}} onChange={(e) => setData(e.target.value)} value={data} />
        <Button style={{marginLeft: 12, marginBottom: 20}} type='primary' onClick={() => {
          if(data){
            const test:any = [ ...list, { data, value: Math.random(), }]
            setList(test)
            setData('')
          }
        }}>增加</Button>
        <Drag
          list={list}
          id="value"
          block
          render={(data) => {
            return <div style={{margin: 3, fontSize: 13, position:'relative',  border: '1px dashed #3b9de9', borderRadius: 4, padding: '0 8px', lineHeight: '30px', color: '#666666', background: 'rgba(255, 255, 255, 0.7)'}}>
              <img
                src={img}
                style={{position: 'absolute', top: -1, right: -1, width: 16, height: 16, cursor: 'pointer'}}
                onClick={() => {
                  const test = list.filter((item:any) => item.id !== data.id)
                  setList(test)
                }}
              />
              {data.data}
            </div>
          }}
          onChange={(list) => {
            message.info('数据置换成功，打卡控制台看看吧~')
            console.log('改变后的数据:', list)
            setList([...list])
          }}
        />
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
    <DetailSetting {...detail}  />
  );
};

export default Index;
