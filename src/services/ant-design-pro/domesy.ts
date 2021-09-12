import { request } from 'umi';

// 动态菜单
export async function getMenuData() {
  return request('getMenuData',{
    method:'GET',
  });
}
