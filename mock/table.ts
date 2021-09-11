import { Request, Response } from 'express';
import { content, resData } from './data';
import { introduce, introduceAnchorList, input, inputAnchorList  } from './tableMock'
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
  'GET /api/table/queryDetail': async (req: Request, res: Response) => {
    const { detail } = req.query;
    if (detail === 'introduce') {
      res.send(
        resData({
          list: introduce,
          anchorList: introduceAnchorList
        }
      ))
    } else if(detail === 'input'){
      res.send(
        resData({
          list: input,
          anchorList: inputAnchorList
        }
      ))
    }
    res.send({
      code: 400,
      detail,
      message: '请输入参数'
    })
  },

}
