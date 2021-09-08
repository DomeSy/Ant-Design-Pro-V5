import { request } from 'umi';

export async function queryDetail(params?: any) {
  return request('/api/hook/queryDetail', {
    method: 'POST',
    params,
  });
}
