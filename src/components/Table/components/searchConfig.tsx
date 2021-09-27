import React, { useCallback } from 'react';
import { tableSy } from '@/utils/Setting';
import { Button, message } from 'antd';
import { Method } from '@/utils';
import { SearchConfigProps } from '../interface';

/**
 * @module 分页模块配置
 */
 const searchConfig = (search?: false | SearchConfigProps, actionRef?:any) => {
  if ((typeof search === 'undefined' && tableSy.search.hidden) || typeof search === 'boolean')
    return false;

  // 搜索按钮配置
  const optionConfig = (searchConfig:any, formProps:any) => {
    const submit = <Button
      key="submit"
      type="primary"
      htmlType="submit"
      style={{ ...tableSy.search.commonStyle, ...tableSy.search.searchStyle, ...search?.searchStyle}}
      {...search?.searchProps}
    >
      {search?.searchPrefix || tableSy.search.searchPrefix} {search?.searchText || tableSy.search.searchText}
    </Button>
    const reset = <Button
        key="reset"
        htmlType='reset'
        style={{ ...tableSy.search.commonStyle, ...tableSy.search.resetStyle,...search?.resetStyle}}
        onClick={async() => {
          await actionRef?.current?.reset();
          await actionRef?.current?.submit()
        }}
        {...search?.resetProps}
      >
       {search?.resetPrefix || tableSy.search.resetPrefix} {search?.resetText || tableSy.search.resetText}
      </Button>

    const dom = [ submit, reset ]
    if(!search?.options || !Array.isArray(search.options)) return [...dom.reverse()]

    let result: React.ReactNode[] = []
    if(!search.cancel) result = [...dom]

    search.options.map((item, index) => {
      if(item.method === 'search'){
        result = [...result, submit]
      } else if(item.method === 'reset') {
        result = [...result, reset]
      } else if(item.method === 'export'){
        if(!item.export) return message.error('请在export中写对应的参数！')
        const arr = <Button
            key={'out' + index}
            onClick={async () => {
              if(!item.export?.onExportBefore) return  message.error('请在onExportBefore进行返回！')
              const payload:any = await item.export?.onExportBefore(searchConfig, formProps)
              const msg = item.export.message || `${item.export.text || tableSy.search.options.export.text}成功`
              if(typeof payload === 'string'){
                await Method.ExportExcel(payload)
                if(item.export.onExportAfter) await item.export.onExportAfter()
                message.success(msg)
                return
              }
              if(typeof payload !== 'object' || Array.isArray(payload)) return message.error('请返回字符串，或则对象')
              if(!payload.list || !Array.isArray(payload.list) || payload.list.length === 0) return message.error('返回的对象中请包涵list，并且list为数组')
              if(!payload.list[0].headers || !payload.list[0].data || !payload.list[0].sheetName) return message.error('list必须包含headers，data，sheetName')
              await Method.ExportExcel(payload.list, payload.title)
              if(item.export.onExportAfter) await item.export.onExportAfter()
              message.success(msg)
            }}
            style={{ ...tableSy.search.commonStyle, ...tableSy.search.options.export.style, ...item.export.style}}
            {...item.export.button}
          >{item.export.prefix || tableSy.search.options.export.prefix} {item.export.text || tableSy.search.options.export.text}</Button>
        result = [...result, arr]
      }else if(item.method === 'button'){
        if(!item.button) return message.error('请在button中写对应的参数！')
        const arr = <Button
          key={'optionButton' + index}
          type={item.button.type}
          onClick={item.button.onClick}
          {...item.button.props}
          style={{ ...tableSy.search.commonStyle, ...item.button.style}}
        >
          {item.button.prefix} {item.button.text || '自定义按钮'}
        </Button>
        result = [...result, arr]
      }else{
        if(!item.fieldRender) return message.error('自定义需要在fieldRender中构建！');
        const arr = item.fieldRender(searchConfig, formProps)
        if(!Array.isArray(arr)) return message.error('请返回数组，并且为React.ReactNode类型！')
        result = [...result, ...arr];
      }
    })
    return [ ...result]
  }

  const configProps = useCallback(() => {
    delete search?.show
    return search
  }, [])

  const collapsedConfig = () => {
    if(tableSy.search.show){
      return {
        collapsed: search?.show ? true : false,
        collapseRender: search?.show ? undefined : () => <></>,
      }
    }else{
      return {
        collapsed: search?.show ? false : true,
        collapseRender:  search?.show ? () => <></> : undefined,
      }
    }
  }



  return {
    ...collapsedConfig(),
    labelWidth: search?.labelWidth ? search.labelWidth : 100,
    span: search?.span ? search.span : tableSy.search.span ? tableSy.search.span : undefined,
    layout: search?.layout ? search.layout : tableSy.search.vertical ? 'vertical' : undefined,
    optionRender: optionConfig,
    ...configProps(),
  };
};

export default searchConfig
