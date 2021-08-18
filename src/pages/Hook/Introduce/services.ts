import request from 'umi-request';

export async function queryList(params?: any) {
  return request('/api/hook/queryList', {
    params,
  });
}
