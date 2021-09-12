import { request } from 'umi';

export async function queryDetail(params?: any) {
  return request('hook/queryDetail', {
    method: 'POST',
    params,
  });
}
