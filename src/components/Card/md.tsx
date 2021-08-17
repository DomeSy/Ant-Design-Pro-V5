import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Select, message, Col, Dropdown, Menu, Row } from 'antd';
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
      <Card.Layout
        list={[
          {
            render: <div>1</div>,
          },
          {
            render: <div>2</div>,
          },
          {
            render: <div>3</div>,
          },
          {
            render: <div>4</div>,
          },
          {
            render: <div>5</div>,
          },
          {
            render: <div>61</div>,
          },
          {
            render: <div>7</div>,
          },
          {
            render: <div>8</div>,
          },
          {
            render: <div>9</div>,
          },
        ]}
      />
      {/* <Card title="pp" >
        Children
      </Card> */}
    </PageLayout>
  );
};

export default Welcome;
