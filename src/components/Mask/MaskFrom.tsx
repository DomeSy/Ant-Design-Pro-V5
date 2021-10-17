import { useState, useEffect } from 'react';
import { Modal, Button, message } from 'antd';
import { Form } from '@/components';
import { MaskFromProps } from './interface';
import { maskSy } from '@/utils/Setting';
/**
 * @module 表单弹框模块 继承弹框的样式
 *
 * 这里在表单提交上提供两种方法，第一种通过onSubmit直接返回方法自行操作，第二种是直接通过传递接口自动传递
 *
 * @param formList 表单的list属性
 * @param form 表单的其余属性
 * @param onSubmit 提交完成后的操作，但如果使用，绑定的提交不会拥有loading效果，也就是没有防抖功能
 * @param onEdit 如果存在则改变传递接口的参数，接收表单的值，返回表单的对象，注意如果返回的不是对象，则不会进行下步操作，只有返回对象才会走接口，（原因是有些数据需要Edit返回）
 * @param onRequest 请求接口的函数
 * @param onCancel  取消时的回调函数
 * @param cancelText  取消时的默认文字 默认 取消
 * @param resetText  重置时的默认文字 默认 重置
 * @param submitText  提交时的默认文字 默认 提交
 * @param message 提交成功的提示语 默认 提交成功
 */

const MaskFrom: React.FC<MaskFromProps> = ({
  children,
  onReset,
  onCancel,
  onSubmit,
  onEdit,
  onRequest,
  form={},
  formList=[],
  ...props
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [maskFormRef, setMaskFormRef] = useState<any>(false);

  useEffect(() => {
    if(props.visible){
      maskFormRef?.current?.resetFields()
    }
  }, [props.visible])

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
          onClick={async () => {
            if (onReset) {
              onReset();
              return;
            }
            console.log(form)
            await maskFormRef?.current?.resetFields();
            if(form.fieldValues && Array.isArray(form.fieldValues) && form.fieldValues.length !== 0){
              form.fieldValues.map((item) => {
                let payload: any = {};
                payload[item.name] = item.value;
                maskFormRef?.current?.setFieldsValue(payload);
              })
            }
          }}
        >
          {props.resetText || maskSy.maskFrom.resetText}
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={async (e) => {
            const fieldsValue = await maskFormRef?.current?.validateFields();
            const params = onEdit ? await onEdit(fieldsValue) : fieldsValue;
            if(typeof params === 'string') return message.error(params)
            if(typeof params !== 'object' || Array.isArray(params)) return message.error('请在onEdit中返回对象或则字符串！')
            if(!onRequest){
              message.error('请在onRequest，写入对应的接口')
              return
            }
            setLoading(true);
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
      <Form
        method="mask"
        formList={formList}
        getRef={(formRef: any) => {
          setMaskFormRef(formRef);
        }}
        {...form}
      />
    </Modal>
  );
};

export default MaskFrom;
