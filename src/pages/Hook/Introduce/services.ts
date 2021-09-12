import { request } from 'umi';

export async function queryList(params?: any) {
  return request('hook/queryList', {
    params,
  });
}
