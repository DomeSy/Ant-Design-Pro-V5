import { tableSy } from '@/utils/Setting';
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
    // optionRender: (searchConfig:any, props:any, dom:any) => {
    //   return [...dom.reverse()]
    // },
    ...search,
  };
};

export default searchConfig
