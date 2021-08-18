import { Request, Response } from 'express';

export default {
  'GET /api/hook/queryList': async (req: Request, res: Response) => {
    res.send({
      data: {
        content: 'Hook是React16.8的特性,主要解决了函数式组件没有状态的问题，使代码结构更加简单，而在Ant Design Pro V5 中也是主推Hook，并设置useModel和useRequest的，大大提高开发效率!',
        cardInfo: [
          {
            title: 'useMemo',
            content: '当一个父组件中调用了一个子组件的时候，父组件的state发生变化，会导致父组件更新，而子组件虽然没有发生改变，但也会进行更新。',
          }
        ]
      },
      code: 200,
      success: 'success',
    })
  }
}
