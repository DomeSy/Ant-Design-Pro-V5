import React, { useEffect, useState } from 'react';
import { Map } from '@/components'
import { Select } from 'antd';
import { ProvinceData } from './test'
import { Button } from 'antd';
const { Option } = Select;

const Mock: React.FC<any> = () => {
  const [scene, setScene] = useState<any>()
  const [ init, setInit ] = useState<number>(320000)
  const [layer, setLayer] = useState<any>()

  return (
   <>
    {/* <Button type='primary' onClick={() => {
      // scene.setMapStatus({
      //   dragEnable: true
      // })
      // layer.hide()
      console.log(layer, '000')
      layer.on('click', (e:any) => {
          console.log(e,'--2-')
        })
        // onDoubleClick
    }}> 测试 </Button> */}
    <Select
      // defaultValue="黑龙江省"
      value={init}
      style={{ width: 120 }}
      onChange={(e) => { setInit(e) }}
    >
      {ProvinceData.map((province, i) => {
        return (
          <Option key={i} value={province.adcode}>
            {province.NAME_CHN}
          </Option>
        );
      })}
    </Select>
    <div style={{width: '100%', height: '600px'}}>
      <Map.Province
        init={init}
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
        // // ]}
        // onClick={(e) => {console.log(e, '111')}}
        // getLayer={(layer) => {
        //   setLayer(layer)
        // }}
      />
    </div>
   </>
  );
};

export default Mock
