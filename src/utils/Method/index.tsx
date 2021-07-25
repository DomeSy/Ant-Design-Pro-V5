import moment from 'moment';

/**
 * @module 公用方法
 *
 */
class Method {
  /**
   * @module 日期转化
   *
   * @param type 默认为 1 格式 YYYY-MM-DD HH:mm:ss 年月日 时分秒
   * @param type 2 格式 YYYY-MM-DD
   */
  static Moment = (data: string, type: number = 1) => {
    let result = '';
    if (type === 1) {
      result = moment(data).format('YYYY-MM-DD HH:mm:ss');
    } else if (type === 2) {
      result = moment(data).format('YYYY-MM-DD');
    }
    return result;
  };

  /**
   * @module 防抖
   *
   * @param fn 包裹的函数
   * @param await 时长，默认1000
   * @param immediate 是否在触发事件后 在时间段n开始，立即执行，否则是时间段n结束，才执行
   */
  static Debounce(fn: Function, awit: number = 1000, immediate: boolean = false) {
    let timer: NodeJS.Timeout | null;
    return (...args: any) => {
      if (timer) clearInterval(timer);
      if (immediate) {
        if (!timer) fn.apply(this, args);
        timer = setTimeout(() => {
          //n 秒内 多次触发事件,重新计算.timeer
          timer = null; //n 秒内没有触发事件 timeer 设置为null，保证了n 秒后能重新触发事件 flag = true = !timmer
        }, awit);
      } else {
        timer = setTimeout(() => {
          fn.apply(this, args);
        }, awit);
      }
    };
  }

  /**
   * @module 节流
   *
   * @param fn 包裹的函数
   * @param await 时长，默认1000
   */
  static Throttle(fn: Function, awit: number = 1000, immediate: boolean = true) {
    let timer: NodeJS.Timeout | null;
    return (...args: any) => {
      if (!timer) {
        fn.apply(this, args);
        timer = setTimeout(() => {
          timer && clearTimeout(timer);
          timer = null;
        }, awit);
      }
    };
  }

  /**
   * @module 将数据转化为FormData对象
   * @param obj
   * @returns
   */
  static convertToFormData = (obj: any) => {
    const data = new FormData();
    Object.keys(obj).forEach((i) => {
      if (obj[i] === undefined) return;
      if (obj[i] instanceof FileList) {
        [].map.call(obj[i], (file) => data.append(i, file));
      } else if (
        obj[i] instanceof Array &&
        (obj[i][0] instanceof File ||
          (typeof obj[i][0] === 'string' && obj[i][0].indexOf('data') === 0) ||
          obj[i][0] instanceof FileList)
      ) {
        // 多张图片
        obj[i].forEach((item: any) => {
          if (item instanceof FileList) [].map.call(item, (file) => data.append(i, file));
          else data.append(i, item);
        });
      } else if ((typeof obj[i]).indexOf('object') >= 0) {
        if (
          obj[i] instanceof Array &&
          (obj[i][0] instanceof File || obj[i][0] instanceof FileList)
        ) {
          // 上传多张图片
          obj[i].forEach((item: any) => {
            if (item instanceof File) data.append(i, item);
            else [].map.call(item, (file) => data.append(i, file));
          });
        } else data.append(i, JSON.stringify(obj[i]));
      } else {
        data.append(i, obj[i]);
      }
    });
    return data;
  };

  /**
   * @module 获取年月日
   *
   * @param {*} type
   * @param {*} show
   */
  static getDate = (type?: any, show?: any) => {
    let dd = new Date();
    let option: any = {};
    let isShow = 0;
    if (type) {
      option = {
        year: type.year || '',
        mounth: type.mounth || '',
        day: type.day || '',
      };
    } else {
      option = {
        year: '-',
        mounth: '-',
        day: '',
      };
    }
    if (show) {
      isShow = show;
    }
    let y = dd.getFullYear();
    let m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1;
    let d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate();
    let result = '';
    if (isShow == 0) {
      result = `${y}${option.year}${m}${option.mounth}${d}${option.day}`;
    } else if (isShow == 1) {
      result = `${m}${option.mounth}${d}${option.day}`;
    } else if (isShow == 2) {
      result = `${d}${option.day}`;
    }
    return result;
  };
}

export default Method;
