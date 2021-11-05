import { Request, Response } from 'express';
import { content, resData } from './data';
import { LifeCycle, LifeCycleAnchorList,  State, StateAnchorList, SideEffect, SideEffectAnchorList, Dom, DomAnchorList, Advanced, AdvancedList} from './ahookMock'
import Mock from 'mockjs';

// 延时时间
const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default {
  'GET /api/ahook/queryList': async (req: Request, res: Response) => {
    res.send(
      resData({
        content: 'ahooks 是一个 React Hooks 库，致力提供常用且高质量的 Hooks. 你可以这么理解，有他的帮助我们可以更快速的开发，并且更加好用。介绍一些比较好用的Api',
        cardInfo: [
          {
            title: 'LifeCycle',
            content: content.ahook.LifeCycle,
          },
          {
            title: 'State',
            content: content.ahook.State,
          },
          {
            title: 'SideEffect',
            content: content.ahook.SideEffect,
          },
          {
            title: 'Dom',
            content: content.ahook.Dom,
          },
          {
            title: 'Advanced',
            content: content.ahook.Advanced,
          },
        ]
      }
    ))
  },
  'POST /api/ahook/queryDetail': async (req: Request, res: Response) => {
    const { detail } = req.query
    if(detail === 'LifeCycle') {
      res.send( resData({
        list: LifeCycle,
        anchorList: LifeCycleAnchorList
      }) )
      return
    } else if(detail === 'State') {
      res.send( resData({
        list: State,
        anchorList: StateAnchorList
      }) )
      return
    } else if(detail === 'SideEffect') {
      res.send( resData({
        list: SideEffect,
        anchorList: SideEffectAnchorList
      }) )
      return
    } else if(detail === 'Dom') {
      res.send( resData({
        list: Dom,
        anchorList: DomAnchorList
      }) )
      return
    } else if(detail === 'Advanced') {
      res.send( resData({
        list: Advanced,
        anchorList: AdvancedList
      }))
      return
    }

    res.send({
      code: 400,
      detail,
      message: '请输入参数'
    })
  },
}
