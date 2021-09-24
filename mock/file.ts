import { Request, Response } from 'express';
import { content, resData } from './data';
import { ossUpload, ossUploadAnchorList, maskFrom, maskFromAnchorList} from './fileMock'

// 延时时间
const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

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
    }
    res.send({
      code: 400,
      detail,
      message: '请输入参数'
    })
  },

}
