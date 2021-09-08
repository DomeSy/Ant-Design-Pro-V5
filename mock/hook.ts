import { Request, Response } from 'express';
import { content, resData } from './data';
import { useState } from './hookMock'

export default {
  'GET /api/hook/queryList': async (req: Request, res: Response) => {
    res.send(
      resData({
        content: 'Hook是React16.8的特性,主要解决了函数式组件没有状态的问题，使代码结构更加简单，而在Ant Design Pro V5 中也是主推Hook，并设置useModel和useRequest的，大大提高开发效率!',
        cardInfo: [
          {
            title: 'useState',
            content: content.hook.useState,
          },
          {
            title: 'useMemo',
            content: content.hook.useMemo,
          }
        ]
      }
    ))
  },
  'POST /api/hook/queryDetail': async (req: Request, res: Response) => {
    const { detail } = req.query
    if(detail === 'useState') {
      res.send( resData(useState) )
      return
    }
    res.send({
      code: 400,
      message: '请输入参数'
    })
  },
}
