import { MapSy } from '@/utils/Setting';
import { ProvinceLayer } from '@antv/l7-district';
import type { MapProvinceProps } from './interface';

let Layer:any
const { district, key } = MapSy

// 初始化方法
const onLoaded = (scene: any, {  status={}, config={}, getScene, getLayer, initMethod, ...props}:MapProvinceProps) => {
  scene.on('loaded', () => {
    Layer = new ProvinceLayer(scene, {
      data: props.data ? props.data : undefined,
      joinBy: props.joinBy || district.joinBy,
      visible: config?.visible,
      adcode: props.init,
      depth: config?.depth || 2,
      stroke: config?.stroke || district.config.stroke,
      strokeWidth: config?.strokeWidth || district.config.strokeWidth,
      strokeOpacity: config?.strokeOpacity || district.config.strokeOpacity,
      label: {
        opacity: config.noneLabel ? 0 : district.config.noneLabel ? 0 : undefined,
        ...district?.config?.label,
        ...config?.label
      },
      fill: {
        color: {
          field: config?.fillColor?.field || 'NAME_CHN',
          values: config?.fillColor?.values || district.config.fillColor,
        },
        ...config?.fill
      },
      popup: { ...config?.popup },
      bubble:{ ...config?.bubble },
      ...config?.extra
    });
    if(getLayer) getLayer(Layer)

    if(initMethod && initMethod.length !== 0){
      initMethod.map((item) => {
        if(props.onClick && item.type === 'click') return
        if(props.onDoubleClick && item.type === 'dblclick') return
        if(props.unClick && item.type === 'unclick') return
        if(props.unDoubleClick && item.type === 'undblclick') return
        Layer.on(item.type, (e:any) => {
          item.render(e)
        })
      })
    }
    if(props.onClick){
      Layer.on('click', (e:any) => {
        if(props.onClick) props.onClick(e)
      })
    }
    if(props.onDoubleClick){
      Layer.on('dblclick', (e:any) => {
        if(props.onDoubleClick) props.onDoubleClick(e)
      })
    }
    if(props.unClick){
      Layer.on('unclick', (e:any) => {
        if(props.unClick) props.unClick(e)
      })
    }
    if(props.unDoubleClick){
      Layer.on('undblclick', (e:any) => {
        if(props.unDoubleClick) props.unDoubleClick(e)
      })
    }
  });

  scene.setMapStatus({ ...district.status, ...status})
  if(getScene) getScene(scene)
}

// 更新init
const updateInit = (init: any) => {
  Layer.updateDistrict(Array.isArray(init) ? init : [init]);
}

// 卸载
const unmount = (scene:any) => {
  scene.destroy()
}

export {
  updateInit,
  onLoaded,
  unmount
}
