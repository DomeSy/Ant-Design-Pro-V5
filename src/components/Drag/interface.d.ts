
export interface DragProps {
  list: Array<any>; // 匹配的数据列表
  id?: string; // 列表需要唯一字段，用于匹配，默认id
  render: (data:any, index:number) => React.ReactNode; // 用以渲染子列表，data，当行的数据，index：索引
  onChange?: (tags: Array<any>) => void; // 改变后的数据
  block?: boolean; //子元素是否是块状
}
