import { Request, Response } from 'express';
import { content, resData } from './data';
import { useState, useEffect, useMemo, useContext, useReducer, useCallback, useRef, useImperativeHandle, useModel, useRequest, useRequestAnchorList } from './hookMock'
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
            title: 'useEffect',
            content: content.hook.useEffect,
          },
          {
            title: 'useContext',
            content: content.hook.useContext,
          },
          {
            title: 'useReducer',
            content: content.hook.useReducer,
          },
          {
            title: 'useMemo',
            content: content.hook.useMemo,
          },
          {
            title: 'useCallback',
            content: content.hook.useCallback,
          },
          {
            title: 'useRef',
            content: content.hook.useRef,
          },
          {
            title: 'useImperativeHandle',
            content: content.hook.useImperativeHandle,
          },
          {
            title: 'useModel',
            content: content.hook.useModel,
          },
          {
            title: 'useRequest',
            content: content.hook.useRequest,
          }
        ]
      }
    ))
    return
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
    } else if (detail === 'useCallback') {
      res.send( resData(useCallback) )
      return
    } else if (detail === 'useRef') {
      res.send( resData(useRef) )
      return
    } else if (detail === 'useImperativeHandle') {
      res.send( resData(useImperativeHandle) )
      return
    } else if (detail === 'useModel') {
      res.send( resData(useModel) )
      return
    } else if (detail === 'useRequest') {
      res.send( resData({ list: useRequest, anchorList: useRequestAnchorList }) )
      return
    }

    res.send({
      code: 400,
      detail,
      message: '请输入参数'
    })
    return
  },
  'POST /api/hook/useRequest/test': async (req: Request, res: Response) => {
    await waitTime(2000);
    res.send(resData(
      {
        message: '请求成功'
      }
    ))
    return
  },
  'GET /api/hook/useRequest/pooling': async (req: Request, res: Response) => {
    await waitTime(1000);
    res.send(resData(
      {
        name: Mock.mock('@name')
      }
    ))
  },
  'GET /api/hook/useRequest/cache': async (req: Request, res: Response) => {
    await waitTime(1000);
    res.send(resData(
      {
        data: Mock.mock('@paragraph'),
        time: new Date().getTime()
      }
    ))
    return
  },
}
