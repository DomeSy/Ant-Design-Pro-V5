import { request } from 'umi';

// 动态菜单
export async function getMenuData() {
  return request('/api/getMenuData',{
    method:'GET',
  });
}
