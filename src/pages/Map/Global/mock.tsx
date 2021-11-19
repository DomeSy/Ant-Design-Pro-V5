import React, { useEffect, useState } from 'react';
import { Map } from '@/components'
import { Button } from 'antd';

const Mock: React.FC<any> = () => {
  const [scene, setScene] = useState<any>()
  const [layer, setLayer] = useState<any>()

  return (
   <>
    <Button type='primary' onClick={() => {
      // scene.setMapStatus({
      //   dragEnable: true
      // })
      // layer.hide()
      console.log(layer, '000')
      layer.on('click', (e:any) => {
          console.log(e,'--2-')
        })
        // onDoubleClick
    }}> 测试 </Button>
    <div style={{width: '100%', height: '600px'}}>
      <Map.Province
        init={[320000]}
        getScene={(scene) => {
          setScene(scene)
        }}
        // initMethod={[
        //   {
        //     type: 'click',
        //     render: (e:any) => {
        //       console.log(e, '009')
        //     }
        //   },
        //   {
        //     type: 'dblclick',
        //     render: (e:any) => {
        //       console.log(e, '008')
        //     }
        //   }
        // ]}
        onClick={(e) => {console.log(e, '111')}}
        getLayer={(layer) => {
          setLayer(layer)
        }}
      />
    </div>
   </>
  );
};

export default Mock
