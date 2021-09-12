import request from 'umi-request';

export async function queryRule(params?: any) {
  return request('rule', {
    params,
  });
}

export async function exportExcel(params: any) {
  return request('exportExcel', {
    params,
  });
}
