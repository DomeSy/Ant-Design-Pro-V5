import { useState, useEffect } from 'react';
import { Modal, Button, message } from 'antd';
import { Form } from '@/components';
import { maskSy } from '@/utils/Setting';
/**

*/

const MaskFrom: React.FC<any> = ({
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
    <div></div>
  );
};

export default MaskFrom;
