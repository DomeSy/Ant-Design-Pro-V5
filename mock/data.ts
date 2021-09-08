
// 设置返回统一格式
export const resData = (data: any) => {
  return {
    data,
    code: 200,
    success: 'success',
  }
}

// 内容
export const content = {
  hook: {
    useState: '用来声明状态变量',
    useEffect: '副作用，主要是将组件中的 componentDidMount componentDidUpdate componentWillUnmount 到一个方法中，杜绝了频繁定义的繁琐',
    useContext: '上下文，对应的Context,其本意就是设置全局共享数据，使所有组件可跨层级实现共享',
    useReducer: '',
    useMemo: '当一个父组件中调用了一个子组件的时候，父组件的 state 发生变化，会导致父组件更新，而子组件虽然没有发生改变，但也会进行更新。useMemo 就是函数组件为了防止这种不必要的而采取的手段，所以一般 useMemo 是优化手段',
    useCallBack: '',
    useRef: '',
    useImperativeHandle: '',
    useModel: '',
    useRequest: '',
  }
}
