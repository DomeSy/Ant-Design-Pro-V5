
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
    useReducer: '作用类似于 redux, 增强函数体',
    useMemo: '当一个父组件中调用了一个子组件的时候，父组件的 state 发生变化，会导致父组件更新，而子组件虽然没有发生改变，但也会进行更新。useMemo 就是函数组件为了防止这种不必要的而采取的手段，所以一般 useMemo 是优化手段',
    useCallback: '与 useMemo 方法类似，只是 useMemo 缓存的是变量， 而 useCallBack 缓存的是函数',
    useRef: 'useRef 获取当前元素的所有属性，并且返回一个可变的ref对象，并且这个对象只有current属性，可设置initialValue',
    useImperativeHandle: '可以让你在使用 ref 时自定义暴露给父组件的实例值。',
    useModel: '',
    useRequest: '',
  }
}
