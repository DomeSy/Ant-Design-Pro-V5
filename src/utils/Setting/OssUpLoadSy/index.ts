/**
 * @module Mask 弹框配置模块
 *
 */


interface OssUpLoadProps {
  OSS: { // OSS相关配置
    region: string,
    accessKeyId: string,
    accessKeySecret: string,
    bucket: string,
  };
  open: boolean; //是否开启OSS
  listType: 'text' | 'picture' | 'picture-card';// 类型
}

const OssUpLoadSy: OssUpLoadProps = {
  OSS: {
    region: 'oss-cn-shanghai',
    accessKeyId: 'LTAI4GK4W6BVkYDcHdAQzAW9',
    accessKeySecret: 'otIM3G2WhGxdfbpxBDBB9NtMj2yVQ3',
    bucket: 'bmx-system',
  },
  open: true,
  listType: 'picture-card'
};

export default OssUpLoadSy;
