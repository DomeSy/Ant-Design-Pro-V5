
import React, { useEffect } from 'react';
import { useModel } from 'umi';
import { Jump } from '@/utils';

const LiveSetting: React.FC = () => {

  const { setInitialState  } = useModel('@@initialState', (ret) => ({
    setInitialState: ret.setInitialState
  }));

  useEffect(() => {
    window.addEventListener('message', onMessage, false);
  }, [])

  const onMessage = (params:any) => {
    const { data } = params;
    if(data === 'domesy-config'){
      Jump.go('/globalSetting')
    }else if(data === 'domesy-close'){
      setTimeout(() => setInitialState((s:any)=>({...s, liveSetting: false})), 1500)
    }
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 5,
        pointerEvents: 'none',
      }}
    >
      <iframe
        title="resg"
        src={'http://mobile.domesy.cn/live2d/index.html'}
        style={{
          width: '100%',
          border: '0px',
          height: 300,
          position: 'fixed',
          left: '80%',
          bottom: 30,
          pointerEvents: 'auto',
        }}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        scrolling="auto"
      />
    </div>
  )
};

export default LiveSetting;
