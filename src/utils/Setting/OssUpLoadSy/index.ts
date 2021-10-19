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
  amount: number; // 限制张数
  open: boolean; //是否开启OSS
  listType: 'text' | 'picture' | 'picture-card';// 类型
  OssUrl: string; // OSS上传后统一的路径
  _config: { //统一定义设置样式
    text: string //全局统一配置为上传时的文字字样
  };
  crop: { //裁剪框的属性
    title: string;  // 标题
    cropText: string; // 裁剪时的文字
    cancelText: string; // 取消时的文字
    cropStyle: React.CSSProperties; // 裁剪按钮的样式
    cancelStyle?: React.CSSProperties; // 取消按钮的样式
  }
}

const OssUpLoadSy: OssUpLoadProps = {
  OSS: {
    region: 'xxx-xx-xxxxxxxxxx',
    accessKeyId: 'xxxxxxxxxxxxxxxxxxxxxx',
    accessKeySecret: 'xxxxxxxxxxxxxxxxxx',
    bucket: 'xxxx-xxx',
  },
  amount: 1,
  OssUrl: 'web/domesy/imgs',
  open: false,
  listType: 'picture-card',
  _config: {
    text: 'Upload'
  },
  crop: {
    title: '图片裁剪',
    cropText: '裁剪',
    cancelText: '取消',
    cropStyle: {},
    cancelStyle: {}
  }
};

export default OssUpLoadSy;
