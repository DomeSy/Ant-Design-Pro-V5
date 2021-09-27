import commonSy from '../commonSy';
import TableProps from './interface'
import { PlusOutlined, SearchOutlined, RedoOutlined, ExportOutlined } from '@ant-design/icons';

/**
 * @module 全局表单部分
 *
 */
export type { TableProps };

const tableSy: TableProps = {
  tableList: {
    // defaultInitShowTime: false
    defaultInitShowTime: {
      showStartTime: '00:00:00',
      showStartType: 'HH:mm:ss',
      showEndTime: '23:59:59',
      showEndType: 'HH:mm:ss',
    },
    rule: commonSy.rulesMethod,
  },
  search: {
    hidden: false,
    show: true,
    searchText: '查询',
    resetText: '重置',
    vertical: false,
    span: false,
    searchStyle: {},
    resetStyle: {},
    commonStyle: {},
    searchPrefix: <SearchOutlined />, //如果不需要，false即可
    resetPrefix: <RedoOutlined />, //如果不需要，false即可
    options: {
      export: {
        text: '导出',
        prefix: <ExportOutlined />, //如果不需要，false即可
        style: {}
      }
    }
  },
  options: {
    density: true,
    fullScreen: true,
    setting: true,
    reload: true,
  },
  pagination: {
    hidden: false,
    pageSize: 10,
    jump: false,
    size: 'small',
  },
  toolBar: {
    create: {
      text: '新建',
      style: {},
      prefix: <PlusOutlined />,
    },
    commonStyle: {}
  },
  rowKey: 'key',
  tools: {
    edit: {
      text: '编辑',
      style: {}
    },
    delete: {
      text: '删除',
      style: {}
    },
    state: {
      okText: '启用',
      cancelText: '禁用',
      style: {}
    },
    commonStyle: {}
  }
};

export default tableSy;
