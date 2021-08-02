import { formLayoutProps } from '@/components';
import commonSy, { RuleProps } from '../commonSy';

/**
 * @module 全局配置框架部分
 *
 */

interface LayoutProps {
  way: 'horizontal' | 'vertical'; //配置文本的展现模式， 分别为 水平和垂直
  formItemLayout: formLayoutProps; //表单的布局设置
  formItemTailLayout: formLayoutProps; //表单的布局设置
  width: number | string; // 统一宽度
}

interface FormListProps {
  rule: RuleProps;
  precision: number; // 步进器小数点的位数
}
interface FromProps {
  submitText: string; // 提交按钮文字
  resetText: string; // 重置按钮文字
  layout: LayoutProps; // 布局
  formList: FormListProps; //有关表单的配置
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

const formItemTailLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 12 },
    lg: { span: 16 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18, offset: 4 },
  },
};

export { FromProps };

const fromSy: FromProps = {
  submitText: '提交',
  resetText: '重置',
  layout: {
    way: 'horizontal',
    width: '40%',
    formItemLayout,
    formItemTailLayout,
  },
  formList: {
    rule: commonSy.rulesMethod,
    precision: 2,
  },
};

export default fromSy;
