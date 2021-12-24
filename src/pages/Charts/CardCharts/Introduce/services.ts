import { request } from 'umi';

export async function queryDetail(params?: any) {
  return request('charts/queryDetail', {
    method: 'POST',
    params,
  });
}
