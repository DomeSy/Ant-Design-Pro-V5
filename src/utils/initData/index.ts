import { layoutSy, pageLayoutSy, storageSy, tableSy, fromSy, maskSy } from '../Setting'
import { currentUser as queryCurrentUser } from '@/services/ant-design-pro/api';

/**
 * @module 初始化方法
 */
const initData = async () => {
  const currentUser = await queryCurrentUser()
  return {
    currentUser: currentUser.data,
    layoutSy,
    pageLayoutSy,
    tableSy,
    fromSy,
    maskSy,
    storageSy,
  }
}

export default initData;
