import { request } from 'umi';

export async function queryList(params?: any) {
  return request('ahook/queryList', {
    params,
  });
}
