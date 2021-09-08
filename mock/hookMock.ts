import type { Props } from '@/commonPages/DetailSetting'

export const useState:Props = {
  use: {
    title: '简单介绍'
  },
  useList: [
    {
      render: '在Class中，我们定义变量在 constructor 中设置 this.state设置变量，而在Hook中我们使用 useState'
    }
  ],
  attention: {
    children: [
      {
        render: 'count 对应 class 中的 this.state , setCount 对应 class 中的 this.setState',
        red: true
      },
      {
        render: 'useState 更新值时需要替换，而不是 class 中的合并，这点极为重要',
        red: true
      }
    ]
  }
}
