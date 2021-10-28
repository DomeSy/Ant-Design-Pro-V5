import { request } from 'umi';

export async function queryDetail(params?: any) {
  return request('ahook/queryDetail', {
    method: 'POST',
    params,
  });
}
