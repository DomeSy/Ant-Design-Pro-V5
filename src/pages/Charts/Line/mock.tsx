import React, { useState, useEffect } from 'react';
import { Charts } from '@/components';
import { queryData } from './services'

const Mock: React.FC<any> = () => {

  const [data, setData] = useState<Array<any>>([])

  useEffect(() => {
    queryData({detail: 'data'}).then((res) => {
      setData([...res])
    })
  }, [])

  return (
   <>
    <Charts fields={{
      a: '北方人口',
      b: '南方人口'
    }} type='column' data={data}></Charts>
   </>
  );
};

export default Mock
