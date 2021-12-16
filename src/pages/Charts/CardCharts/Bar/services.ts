import { request } from 'umi';

export async function queryDetail(params?: any) {
  return request('map/queryDetail', {
    method: 'POST',
    params,
  });
}

export async function queryData(params?: any) {
  const res = await request('charts/queryData', {
    method: 'POST',
    params,
  });

  return res.data.data
}
