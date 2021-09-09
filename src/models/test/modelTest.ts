import { useState, useCallback } from 'react';

interface Props {
  count?: number
}

const initInfoValue: Props = {
  count: 1,
}

export default function modelTest() {

  const [init, setInitValue] = useState(initInfoValue);

  const setInit = useCallback((res:any) => {
    setInitValue({count: res})
  }, [init])

  const setAdd= useCallback((res:any) => {
    setInitValue({ count: res +1})
  }, [init])

  return {
    init,
    setAdd,
    setInit
  };
}
