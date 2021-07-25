import { useState } from 'react';
import { Modal, Button, message } from 'antd';
import { FromProps } from './interface';
import { maskSy } from '@/utils/Setting';

/**
 * @module 表单弹框模块 继承弹框的样式
 *
 * 这里在表单提交上提供两种方法，第一种通过onSubmit直接返回方法自行操作，第二种是直接通过传递接口自动传递
 * @param formRef 表单的ref
 * @param onSubmit 提交完成后的操作，但如果使用，绑定的提交不会拥有loading效果，也就是没有防抖功能
 * @param onEdit 如果存在则改变传递接口的参数，接收表单的值，返回表单的对象
 * @param onRequest 请求接口的函数
 * @param onCancel  取消时的回调函数
 * @param cancelText  取消时的默认文字 默认 取消
 * @param resetText  重置时的默认文字 默认 重置
 * @param submitText  提交时的默认文字 默认 提交
 * @param message 提交成功的提示语 默认 提交成功
 */
const MaskFrom: React.FC<FromProps> = ({
  children,
  formRef,
  onReset,
  onCancel,
  onSubmit,
  onEdit,
  onRequest,
  ...props
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Modal
      {...props}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          {props.cancelText || maskSy.maskFrom.cancelText}
        </Button>,
        <Button
          key="reset"
          onClick={() => {
            if (onReset) {
              onReset();
              return;
            }
            formRef?.current?.resetFields();
          }}
        >
          {props.resetText || maskSy.maskFrom.resetText}
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={async (e) => {
            const fieldsValue = await formRef?.current?.validateFields();
            setLoading(true);
            const params = onEdit ? await onEdit(fieldsValue) : fieldsValue;
            const res = await onRequest(params);
            setLoading(false);
            if (typeof res !== 'boolean') {
              message.success(props.message || maskSy.maskFrom.message);
              if (onSubmit) return onSubmit();
            }
          }}
        >
          {props.submitText || maskSy.maskFrom.submitText}
        </Button>,
      ]}
    >
      {children}
    </Modal>
  );
};

export default MaskFrom;
