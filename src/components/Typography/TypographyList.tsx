import { useState } from 'react';
import { Modal, Button, message } from 'antd';
import { MaskFromProps } from './interface';
import { maskSy } from '@/utils/Setting';

const TypographyList: React.FC<MaskFromProps> = ({
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
    <div>1</div>
  );
};

export default TypographyList;
