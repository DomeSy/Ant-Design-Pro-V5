import { useState, useCallback } from 'react';

interface Props {
  count?: number
}

const initInfoValue: Props = {
  count: 1,
}

export default function modelTest() {

  const [init, setInitValue] = useState(initInfoValue);
  const [loading, setLoading] = useState(false);

  const waitTime = (time: number = 2000) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const setInit = useCallback(async(res:any) => {
    setLoading(true)
    await waitTime()
    setLoading(false)
    setInitValue({count: res})
  }, [init])

  const setAdd= useCallback((res:any) => {
    setInitValue({ count: res +1})
  }, [init])

  return {
    loading,
    init,
    setAdd,
    setInit
  };
}
