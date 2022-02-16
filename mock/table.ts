import { Request, Response } from 'express';
import { resData } from './data';
import { table, tableAnchorList, tableList } from './tableMock'

export default {
  'POST /api/table/queryDetail': async (req: Request, res: Response) => {
    const { detail } = req.query
    if(detail === 'table') {
      res.send(
        resData({
          list: table,
          anchorList: tableAnchorList
        }
      ))
      return
    }
    res.send({
      code: 400,
      detail,
      message: '请输入参数'
    })
    return

  },
  'POST /api/table/queryTable': async (req: Request, res: Response) => {
    const { key } = req.query
    if(key){
      const list = tableList()
      res.send(resData({
        total: list.total,
        data: [list.data[Number(key) - 1 || 0]]
      }))
    }else{
      res.send(resData(tableList()))
    }
  },
}
