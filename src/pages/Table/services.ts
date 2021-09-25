import { request } from 'umi';

export async function queryDetail(params?: any) {
  return request('table/queryDetail', {
    method: 'POST',
    params,
  });
}

export async function queryTable(params?: any) {
  const res = await request('table/queryTable', {
    method: 'POST',
    params,
  });
  return {
    data: res.data?.data || [],
    total: res.total
  }
}
