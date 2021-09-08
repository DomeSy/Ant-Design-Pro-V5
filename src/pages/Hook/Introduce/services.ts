import { request } from 'umi';

export async function queryList(params?: any) {
  return request('/api/hook/queryList', {
    params,
  });
}
