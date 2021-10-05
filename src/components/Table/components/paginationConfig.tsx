import { tableSy } from '@/utils/Setting';
import { PaginationConfigProps } from '../interface.d';
/**
 * @module 分页模块配置
 */
const paginationConfig = (pagination?: false | PaginationConfigProps) => {
  if (
    (typeof pagination === 'undefined' && tableSy.pagination.hidden) ||
    typeof pagination === 'boolean'
  )
    return false;

  return {
    showQuickJumper: tableSy.pagination.jump,
    pageSize: pagination?.pageSize ? pagination.pageSize : tableSy.pagination.pageSize,
    size: pagination?.size ? pagination.size : tableSy.pagination.size,
    ...pagination,
  };
};

export default paginationConfig
