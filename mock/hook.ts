import { Request, Response } from 'express';
import { content, resData } from './data';
import { useState, useEffect, useMemo, useContext, useReducer } from './hookMock'

export default {
  'GET /api/hook/queryList': async (req: Request, res: Response) => {
    res.send(
      resData({
        content: 'Hook 是 React16.8 的特性,主要解决了函数式组件没有状态的问题，使代码结构更加简单，而在 Ant Design Pro V5 中也是主推 Hook，并设置 useModel 和 useRequest 的，大大提高开发效率!',
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
    } else if (detail === 'useMemo') {
      res.send( resData(useMemo) )
      return
    } else if (detail === 'useEffect') {
      res.send( resData(useEffect) )
      return
    } else if (detail === 'useContext') {
      res.send( resData(useContext) )
      return
    } else if (detail === 'useReducer') {
      res.send( resData(useReducer) )
      return
    }

    res.send({
      code: 400,
      message: '请输入参数'
    })
  },
}
