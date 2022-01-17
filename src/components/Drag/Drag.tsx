import { useEffect, useState } from 'react';
import type { DragProps } from './interface';
import { DraggableArea }  from 'react-draggable-tags'
/**
 * @module Drag // 文本拖拽
 */

const Darg: React.FC<DragProps>  = ({ list, id, block, render, onChange }) => {

  const [tags, setTags] = useState<Array<any>>([])

  useEffect(() => {
    if(id){
      const tags = list.map((item) => {
        item.id = item[id]
        return item
      })
      setTags(tags)
    }else{
      setTags(list)
    }
  }, [list])

  return <DraggableArea
    tags={tags}
    render={({tag, index}:any) => {
      return <>{render(tag, index)}</>
    }}
    isList={block}
    onChange={onChange}
  >
  </DraggableArea>;
};

export default Darg
