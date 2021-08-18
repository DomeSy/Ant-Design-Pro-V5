import { AnchorProps } from 'antd';

export interface AnchorLinkProps {
  prefixCls?: string;
  href: string;
  target?: string;
  title: React.ReactNode;
  children?: LinkProps[];
  className?: string;
}

export default interface Props extends AnchorProps {
  list: LinkProps[]
}
