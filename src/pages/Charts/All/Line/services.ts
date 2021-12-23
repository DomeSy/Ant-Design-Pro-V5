import { request } from 'umi';

export async function queryData(params?: any) {
  const res = await request('charts/queryData', {
    method: 'POST',
    params,
  });

  return res.data.data
}
