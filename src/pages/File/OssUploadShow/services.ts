import { request } from 'umi';

export async function queryDetail(params?: any) {
  return request('file/queryDetail', {
    method: 'POST',
    params,
  });
}
