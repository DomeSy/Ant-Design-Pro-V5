import { Request, Response } from 'express';
import { content, resData } from './data';
import { Data, DualAxesData, PieData, PieData1, Charts, ChartsAnchorList, ChartsCard, ChartsCardAnchorList } from './chartsMock'


export default {
  'GET /api/charts/queryList': async (req: Request, res: Response) => {
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
    return
  },
  'POST /api/charts/queryDetail': async (req: Request, res: Response) => {
    const { detail } = req.query
    if(detail === 'data') {
      res.send( resData({
        list: Charts,
        anchorList: ChartsAnchorList
      }) )
      return
    }else if(detail === 'introduce'){
      res.send( resData({
        list: Charts,
        anchorList: ChartsAnchorList
      }) )
    }else if(detail === 'introduceCard'){
      res.send( resData({
        list: ChartsCard,
        anchorList: ChartsCardAnchorList
      }) )
    }
    res.send({
      code: 400,
      detail,
      message: '请输入参数'
    })
  },
  'POST /api/charts/queryData': async (req: Request, res: Response) => {
    const { detail } = req.query
    if(detail === 'data') {
      res.send( resData({
        data: Data()
      }) )
      return
    }else if(detail === 'dualAxes') {
      res.send( resData({
        data: DualAxesData()
      }) )
      return
    }else if(detail === 'pie') {
      res.send( resData({
        data: PieData()
      }) )
      return
    }else if(detail === 'pie1') {
      res.send( resData({
        data: PieData1()
      }) )
      return
    }
    res.send({
      code: 400,
      detail,
      message: '请输入参数'
    })
    return
  },
}
