import { history } from 'umi';

/**
 * @module 跳转逻辑封装（并获取参数）
 *
 * @param go 跳转，记录地址栏，一个参数可传字符串(默认跳转首页),没有参数可以直接跳转
 * @param back 回退(默认回退1)
 * @param replace 重定向（与go一样）
 * @param get 获取地址栏参数
 *
 * @param href 跳转外部地址
 * @param title 设置标题
 *
 * @param url 跳转的地址
 * @param params 跳转时所带的参数
 */
class Jump {
  static go = (url: string, params: Object = {}) => {
    history.push(url, params);
  };

  static back = (back: number = -1) => {
    history.go(back);
  };

  static replace = (url: string, params: Object = {}) => {
    history.replace(url, params);
  };

  static href = (url: string = 'https://www.baidu.com/', params: Object = {}) => {
    let str = '';
    if (Object.keys(params).length != 0) {
      for (let name in params) {
        str += `${name}=${params[name]}&`;
      }
    }
    window.location.href = str.length === 0 ? url : `${url}?${str.substring(0, str.length - 1)}`;
  };

  static get = () => {
    return history.location.state;
  };

  static title = (title: string) => {
    document.title = title;
    return;
  };
}
export default Jump;
