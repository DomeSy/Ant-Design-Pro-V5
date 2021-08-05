import React, { useState, useEffect } from 'react';
import { TreeSelect } from 'antd';
import { SelectProps, DataNode } from './interface.d'

/**
 * @module TreeSelect 树形选择
 * @author Domesy
 *
 * @param list 对应 treeData，不同的是可以不用设置key,数组，需要在对应_config做配置
 * @param allowClear 是否加入清楚元素， 默认加入
 * @param multiple 是否加入多选，默认为true
 * @param allowClear 是否加入清楚元素， 默认加入
 * @param defaultValue 默认值
 * @param listHeight 默认高度，默认256
 * @param _config 额外配置
 *
 * @_config 下的配置
 * @param title 对应原有属性的 title, 如果接收的数组就是title，则可以不用设置
 * @param value 对应原有属性的 value, 如果接收的数组就是value，则可以不用设置
 * @param children 对应原有属性的 children, 如果接收的数组就是children，则可以不用设置
 * @param key 对应原有属性的 key, 如果接收的数组就是key，则可以不用设置
 */

const { SHOW_PARENT } = TreeSelect
const Select: React.FC<SelectProps> = ({
  list,
  _config,
  getValues,
  initValue,
  listHeight,
  ...props
}) => {

  const [data, setData] = useState<DataNode[]>([]);
  const [value, setValue] = useState<string[]>([]);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    initData()
  }, [])

  const initData = async () => {
    if(props.treeData){
      setData(data)
      setShow(true)
      return
    }
    if(Array.isArray(list) && list.length !== 0){
      const res = await calcArray(list)
      setShow(true)
      setData(res)
    }
  }

  const calcArray = (list: DataNode[]) => {
    if(list.length === 0) undefined;
    let res:any = [];
    list.map((item) => {
      const node = item.children || item[_config?.children || 'children']
      const arr = {
        title: item.title || item[_config?.title || 'title'],
        value: item.value || item[_config?.value || 'value'],
        key: item.key || item[_config?.key || 'key'] || item.value || item[_config?.value || 'value'],
        children: node ? calcArray(node) : undefined
      }
      res = [...res, arr]
    })
    return res;
  }

  return (
    <>
      {
        show &&
          <TreeSelect
            treeData={data}
            defaultValue={props?.defaultValue? props.defaultValue : undefined}
            treeCheckable={props?.multiple || true}
            showCheckedStrategy={SHOW_PARENT}
            placeholder={props.placeholder || '请输入'}
            allowClear={props.allowClear || true}
            listHeight={listHeight || 256}
            onChange={(values) => {
              getValues(values)
            }}
          />
      }
    </>
  );
};

export default Select;
