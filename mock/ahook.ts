import { Request, Response } from 'express';
import { content, resData } from './data';
import { useState } from './hookMock'
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
        content: 'ahook',
        cardInfo: [
          {
            title: 'useState',
            content: content.hook.useState,
          },
        ]
      }
    ))
  },
  'POST /api/ahook/queryDetail': async (req: Request, res: Response) => {
    const { detail } = req.query
    if(detail === 'useState') {
      res.send( resData(useState) )
      return
    }
    res.send({
      code: 400,
      detail,
      message: '请输入参数'
    })
  },
}
