import { Anchor } from 'antd';
import {useEffect} from 'react';
import Props,{ AnchorLinkProps } from './interface.d'

/**
 * @module Anchor 锚点
 * @author Domesy
 *
 */

const AnchorView: React.FC<Props> = ({list = [], ...props}) => {

  useEffect(() => {
  }, [])

  const renderLink = (item: AnchorLinkProps, index:number) => {
    if(!item) return <></>
    const { title, href, children, ...LinkProps } = item;
    let render:any = false
    if(Array.isArray(children) && children.length !== 0){
      render = children.map((ele, number) => renderLink(ele, number))
    }
    return <Anchor.Link key={index} title={title} href={`#${href}`} {...LinkProps}>
      {render}
    </Anchor.Link>
  }

  return (
    <Anchor {...props}>
      {/* { renderLink(list)} */}
      {
        list.map((item, index) => renderLink(item, index))
      }
    </Anchor>
  );
};


export default AnchorView;
