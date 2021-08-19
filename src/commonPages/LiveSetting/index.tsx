const LiveSetting: React.FC = () => (
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
      src={'http://www.domesy.cn/live2d/index.html'}
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
);

export default LiveSetting;
