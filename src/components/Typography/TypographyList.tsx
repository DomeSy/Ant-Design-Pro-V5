import { useState } from 'react';
import { Modal, Button, message } from 'antd';
import { ListProps } from './interface';
import { Typography } from 'antd';
import { maskSy } from '@/utils/Setting';

const TypographyList: React.FC<ListProps> = ({ children}) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Typography.Text mark={true}>{children}</Typography.Text>
  );
};

export default TypographyList;
