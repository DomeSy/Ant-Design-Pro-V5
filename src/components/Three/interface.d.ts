import type { FilterFunc } from 'rc-select/lib/interface/generator';
export interface DataNode {
  value?: RawValueType;
  title?: React.ReactNode;
  label?: React.ReactNode;
  key?: Key;
  disabled?: boolean;
  disableCheckbox?: boolean;
  checkable?: boolean;
  children?: DataNode[];
  [prop: string]: any;
}

interface configProps {
  title?: string,
  value?: string,
  key?: string,
  children?: string,
}

export interface SelectProps extends TreeSelectProps {
  list?: DataNode[];
  multiple?: boolean;
  allowClear?: boolean;
  initValue?: string[];
  _config?: configProps;
  listHeight?: number;
  getValues: (value) => void
}

export interface TreeProps{

}

interface TreeSelectProps {
  multiple?: boolean;
  showArrow?: boolean;
  showSearch?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  value?: ValueType;
  defaultValue?: ValueType;
  disabled?: boolean;
  placeholder?: React.ReactNode;
  /** @deprecated Use `searchValue` instead */
  inputValue?: string;
  searchValue?: string;
  autoClearSearchValue?: boolean;
  maxTagPlaceholder?: (omittedValues: LabelValueType[]) => React.ReactNode;
  loadData?: (dataNode: LegacyDataNode) => Promise<unknown>;
  treeNodeFilterProp?: string;
  treeNodeLabelProp?: string;
  treeDataSimpleMode?: boolean | SimpleModeConfig;
  treeExpandedKeys?: Key[];
  treeDefaultExpandedKeys?: Key[];
  treeLoadedKeys?: Key[];
  treeCheckable?: boolean | React.ReactNode;
  treeCheckStrictly?: boolean;
  showCheckedStrategy?: CheckedStrategy;
  treeDefaultExpandAll?: boolean;
  treeData?: DataNode[];
  treeLine?: boolean;
  treeIcon?: IconType;
  showTreeIcon?: boolean;
  switcherIcon?: IconType;
  treeMotion?: any;
  children?: React.ReactNode;
  filterTreeNode?: boolean | FilterFunc<LegacyDataNode>;
  dropdownPopupAlign?: any;
  onSearch?: (value: string) => void;
  onTreeExpand?: (expandedKeys: Key[]) => void;
  onTreeLoad?: (loadedKeys: Key[]) => void;
  onDropdownVisibleChange?: (open: boolean) => void;
  /** `searchPlaceholder` has been removed since search box has been merged into input box */
  searchPlaceholder?: React.ReactNode;
}
