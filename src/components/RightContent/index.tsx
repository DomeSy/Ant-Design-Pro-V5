import { Space, Switch } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import { layoutSy } from '@/utils/Setting'
export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { liveSetting, setInitialState  } = useModel('@@initialState', (ret) => ({
    liveSetting: ret.initialState.liveSetting,
    setInitialState: ret.setInitialState
  }));


  let className = styles.right;

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
      <Avatar />
    </Space>
  );
};

export default GlobalHeaderRight;
