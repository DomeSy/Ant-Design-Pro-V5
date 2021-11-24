import { Control } from '@antv/l7'
import { CountryLayer, ProvinceLayer, CityLayer, CountyLayer } from '@antv/l7-district';
import { MapSy } from '@/utils/Setting';
import type { MapProvinceProps, configControlProps } from './interface';
import { message } from 'antd';

let Layer:any
const { district } = MapSy

// 初始化方法
const onLoaded =  (scene: any, name:string, {  status={}, config={}, getScene, getLayer, initMethod, ...props}:MapProvinceProps) => {
  scene.on('loaded', () => {
    const LayoutConfig = {
      data: props.data ? props.data : undefined,
      joinBy: props.joinBy || district.joinBy,
      visible: config?.visible,
      adcode: name === 'China' ?  undefined : props.init,
      depth: config?.depth ? config.depth :  name === 'China' ? 1 : name === 'Province'  ? 2 : 3,
      stroke: config?.stroke || district.config.stroke,
      strokeWidth: config?.strokeWidth || district.config.strokeWidth,
      strokeOpacity: config?.strokeOpacity || district.config.strokeOpacity,
      label: name === 'China' ? {
        opacity: config.noneLabel ? 0 : district.config.noneLabel ? 0 : undefined,
      } : {
        field: 'NAME_CHN',
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
      popup: {
        Html: (data:any) => {
          return data.NAME_CHN
        },
        ...config?.popup
      },
      bubble:{ ...config?.bubble },
      ...config?.extra
    }

    Layer = name === 'China' ? new CountryLayer(scene, LayoutConfig) :  name === 'Province' ?  new ProvinceLayer(scene, LayoutConfig) : name === 'City' ? new CityLayer(scene, LayoutConfig) : new CountyLayer(scene, LayoutConfig)

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
    // 增加图层显示
    getControl(scene, props, Layer)
  });

  scene.setMapStatus({ ...district.status, ...status})
  if(getScene) getScene(scene)
}

// 增加显示图层
const getControl = (scene:any, { addControl, id, configControl }:any, Layer:any) => {

  if(configControl && Array.isArray(configControl) && configControl.length !== 0){
    configControl.map((item:configControlProps) => {
      if(item.method === 'explain'){
        item.explain && typeof item.explain === 'object' && !Array.isArray(item.explain ) ? explainHTML(scene, id, item) : message.error('请书写explain相关属性')
      }else if(item.method === 'extra'){
        item.extra && typeof item.extra === 'object' && !Array.isArray(item.extra ) ? extraHTML(scene, id, item) : message.error('请书写extra相关属性')
      }
    })
  }

  if(addControl && Array.isArray(addControl) && addControl.length !== 0){
    addControl.map((item, index) =>{
      const { onAdd, ...prop } = item
      const legend = new Control({
        position: 'bottomright',
        name: `${id}Control${index}`,
        ...prop
      })

      legend.onAdd = () => {
        const el = document.createElement('div')
        el.innerHTML = onAdd(Layer)
        return el
      }
      scene.addControl(legend)
    })
  }

}

// 图例说明HTML
const explainHTML = (scene:any, id:string, { explain }: configControlProps) => {
  const legend = new Control({
    position: 'bottomright',
    name: id + 'ControlColor'
  })

  legend.onAdd = () => {
    const el = document.createElement('div');

    const colorArray = explain?.color || [];

    let color = ''
    colorArray.map((ele) => {
      color += `<i style="background: ${ele.value}; width: 18px;height:18px; float: left;margin-right: 8px;opacity: 0.7" ></i>${ele.name}<p></p>`
    })

    el.innerHTML = `<div class=${explain?.class} style="width: 120px; padding: 6px 8px; font: 14px/16px Arial, Helvetica, sans-serif; background: rgba(255,255,255,0.9); box-shadow: 0 0 15px rgba(0,0,0,0.2);border-radius: 5px;">
      ${explain?.topRender ? explain.topRender() : `<div style="line-height: 30px;font-weight: 500">${explain?.title || '图例说明：'}</div>` }
      ${color}
      ${explain?.bottomRender ? explain.bottomRender() : ''}
    </div>`
    return el
  }
  scene.addControl(legend)
}

const extraHTML = (scene:any,  id: string, { extra }: configControlProps) => {
  const legend:any = new Control({
    position: 'topright',
    name: `${id}ExtraData`
  })

  legend.onAdd = () => {
    const el = document.createElement('div');

    Layer.on(extra?.way || 'mousemove', (e:any) => {
      const info = scene.getControlByName(`${id}ExtraData`);
      info.update(e);
    })

    el.innerHTML = extra?.noneRender ? extra?.noneRender() : ``

    legend.update = (e:any) => {
      const title = e.feature.properties.NAME_CHN
      el.innerHTML = `<div class=${extra?.class} style="width: 240px; padding: 6px 8px; font: 14px/16px Arial, Helvetica, sans-serif; background: rgba(255,255,255,0.9); box-shadow: 0 0 15px rgba(0,0,0,0.2);border-radius: 5px;">
        ${extra?.topRender ? extra.topRender(e.feature) : `<div style="line-height: 30px;font-weight: 500">${title}</div>`}
        ${extra?.bottomRender ? extra.bottomRender(e.feature) : ''}
      </div>`
    }

    return el
  }
  scene.addControl(legend)
}


// 更新init
const updateInit = (init: any) => {
  Layer.updateDistrict(Array.isArray(init) ? init : [init]);
}

const unmount = (scene:any) => {
  Layer?.destroy()
}

export {
  updateInit,
  onLoaded,
  unmount
}
