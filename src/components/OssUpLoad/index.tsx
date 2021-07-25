import React from 'react';
import { Upload, message, Modal, Button } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ImgCrop from 'antd-img-crop';
import Props from './interface.d';

import './index.less';

/**
 * @module OssUpLoad 图片上传
 * @author Domesy
 *
 * @param amount 数量 可设置上传的数量，默认为1张
 * @param getFiles 上传后图片返回的值
 * @param rules 规则 判断规则不可传入的条件
 * @param _config 额外的配置
 * @param OSS 开启OSS上传
 * @param crop 裁剪功能，默认false 注：截取有点问题，如gif动态截取后就成静止图,裁剪模式下，不能选取除照片格式以外的文件
 * @param listType 三种模式，分别为 'text' ’picture' ‘picture-card'，默认 ‘picture-card'
 * @param button 当type 为 'text' ’picture' 继承button的属性，如果children不存在时
 * @param children  当type 为 'text' ’picture' 可自定义样式
 * @param initFile  默认已有的文件
 * @param cropConfig 裁剪默认配置的选项
 *
 * @param listType
 * listType 为 picture-card 只能支持图片， 其他文件格式不支持
 * listType为其他值时，出照片格式外，不应该预览
 *
 * @rules
 * @param type 限制类型，可字符串可数组
 * @param typeMsg 类型不符合的提示语
 * @param size 文件的类型大小 单位为M
 * @param sizeMsg 文件大小不符合的提示语
 *
 *
 * @_config
 * @param noCheck 检验是否同一张图片 （当相同名字和文件大小一致时，才会校验不通过），默认false
 * @param radio 单选照片，默认多选(当图片为一张时默认单选)
 * @param text 未上传时的文字 默认 Upload
 * @param uploadNode 自定义upload样式，类型 Function | React.ReactNode
 * @param ossUrl 上传完图片，统一前缀 默认 web/domesy/images/
 * @param ossText 上传完图片，oss的统一文字 默认不加
 * @param pictureCardTip listType为picture-card时上传其他模式时的提示语 默认'请上传正确的图片类型！'
 */

/**
 * 问题：
 *  无法同时满足裁剪功能的照片和文件共同满足的情况，这种情况建议分开处理
 */

/**
 * @是否支持多选 maxCount
 */

let aliOSS = require('ali-oss');
let client = new aliOSS({
  region: 'oss-cn-shanghai',
  accessKeyId: 'LTAI4GK4W6BVkYDcHdAQzAW9',
  accessKeySecret: 'otIM3G2WhGxdfbpxBDBB9NtMj2yVQ3',
  bucket: 'bmx-system',
});

