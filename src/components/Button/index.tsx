import { Button, ButtonProps } from 'antd';
import { Method } from '@/utils';

/**
 * @module Button
 * @author Domesy
 *
 * @param debounce 是否加入防抖函数
 * @param awit 防抖的等待时间
 */
interface Props extends ButtonProps {
  debounce?: boolean;
  awit?: number;
}

interface RenderWay {
  show?: any;
}

const ButtonView: React.FC<Props> & RenderWay = ({
  children,
  type = 'primary',
  onClick = () => {},
  awit = 1000,
  debounce = false,
  ...props
}) => {
  return (
    <Button type={type} onClick={debounce ? Method.Debounce(onClick, awit) : onClick} {...props}>
      {children}
    </Button>
  );
};

ButtonView.show = () => {
  return <div>11</div>;
};

export default ButtonView;
