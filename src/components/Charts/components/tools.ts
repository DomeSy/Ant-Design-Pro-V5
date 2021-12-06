import type { ChartProps } from '../interface';


export const calcData = (list: Array<any>, { xField, fields }: ChartProps) => {
  const keys = Object.keys(fields)
  const values = Object.values(fields)
  let res:any = []
  list.map((item) => {
    keys.map((ele, index) => {
      if((item[ele] || item[ele] === 0) && xField){
        res = [...res, { ...item, label: values[index], value: item[ele], time: item[xField] || index }]
      }
    })
  })
  return  res
}
