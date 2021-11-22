import { request } from 'umi';

export async function queryDetail(params?: any) {
  return request('map/queryDetail', {
    method: 'POST',
    params,
  });
}
