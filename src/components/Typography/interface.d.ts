import type { FormInstance } from 'antd';

export interface ListProps{

}
export interface TypographyProps {
  title?: string;
  editable?: boolean | EditConfig;
  copyable?: boolean | CopyConfig;
  type?: "secondary" | "success" | "warning" | "danger";
  disabled?: boolean;
  ellipsis?: boolean | EllipsisConfig;
  code?: boolean;
  mark?: boolean;
  underline?: boolean;
  delete?: boolean;
  strong?: boolean;
  keyboard?: boolean;
  italic?: boolean;
}

interface EditConfig {
  editing?: boolean;
  icon?: React.ReactNode;
  tooltip?: boolean | React.ReactNode;
  onStart?: () => void;
  onChange?: (value: string) => void;
  onCancel?: () => void;
  onEnd?: () => void;
  maxLength?: number;
  autoSize?: boolean | {
    minRows?: number;
    maxRows?: number;
  };
}

interface CopyConfig {
  text?: string;
  onCopy?: () => void;
  icon?: React.ReactNode;
  tooltips?: boolean | React.ReactNode;
}
interface EllipsisConfig {
  rows?: number;
  expandable?: boolean;
  suffix?: string;
  symbol?: React.ReactNode;
  onExpand?: React.MouseEventHandler<HTMLElement>;
  onEllipsis?: (ellipsis: boolean) => void;
  tooltip?: React.ReactNode;
}
