import { tableSy } from '@/utils/Setting';
import { Button, message } from 'antd';
import { Method } from '@/utils';
import { SearchConfigProps } from '../interface';
/**
 * @module 分页模块配置
 */
 const searchConfig = (search?: false | SearchConfigProps) => {
  if ((typeof search === 'undefined' && tableSy.search.hidden) || typeof search === 'boolean')
    return false;

  return {
    searchText: search?.searchText || tableSy.search.searchText,
    resetText: search?.resetText || tableSy.search.resetText,
    collapsed: search?.cancelShow
      ? false
      : search?.show
      ? !search.show
      : tableSy.search.cancelShow
      ? !tableSy.search.cancelShow
      : !tableSy.search.show,
    collapseRender: search?.cancelShow
      ? () => <></>
      : tableSy.search.cancelShow
      ? () => <></>
      : undefined,
    labelWidth: search?.labelWidth ? search.labelWidth : 100,
    span: search?.span ? search.span : tableSy.search.span ? tableSy.search.span : undefined,
    layout: search?.layout ? search.layout : tableSy.search.vertical ? 'vertical' : undefined,
    optionRender: (searchConfig:any, formProps:any) => {
      const submit = <Button key="submit" type="primary" htmlType="submit">查询</Button>
      const reset = <Button key="reset" htmlType='reset'>重置</Button>
      const dom = [ submit, reset ]
      if(!search?.options || !Array.isArray(search.options)) return [...dom.reverse()]

      let result: React.ReactNode[] = []
      search.options.map((item) => {
        if(item.method === 'export'){
          if(!item.export) return message.error('请在export中写对应的参数！')
          const arr = <Button
              key="out"
              onClick={async () => {
                if(!item.export?.onExportBefore) return  message.error('请在onExportBefore进行返回！')
                const payload:any = await item.export?.onExportBefore(searchConfig, formProps)
                const msg = `导出成功`
                if(typeof payload === 'string'){
                  await Method.ExportExcel(payload)
                  message.success(msg)
                  return
                }
                if(typeof payload !== 'object' || Array.isArray(payload)) return message.error('请返回字符串，或则对象')
                if(!payload.list || !Array.isArray(payload.list) || payload.list.length === 0) return message.error('返回的对象中请包涵list，并且list为数组')
                if(!payload.list[0].headers || !payload.list[0].data || !payload.list[0].sheetName) return message.error('list必须包含headers，data，sheetName')
                await Method.ExportExcel(payload.list, payload.title)
                message.success(msg)
              }}
            >导出</Button>
          result = [...result, arr]
        }else{
          if(!item.fieldRender) return message.error('自定义需要在fieldRender中构建！');
          const arr = item.fieldRender(searchConfig, formProps)
          if(!Array.isArray(arr)) return message.error('请返回数组，并且为React.ReactNode类型！')
          result = [...result, ...arr];
        }
      })
      return [ ...dom , ...result]
    },
    ...search,
  };
};

export default searchConfig
