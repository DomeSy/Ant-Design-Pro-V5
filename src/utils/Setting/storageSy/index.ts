/**
import { storageSy } from '@/utils/Setting';
 * @module 配置存储信息
 *
 */

interface storageProps {
  token: string,
  info: string,
}

const common = 'Domesy-'

const storageSy: storageProps = {
  token: common + 'token',
  info: common + 'info'
}

export default storageSy;
