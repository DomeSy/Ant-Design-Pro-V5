import React, { useState, useEffect } from 'react';
import { PageLayout } from '@/components';
import { useModel } from 'umi';

const FileShow: React.FC<any> = ({children, ...props}) => {
  const { initialState } = useModel('@@initialState');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const { pathname } = props.location;
    const res = pathname.split('/')
    setContent(initialState.content[res[1]][res[2]])
  }, [props.location.pathname]);

  return (
    <PageLayout
      content={
        content
      }
    >
      {children}
    </PageLayout>
  );
};

export default FileShow;
