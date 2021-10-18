import XLSX from 'xlsx';
import { message } from 'antd';

interface exportProps {
  headers: Array<any>,
  data: Array<any>,
  sheetName: string
}

/**
 * @module ExportExcel 导出组件（配合Ant design pro 中的Table做导出）
 *
 * @param sheets 可数组 可字符串（为字符串时，将文档的地址传传入）为数组时有以下参数
 * @param fileName 导出的文件名
 *
 * @sheets
 * @param headers 表头，对应 tableList， data 数据源，
 * @param data 数据源，列表返回的数据源
 * @param sheetName 导出表对应的名字
 * 格式：[{ headers: columns, data: dataSource, sheetName: "导出文件" }]
 */
const ExportExcel = (sheets: exportProps[] | string, fileName:string= 'Excel文件') => {

  if(typeof sheets === 'string'){
    window.location.href = sheets
    return
  }

  if(!Array.isArray(sheets)) return message.error('请返回对应的数组或者下载地址！')
  const getPostition = (index:number) => {
    let result = String.fromCharCode(65 + parseInt(String(index % 26)));
    let value = index / 26;
    while (value >= 1) {
        result = String.fromCharCode(65 + parseInt(String(value % 26 - 1))) + result;
        value = parseInt(String(value / 26));
    }
    return result;
  }

  const getColWidth = (headers: Array<any>, dataArr:Array<any>) => {
    const allWch = [headers,].concat(dataArr).map(item => item.map(val => {
        let value = val.title || val.content || "";
        let length = 10;
        if (value) {
            if (value.toString().charCodeAt(0) > 255) {
                length = value.toString().length * 2;
            } else {
                length = value.toString().length;
            }
        }
        return {
          'wpx': length < 40 ? length * 10 : 40 * 10,
        };
    }))
    let colWidth = allWch[0];
    for (let i = 1; i < allWch.length; i++) {
        for (let j = 0; j < allWch[i].length; j++) {
            if (colWidth[j]['wpx'] < allWch[i][j]['wpx']) {
                colWidth[j]['wpx'] = allWch[i][j]['wpx'];
            }
        }
    }
    return colWidth;
  }

  const sheetsArr = sheets.map(sheet => {
    const _headers = sheet.headers
        .map((item, i) => Object.assign({}, { key: item.key, title: item.title, position: getPostition(i) + 1 }))
        .reduce((prev, next) => Object.assign({}, prev, { [next.position]: { key: next.key, v: next.title } }), {});
    const dataArr = sheet.data
        .map((item, i) => sheet.headers.map((head, j) => {
            let content = ""
            if (head.render) {
                content = head.render(item[head.dataIndex], item)
            } else {
                content = item[head.dataIndex]
            }
            return { content, position: getPostition(j) + (i + 2) }
        }
        ));
    // 对刚才的结果进行降维处理（二维数组变成一维数组）
    const _data = dataArr.reduce((prev, next) => prev.concat(next))
        // 转换成 worksheet 需要的结构
        .reduce((prev, next) => Object.assign({}, prev, { [next.position]: { v: next.content } }), {});
    // 合并 headers 和 data
    const output = Object.assign({}, _headers, _data);
    // 获取所有单元格的位置
    const outputPos = Object.keys(output);
    // 计算出范围 ,["A1",..., "H2"]
    const ref = `${outputPos[0]}:${outputPos[outputPos.length - 1]}`;
    return Object.assign(
      { sheetName: sheet.sheetName },
      output,
      {
          '!ref': ref,
          '!cols': getColWidth(sheet.headers, dataArr),
      },
    )
  })

  const sheetNames = sheetsArr.map(sheet => sheet.sheetName);
  const wbSheets = sheetsArr.reduce((prev, next) => Object.assign({}, prev, { [next.sheetName]: next }), {});

  const wb = {
      SheetNames: sheetNames,
      Sheets: wbSheets,
  };
  XLSX.writeFile(wb, fileName + ".xlsx");
}

export default ExportExcel;
