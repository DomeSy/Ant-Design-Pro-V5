import React, { useRef, useState, useEffect } from 'react';
import { Button, message, Popover, Spin } from 'antd';
import { useEventListener, useFullscreen, useHover, useMouse, configResponsive, useResponsive, useScroll, useSize, useTextSelection, useRequest } from 'ahooks';

const Mock: React.FC<any> = () => {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState('');

  const clickHandler = () => {
    setValue(value + 1);
  };

  const ref = useRef<any>(null);
  useEventListener('click', clickHandler, { target: ref });
  const keyDownHandler = (ev: KeyboardEvent) => {
    setValue1(ev.code);
  };

  useEventListener('keydown', keyDownHandler);
  return (
    <>
      <div style={{fontWeight: 'bolder', marginBottom: 8}}>基础用法:</div>
      <Button type='primary' ref={ref}>
        点击次数 { value } 次
      </Button>
      <div style={{fontWeight: 'bolder', margin:'8px 0'}}>监听键盘效果:</div>
      <p>请输入键盘的事件：{value1}</p>
    </>
  );
};

export const MockFullscreen: React.FC<any> = () => {

  const ref = useRef<any>(null);
  const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] = useFullscreen(ref);
  const [, { enterFullscreen: enterFullscreenImg }] = useFullscreen(() => document.getElementById('fullscreen-img'));

  return (
    <div>
      <div ref={ref} style={{ background: 'white' }}>
        <div style={{fontWeight: 'bolder', marginBottom: 8}}>基础用法:</div>
        <div>当前状态：{isFullscreen ? '全屏状态' : '非全屏状态'} </div>
        <div style={{marginTop: 8, display: 'flex', justifyContent: 'flex-start'}}>
          <Button type='primary' style={{marginRight: 8}} onClick={enterFullscreen}>全屏</Button>
          <Button type='primary' style={{marginRight: 8}} onClick={exitFullscreen}>退出全屏</Button>
          <Button type='primary' onClick={toggleFullscreen}>切换状态</Button>
        </div>
      </div>
      <div style={{fontWeight: 'bolder', margin:'8px 0'}}>图片全屏:</div>
      <img id="fullscreen-img" src={'https://ahooks.js.org/static/react-hooks.dd0f9d30.jpg'} style={{ width: 320 }} alt="" />
      <div style={{marginTop: 8, display: 'flex', justifyContent: 'flex-start'}}>
        <Button type='primary' style={{marginRight: 8}} onClick={enterFullscreenImg}>全屏</Button>
      </div>
    </div>
  );
};

export const MockHover: React.FC<any> = () => {

  const ref = useRef<any>(null);
  const isHovering = useHover(ref);

  const isHovering1 = useHover(() => document.getElementById('hover-div'), {
    onEnter: () => {
      message.info('进入的时候触发');
    },
    onLeave: () => {
      message.info('离开的时候触发');
    },
  });

  return (
    <div>
      <div ref={ref} style={{fontWeight: 'bolder', marginBottom: 8}}>通过ref获取:</div>
      <div ref={ref}>鼠标放入上边：{isHovering ? '停留' : '离开'} </div>
      <div style={{fontWeight: 'bolder', margin:'8px 0'}}>图片DOM 元素获取:</div>
      <div id="hover-div">鼠标放入上边：{isHovering1 ? '停留' : '离开'}</div>
    </div>
  );
};

configResponsive({
  small: 0,
  middle: 800,
  large: 1200,
});

export const MockResponsive: React.FC<any> = () => {

  const responsive = useResponsive();

  return (
    <>
      <div>请改变页面的尺寸</div>
      {
        Object.keys(responsive).map((key) => (
          <p key={key}>
            {key} {responsive[key] ? '✔' : '✘'}
          </p>
        ))
      }
    </>
  );
};

export const MockMouse: React.FC<any> = () => {

  const mouse = useMouse();

  return (
    <>
      <div>相对于屏幕的水平坐标(screenX)：{mouse.screenX}</div>
      <div>相对于屏幕的垂直坐标(screenY)：{mouse.screenY}</div>
      <div>相对于浏览器内部的水平坐标(clientX)：{mouse.clientX}</div>
      <div>相对于浏览器内部的垂直坐标(clientY)：{mouse.clientY}</div>
      <div>相对于浏览器整个浏览器的水平坐标(pageX)：{mouse.pageX}</div>
      <div>相对于浏览器整个浏览器的垂直坐标(pageY)：{mouse.pageY}</div>
    </>
  );
};

