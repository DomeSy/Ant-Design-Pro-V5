import { Request, Response } from 'express';
import { resData } from './data';
import { welcome, welcomeAnchorList } from './domesyMock'

//路径
//mock/menu.ts

export default {
  '/api/exportExcel': {
    data: [
      { name: 'Form', component: '动态表单', desc: '帮助快速开发的工具'},
      { name: 'Table', component: '动态表格', desc: '对ProForm进行封装'},
      { name: 'PageLayout', component: '页面容器', desc: '对PageContainer进行封装'},
    ],
    total: 10
  },
  'POST /api/domesy/queryDetail': async (req: Request, res: Response) => {
    const { detail } = req.query
    if(detail === 'welcome') {
      res.send(
        resData({
          list: welcome,
          anchorList: welcomeAnchorList
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
};


