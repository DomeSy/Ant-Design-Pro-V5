import { Space, Switch, Tooltip, Tag, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import { layoutSy } from '@/utils/Setting'
export type SiderTheme = 'light' | 'dark';
import { Jump } from '@/utils';
import QRCode  from 'qrcode.react';
import img from '@/images/pic.png'

const GlobalHeaderRight: React.FC = () => {
  const { liveSetting, setInitialState  } = useModel('@@initialState', (ret) => ({
    liveSetting: ret.initialState.liveSetting,
    setInitialState: ret.setInitialState
  }));

  let className = styles.right;

  const textNode = <>
    <p>React 移动端， 扫一扫，看效果</p>
   <QRCode value='http://mobile.domesy.cn/#/' size={200}  />
  </>
  return (
    <Space className={className}>
      {
        !layoutSy.hiddenSearch &&
        <HeaderSearch
          className={`${styles.action} ${styles.search}`}
          placeholder="站内搜索"
          defaultValue="Hook"
          options={[
            {
              label: <a href="/hook">Hook</a>,
              value: 'Hook',
            },
            {
              label: <a href="/table">动态表格</a>,
              value: '动态表格',
            },
            {
              label: <a href="/form/introduce">动态表单</a>,
              value: '动态表单',
            },
          ]}
          onSearch={value => {}}
        />
      }
      {
        !layoutSy.hiddenQuest &&
        <span
          className={styles.action}
          onClick={() => {
            window.open('https://pro.ant.design/docs/getting-started');
          }}
        >
          <QuestionCircleOutlined />
        </span>
      }
      <Switch
        checked={liveSetting}
        onChange={(e) => setInitialState((s:any)=>({...s, liveSetting: e}))}
      />
      <Popconfirm placement="bottom" icon={false}  okText={'知道了'} title={textNode}>
        <Tag color="purple">react-mobile（移动端）</Tag>
      </Popconfirm>
      <Tooltip title="点个 Star 支持下~">
        <img style={{cursor: 'pointer'}} onClick={() => Jump.href('https://github.com/DomeSy/Ant-Design-Pro-V5')} src="https://img.shields.io/github/stars/DomeSy/Ant-Design-Pro-V5.svg?style=social" alt=""/>
      </Tooltip>
      <Avatar />
    </Space>
  );
};

export default GlobalHeaderRight;
