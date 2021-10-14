import { request } from 'umi';

export async function queryDetail(params?: any) {
  return request('domesy/queryDetail', {
    method: 'POST',
    params,
  });
}


export async function queryRule(params?: any) {
  const res = await request('rule', {
    params,
  });
  return {
    data: res,
  }
}

export async function exportExcel(params: any) {
  return request('exportExcel', {
    params,
  });
}

