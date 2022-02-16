import { Request, Response } from 'express';
import { resData } from './data';
import { introduce, introduceAnchorList, input, inputAnchorList, password, passwordAnchorList, select, selectAnchorList, date, dateAnchorList, checkbox, checkboxAnchorList, radio, radioAnchorList, switchMock, switchAnchorList, textArea, textAreaAnchorList, rate, rateAnchorList, slider, sliderAnchorList, digit, digitAnchorList, field, fieldAnchorList } from './formMock'

export default {
  'GET /api/form/queryDetail': async (req: Request, res: Response) => {
    const { detail } = req.query;
    if (detail === 'introduce') {
      res.send(
        resData({
          list: introduce,
          anchorList: introduceAnchorList
        }
      ))
      return
    } else if(detail === 'input'){
      res.send(
        resData({
          list: input,
          anchorList: inputAnchorList
        }
      ))
      return
    } else if(detail === 'password'){
      res.send(
        resData({
          list: password,
          anchorList: passwordAnchorList
        }
      ))
      return
    } else if(detail === 'date'){
      res.send(
        resData({
          list: date,
          anchorList: dateAnchorList
        }
      ))
      return
    } else if(detail === 'date'){
      res.send(
        resData({
          list: select,
          anchorList: selectAnchorList
        }
      ))
      return
    } else if(detail === 'checkbox'){
      res.send(
        resData({
          list: checkbox,
          anchorList: checkboxAnchorList
        }
      ))
      return
    } else if(detail === 'radio'){
      res.send(
        resData({
          list: radio,
          anchorList: radioAnchorList
        }
      ))
      return
    } else if(detail === 'switch'){
      res.send(
        resData({
          list: switchMock,
          anchorList: switchAnchorList
        }
      ))
      return
    } else if(detail === 'textArea'){
      res.send(
        resData({
          list: textArea,
          anchorList: textAreaAnchorList
        }
      ))
      return
    } else if(detail === 'rate'){
      res.send(
        resData({
          list: rate,
          anchorList: rateAnchorList
        }
      ))
      return
    } else if(detail === 'slider'){
      res.send(
        resData({
          list: slider,
          anchorList: sliderAnchorList
        }
      ))
      return
    } else if(detail === 'digit'){
      res.send(
        resData({
          list: digit,
          anchorList: digitAnchorList
        }
      ))
      return
    }else if(detail === 'field'){
      res.send(
        resData({
          list: field,
          anchorList: fieldAnchorList
        }
      ))
    }
    res.send({
      code: 400,
      detail,
      message: '请输入参数'
    })
    return
  },

}
