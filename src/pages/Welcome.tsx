import React,{ useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Select, message, Col, Dropdown, Menu, Row } from 'antd';
import { useModel } from 'umi';
import { Button, OssUpLoad, Form, PageLayout, Table } from '@/components';


import styles from './Welcome.less';

export default (): React.ReactNode => {
  const { initialState, setInitialState } = useModel('@@initialState');
  useEffect(()=> {
    console.log(initialState,'--')
  },[])
  return (
    <PageContainer>
      <Card>

      </Card>
    </PageContainer>
  );
};
