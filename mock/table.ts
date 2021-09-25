import { Request, Response } from 'express';
import { resData } from './data';
import { table, tableAnchorList } from './tableMock'

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
  },

}