export const MockScroll: React.FC<any> = () => {
  const ref = useRef<any>(null);
  const scroll = useScroll(ref);

  return (
    <>
      <div>滚动Left：{scroll?.left || 0}  滚动Top: {scroll?.top || 0}</div>
      <div ref={ref} style={{height: 200, width: 300, border: '1px solid #eee', overflow: 'scroll', fontSize: 32, whiteSpace: 'nowrap'}}>
        <div>如果对你有帮助，请点个Star支持下吧！~~</div>
        <div>如果对你有帮助，请点个Star支持下吧！~~</div>
        <div>如果对你有帮助，请点个Star支持下吧！~~</div>
        <div>如果对你有帮助，请点个Star支持下吧！~~</div>
        <div>如果对你有帮助，请点个Star支持下吧！~~</div>
        <div>如果对你有帮助，请点个Star支持下吧！~~</div>
        <div>如果对你有帮助，请点个Star支持下吧！~~</div>
        <div>如果对你有帮助，请点个Star支持下吧！~~</div>
        <div>如果对你有帮助，请点个Star支持下吧！~~</div>
        <div>如果对你有帮助，请点个Star支持下吧！~~</div>
        <div>如果对你有帮助，请点个Star支持下吧！~~</div>
        <div>如果对你有帮助，请点个Star支持下吧！~~</div>
        <div>如果对你有帮助，请点个Star支持下吧！~~</div>
        <div>如果对你有帮助，请点个Star支持下吧！~~</div>
      </div>
    </>
  );
};

export const MockSize: React.FC<any> = () => {

  const ref = useRef<any>();
  const size = useSize(ref);

  const dom = document.querySelector('body');
  const size1 = useSize(dom);

  return (
    <>
      <div style={{ fontWeight: 'bold', marginBottom: 8}}>通过ref获取：</div>
      <div ref={ref}>改变屏幕尺寸(div)： 宽度：{size?.width} px, 高度：{size?.height} px</div>
      <div style={{ fontWeight: 'bold', margin: '8px 0'}}>通过dom获取：</div>
      <div ref={ref}>改变屏幕尺寸（body）： 宽度：{size1?.width} px, 高度：{size1?.height} px</div>
    </>
  );
};

const getResult = (keyword: string): Promise<string> => {
  const trimedText = keyword.trim() !== '';
  if (!trimedText) {
    return Promise.resolve('');
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(`可以作出一些翻译效果，选取的文字： ${keyword}`), 1000);
  });
};

const Test: React.FC<any> = () => {

  const { text = '', left = 0, top = 0, height = 0, width = 0 } = useTextSelection(() =>
    document.querySelector('#translate-dom'),
  );
  const [visible, setVisible] = useState(false);

  const { data, run, loading } = useRequest(getResult, {
    manual: true,
  });

  useEffect(() => {
    if (text.trim() === '') {
      setVisible(false);
      return;
    }
    setVisible(true);
    run(text);
  }, [text]);

  return <>
    <div id='translate-dom' style={{ padding: 20, border: '1px solid #eee', marginTop: 8}}>
      滑动复制下，看看效果，请点个 Star 支持一下吧~
    </div>
    <Popover
      content={<Spin spinning={loading}>{loading ? 'Translating……' : data}</Spin>}
      visible={visible}
    >
      <span
        style={{
          position: 'fixed',
          top: `${top}px`,
          left: `${left}px`,
          height: `${height}px`,
          width: `${width}px`,
          pointerEvents: 'none',
        }}
      />
    </Popover>
  </>
}

export const MockTextSelection: React.FC<any> = () => {

  const { text } = useTextSelection();

  const ref = useRef<any>(null);
  const selection = useTextSelection(ref);

  return (
    <>
      <div style={{ fontWeight: 'bold' }}>请用鼠标选取任意的内容</div>
      <div style={{ fontWeight: 'bold', marginTop: 8}}>全局监听：</div>
      <div style={{ marginTop: 8 }}>复制的话：{text}</div>
      <div style={{ fontWeight: 'bold',  marginTop: 8}}>监听特定的话：</div>
      <div ref={ref} style={{ padding: 20, border: '1px solid #eee', marginTop: 8}}>
        如果本文对你有帮助，请点个 Star 支持一下吧~
      </div>
      <div style={{  marginTop: 8 }}>特定复制的话:</div>
      <div style={{  marginTop: 8, marginLeft: 26 }}>选取的文本(text)：{selection.text}</div>
      <div style={{  marginTop: 8, marginLeft: 26 }}>选取的文本的左坐标(left)：{selection.left}</div>
      <div style={{  marginTop: 8, marginLeft: 26 }}>选取的文本的右坐标(right)：{selection.right}</div>
      <div style={{  marginTop: 8, marginLeft: 26 }}>选取的文本的顶坐标(top)：{selection.top}</div>
      <div style={{  marginTop: 8, marginLeft: 26 }}>选取的文本的底坐标(bottom)：{selection.bottom}</div>
      <div style={{  marginTop: 8, marginLeft: 26 }}>选取的文本的高度(height)：{selection.height}</div>
      <div style={{  marginTop: 8, marginLeft: 26 }}>选取的文本的宽度(width)：{selection.width}</div>
      <div style={{  marginTop: 8 }}>结合 Popover: 做滑动翻译</div>
      <Test />
    </>
  );
};

export default Mock;
