/**
 * @module Mask 弹框配置模块
 *
 */

interface maskFromProps {
  cancelText: string; // 取消按钮文字
  resetText: string; // 重置按钮文字
  submitText: string; // 确定按钮文字
  message: string;// 成功时的文字
}

interface MaskProps {
  maskFrom: maskFromProps;
}

const maskSy: MaskProps = {
  maskFrom: {
    cancelText: '取消',
    resetText: '重置',
    submitText: '提交',
    message: '提交成功',
  },
};

export default maskSy;
