/**
 * @module 处理一些公共类型
 */

import { reTel, rePassword, reName, reCard, reSfz, reEmil, reTelEmil, reNumber, reNumberZero, reNumberFloat } from '@/utils/Regexp';

export interface RuleProps {
  reTel: RegExp; // 手机号
  rePassword: RegExp; // 密码
  reName: RegExp; // 姓名
  reCard: RegExp; // 银行卡
  reSfz: RegExp; // 身份证
  reEmil: RegExp; // 邮箱
  reTelEmil: RegExp; // 邮箱 + 电话
  reNumber: RegExp; // 数字
  reNumberZero: RegExp; // 非0数字
  reNumberFloat: RegExp; // 数字加浮点数
}

interface CommonProps {
  rulesMethod: RuleProps; //表单组件和表格组件的正则类型
}

const commonSy: CommonProps = {
  rulesMethod: { reTel, rePassword, reName, reCard, reSfz, reEmil, reTelEmil, reNumber, reNumberZero, reNumberFloat },
};

export default commonSy;
