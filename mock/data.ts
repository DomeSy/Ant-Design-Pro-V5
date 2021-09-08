
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
    useMemo: '当一个父组件中调用了一个子组件的时候，父组件的state发生变化，会导致父组件更新，而子组件虽然没有发生改变，但也会进行更新。useMemo就是函数组件为了防止这种不必要的而采取的手段，所以一般useMemo是优化手段'
  }
}
