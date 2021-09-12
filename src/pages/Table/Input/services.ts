import { request } from 'umi';

export async function queryDetail(params?: any) {
  return request('table/queryDetail', {
    params,
  });
}
