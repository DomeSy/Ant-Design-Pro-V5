import { request } from 'umi';

export async function queryDetail(params?: any) {
  return request('domesy/queryDetail', {
    method: 'POST',
    params,
  });
}
