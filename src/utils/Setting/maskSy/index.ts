/**
 * @module Mask 弹框配置模块
 *
 */

interface maskFromProps {
  cancelText: string;
  resetText: string;
  submitText: string;
  message: string;
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
