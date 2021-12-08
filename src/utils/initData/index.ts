import React from 'react';
import { layoutSy, pageLayoutSy, storageSy, tableSy, fromSy, maskSy, CardSy, OssUpLoadSy, MapSy, ChartsSy } from '../Setting'
import { content } from '../../../mock/data'
import type { MenuDataItem } from '@ant-design/pro-layout';
import { currentUser as queryCurrentUser } from '@/services/ant-design-pro/api';
import { getMenuData } from '@/services/ant-design-pro/domesy'
import allIcons from '@@/plugin-antd-icon/icons';


/**
 * @module 初始化方法
 */
const initData = async () => {
  const currentUser = await queryCurrentUser()

  // 动态路由：menuData接收的为路由的函数，为false时，不启动动态路由
  // const menuData: {data: MenuDataItem[]} = await getMenuData()

  return {
    currentUser: currentUser,
    content: content,
    // menuData: formatter(menuData.data), // 示例，动态路由
    menuData: false,
    liveSetting: true,
    domesy:{
      layoutSy,
      pageLayoutSy,
      tableSy,
      fromSy,
      maskSy,
      CardSy,
      storageSy,
      OssUpLoadSy,
      MapSy,
      ChartsSy
    }
  }
}

const formatter = (data: any[]) => {
  data.forEach((item) => {
    if (item.icon) {
      const { icon } = item;
      const v4IconName = toHump(icon.replace(icon[0], icon[0].toUpperCase()));
      const NewIcon = allIcons[icon] || allIcons[''.concat(v4IconName, 'Outlined')];

      if (NewIcon) {
        try {
          // eslint-disable-next-line no-param-reassign
          item.icon = React.createElement(NewIcon);
        } catch (error) {
          console.log(error);
        }
      }
    }

    if (item.routes || item.children) {
      const children = formatter(item.routes || item.children); // Reduce memory usage

      item.children = children;
    }
  });
  return data;
};

const toHump = (name: string) => name.replace(/-(\w)/g, (all: string, letter: any) => letter.toUpperCase());

export default initData;
