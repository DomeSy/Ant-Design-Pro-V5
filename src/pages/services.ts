import request from 'umi-request';

export async function queryRule(params?: any) {
  const res = await request('/api/rule', {
    params,
  });
  return {
    data: res,
  }
}

export async function exportExcel(params: any) {
  return request('/api/exportExcel', {
    params,
  });
}