const OssUpLoad: React.FC<Props> = ({
  amount = 1,
  OSS = false,
  rules = {},
  listType = 'picture-card',
  onRemove,
  children,
  getFiles,
  crop,
  _config = {},
  button = {},
  initFile = [],
  cropConfig = {},
  ...props
}) => {
  const [fileList, setFileList] = useState<Array<any>>(initFile); //总文件数组
  const [getFilesList, setGetFilesList] = useState<Array<any>>([]); //总文件数组
  const [previewVisible, setPreviewVisible] = useState<boolean>(false); // 是否打开弹出框
  const [isFileFlag, setIsFileFlag] = useState<boolean>(false); // 控制照片，如果不满足则不添加
  const [previewTitle, setPreviewTitle] = useState<any>(''); // 图片名称
  const [previewImage, setPreviewImage] = useState<any>(''); // 图片展示的数据

  // 预览
  const handlePreview = async (file: any) => {
    if (file.type && file.type.indexOf('image') === -1) return;
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewVisible(true);
    setPreviewImage(file.url || file.preview);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  // 上传前的操作
  const beforeUpload = async (file: any) => {
    let flag = true; // 控制最终的类型

    // 检测是否有相同类型
    if (!_config.noCheck && flag) {
      const repeat = fileList.filter((item) => item.name === file.name && item.size === file.size);
      if (repeat.length !== 0) {
        message.error('您已上传过此文件，请勿重复上传');
        flag = false;
      }
    }

    // 判断文件类型
    if (typeof rules.type === 'string' && flag) {
      const type = rules.type.trim() === 'jpg' ? 'jpeg' : rules.type.trim();
      if (file.type.indexOf(type) === -1) {
        message.error(rules.typeMsg || '请上传正确的文件类型');
        flag = false;
      }
    } else if (Array.isArray(rules.type) && flag) {
      let allFlag = false;
      await rules.type.map((item) => {
        const type = item.trim() === 'jpg' ? 'jpeg' : item.trim();
        if (file.type.indexOf(type) !== -1) {
          allFlag = true;
          return;
        }
      });
      if (!allFlag) {
        message.error(rules.typeMsg || '请上传正确的文件类型');
        flag = false;
      }
    }

    // 根据listType来进行判断
    if (listType === 'picture-card' && file.type.indexOf('image') === -1 && flag) {
      message.error(_config.pictureCardTip || '请上传正确的图片类型！');
      flag = false;
    }

    // 判断文件大小
    if (rules.size && flag) {
      const fileSize = file.size / 1024 / 1024 < rules.size;
      if (!fileSize) {
        message.error(rules.sizeMsg || `上传文件大于${rules.size}M!请重新上传`);
        flag = false;
      }
    }
    if (flag) onGetFiles(file);
    setIsFileFlag(flag);
    return file;
  };

  // 文件获取
  const onGetFiles = async (file: any) => {
    if (getFiles) {
      let result: any = file;
      let OssList: Array<any> = [];
      if (OSS) {
        const suffix = file.name.slice(file.name.lastIndexOf('.'));
        const filename = _config.ossText + suffix || suffix;
        const res = await client.put(
          `${_config.ossUrl || 'web/domesy/images'}/${Date.now() + filename}`,
          file,
        );
        result = res.url;
      } else {
        setGetFilesList(result);
      }
      result = [...getFilesList, { file, newFile: result }];
      OSS ? result.map((item: any) => (OssList = [...OssList, item.newFile])) : '';
      setGetFilesList(result);
      getFiles(OSS ? OssList : result);
    }
  };

  // 自定义按钮样式
  const uploadButton = () => {
    if (_config?.uploadNode) {
      return typeof _config.uploadNode === 'function' ? _config.uploadNode() : _config.uploadNode;
    }
    return (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>{_config.text || 'Upload'}</div>
      </div>
    );
  };

  const uploadNode = (
    <Upload
      {...props}
      // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      // listType="text"
      listType={listType}
      fileList={fileList}
      onPreview={handlePreview}
      onChange={({ fileList }) => {
        if (isFileFlag) setFileList(fileList);
      }}
      multiple={!_config.radio && amount !== 1}
      onRemove={(file) => {
        const result = fileList.filter((item) => item.uid !== file.uid);
        setFileList(result);
        if (getFiles) {
          const getFileResult = getFilesList.filter((item) => item.file.uid !== file.uid);
          setGetFilesList(getFileResult);
          // 删除文件
          getFiles(getFileResult);
        }
        if (onRemove) onRemove(file);
      }}
      beforeUpload={beforeUpload}
      maxCount={amount}
    >
      {listType === 'picture-card' ? (
        fileList.length >= amount ? null : (
          uploadButton()
        )
      ) : children ? (
        children
      ) : (
        <Button
          {...button}
          icon={button.icon || <UploadOutlined />}
          type={button.type || 'primary'}
          disabled={fileList.length === amount}
          onClick={(ev) => {
            if (button.onClick) button.onClick(ev);
          }}
        >
          {_config.text || 'Upload'}
        </Button>
      )}
    </Upload>
  );

  return (
    <div className="UpLoadComponents">
      {crop && listType === 'picture-card' ? (
        <ImgCrop {...cropConfig}>{uploadNode}</ImgCrop>
      ) : (
        uploadNode
      )}
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  );
};

export default OssUpLoad;

const getBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
