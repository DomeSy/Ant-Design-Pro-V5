import { Request, Response } from 'express';
import { resData } from './data';
import { ossUpload, ossUploadAnchorList, maskFrom, maskFromAnchorList, excel, excelAnchorList } from './fileMock'

export default {
  'POST /api/file/queryDetail': async (req: Request, res: Response) => {
    const { detail } = req.query
    if(detail === 'ossUpload') {
      res.send(
        resData({
          list: ossUpload,
          anchorList: ossUploadAnchorList
        }
      ))
      return
    } else if(detail === 'maskFrom') {
      res.send(
        resData({
          list: maskFrom,
          anchorList: maskFromAnchorList
        }
      ))
      return
    } else if(detail === 'excel') {
      res.send(
        resData({
          list: excel,
          anchorList: excelAnchorList
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
