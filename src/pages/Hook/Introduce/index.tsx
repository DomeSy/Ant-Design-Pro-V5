import React, { useState, useEffect } from 'react';
import { Button, OssUpLoad, Form, PageLayout, Table, Card } from '@/components';

const Introduce: React.FC<any> = (props) => {
  useEffect(() => {}, []);

  return (
    <PageLayout
      content={
        <div>
          Hook是React16.8的特性,主要解决了函数式组件没有状态的问题，使代码结构更加简单，而在Ant
          Design Pro V5 中也是主推Hook，并设置useModel和useRequest的，大大提高开发效率!1
        </div>
      }
    >
      1
    </PageLayout>
  );
};

export default Introduce;
