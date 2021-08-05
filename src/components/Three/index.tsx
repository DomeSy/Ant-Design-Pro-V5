import React, { useState, useEffect } from 'react';
import { TreeSelect } from 'antd';

/**
 * @module MultiCascader 多选级联选择
 * @author Domesy
 *
 * @param debounce 是否加入防抖函数
 * @param awit 防抖的等待时间
 */
interface Props {

}

const { SHOW_PARENT } = TreeSelect

const Index: React.FC<Props> = ({
  children,
  ...props
}) => {
  const [value, setValue] = useState<string[]>(['0-0-0', '0-1-0']);

  const treeData = [
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-0',
          key: '0-0-0',
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
      children: [
        {
          title: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
        },
        {
          title: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1',
        },
        {
          title: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2',
        },
      ],
    },
  ];

  return (
    <TreeSelect
      treeData={treeData}
      value={value}
      onChange={setValue}
      treeCheckable={true}
      showCheckedStrategy={SHOW_PARENT}
    />
  );
};

export default Index;
