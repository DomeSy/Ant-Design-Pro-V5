import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {  Select, message, Col, Dropdown, Menu, Row } from 'antd';
import { Button, OssUpLoad, Form, PageLayout, Table, Card } from '@/components';
const { Option } = Select;

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Welcome: React.FC<any> = (props) => {
  useEffect(() => {}, []);

  return (
    <PageLayout>
      <PageLayout.Way
        list={[
          <div>1</div>,
          <div>2</div>,
          // <div>3</div>,
          // <div>4</div>,
        ]}
      />
    </PageLayout>
  );
};

export default Welcome
