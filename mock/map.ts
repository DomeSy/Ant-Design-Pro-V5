import { Request, Response } from 'express';
import { content, resData } from './data';
import { LifeCycle, LifeCycleAnchorList} from './mapMock'


export default {
  'GET /api/map/queryList': async (req: Request, res: Response) => {
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
  'POST /api/map/queryDetail': async (req: Request, res: Response) => {
    const { detail } = req.query
    if(detail === 'District') {
      res.send( resData({
        list: LifeCycle,
        anchorList: LifeCycleAnchorList
      }) )
      return
    }

    res.send({
      code: 400,
      detail,
      message: '请输入参数'
    })
  },
}
