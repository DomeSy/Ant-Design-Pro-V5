/**
 * @module 正则规则
 */

// 正则手机号
export const reTel = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

// 正则密码:(密码长度必须为6至20位)
export const rePassword = /^([a-z0-9\.\@\!\#\$\%\^\&\*\(\)]){6,20}$/i;

// 验证是否是真实姓名
export const reName = /^[\u4e00-\u9fa5a-zA-Z]*$/;

// 验证银行卡号
export const reCard = /^\d{16}|\d{19}$/;

// 验证身份证号码
export const reSfz = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;

// 验证支付宝账号（手机号和邮箱）
export const reTelEmil = /^(?:1[3-9]\d{9}|[a-zA-Z\d._-]*\@[a-zA-Z\d.-]{1,10}\.[a-zA-Z\d]{1,20})$/;

// 验证邮箱
export const reEmil = /^[a-zA-Z\d._-]*\@[a-zA-Z\d.-]{1,10}\.[a-zA-Z\d]{1,20}$/;

// 数字
export const reNumber = /^\d{n}$/

// 非0正整数
export const reNumberZero = /^\+?[1-9][0-9]*$/

// 数字和浮点数(后2位, 大于0)
export const reNumberFloat = /^(([0-9]|([1-9][0-9]{0,9}))((\.[0-9]{1,2})?))$/;
