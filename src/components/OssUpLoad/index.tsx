import React, { useEffect } from 'react';
import { Upload, message, Modal, Button } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { OssUpLoadSy } from '@/utils/Setting'
import { useState, useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import Props from './interface.d';
import './index.less';

let aliOSS = require('ali-oss');
let client = new aliOSS({
  region: OssUpLoadSy.OSS.region,
  accessKeyId: OssUpLoadSy.OSS.accessKeyId,
  accessKeySecret: OssUpLoadSy.OSS.accessKeySecret,
  bucket: OssUpLoadSy.OSS.bucket,
});

const OssUpLoad: React.FC<Props> = ({
  amount = OssUpLoadSy.amount,
  OSS = OssUpLoadSy.open,
  rules = {},
  listType = OssUpLoadSy.listType,
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
  const cropperRef = useRef<any>(null)

  const [fileList, setFileList] = useState<Array<any>>([]); //总文件数组
  const [getFilesList, setGetFilesList] = useState<Array<any>>([]); //总文件数组
  const [previewVisible, setPreviewVisible] = useState<boolean>(false); // 是否打开弹出框
  const [isFileFlag, setIsFileFlag] = useState<boolean>(false); // 控制照片，如果不满足则不添加
  const [previewTitle, setPreviewTitle] = useState<any>(''); // 图片名称
  const [previewImage, setPreviewImage] = useState<any>(''); // 图片展示的数据
  const [src, setSrc] = useState<any>(false) //裁剪图片
  const [file, setFile] = useState<any>(false)

  useEffect(() => {
    if(initFile.length !== 0){
      let fileList: Array<{url: string, name: string, uid?: number | string}> = []
      initFile.map((item, index) => {
        const param = OSS ? { newFile: item } : {}
        if(typeof item === 'string'){
          fileList = [...fileList, { url: item, name: `图片`, ...param}]
        }else {
          fileList = [...fileList, {...item, url: item?.url || '', uid: item?.uid || undefined, name: item?.name || `图片`, ...param}]
        }
      })
      setGetFilesList([...fileList])
      setFileList(fileList)
    }
  }, [])

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
      if(rules.type === 'xlsx' || rules.type === 'xls') {
        //  单独处理 excel
        const fileType = file.name.split('.').pop();
        if(['xlsx', 'xls'].indexOf(fileType) < 0) {
          message.error(rules.typeMsg || '请上传xlsx或xls格式文件');
          flag = false
        }
      } else if (file.type.indexOf(type) === -1) {
        message.error(rules.typeMsg || '请上传正确的文件类型');
        flag = false;
      }
    } else if (Array.isArray(rules.type) && flag) {
      let allFlag = false;
      rules.type.map((item) => {
        const type = item.trim() === 'jpg' ? 'jpeg' : item.trim();
        if(item  === 'xlsx' || item === 'xls'){
          const fileType = file.name.split('.').pop();
          if(['xlsx', 'xls'].indexOf(fileType) !== -1) {
            allFlag = true
          }
        } else if (file.type.indexOf(type) !== -1) {
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

    // 裁剪
    if(crop){
      const fileReader = new FileReader()
      fileReader.onload = (e:any) => {
        const dataURL = e.target.result;
        setSrc(dataURL)
      }
      fileReader.readAsDataURL(file)
      setFile(file)
      return;
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
      let fileBase64:any = ''
      if (OSS) {
        const suffix = file.name.slice(file.name.lastIndexOf('.'));
        const filename = _config?.ossText ? _config.ossText + suffix : suffix;

        const res = await client.put(
          `${_config.ossUrl || OssUpLoadSy.OssUrl}/${Date.now() + filename}`,
          file,
        );
        result = res.url;
      }else{
        fileBase64 = await getBase64(file)
      }
      result = [...getFilesList, OSS ? { file, newFile: result } : { file, fileBase64 }];
      OSS ? result.map((item: any) => (OssList = [...OssList, item.newFile])) : '';
      setGetFilesList(result);
      getFiles(OSS ? OssList : result, true);
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
        <div style={{ marginTop: 8 }}>{_config.text || OssUpLoadSy._config.text}</div>
      </div>
    );
  };

  return (
    <div className="UpLoadComponents">
      <Upload
        {...props}
        listType={listType}
        fileList={fileList}
        onPreview={handlePreview}
        onChange={({ fileList }) => {
          if (isFileFlag) setFileList(fileList);
        }}
        multiple={!_config.radio && amount !== 1}
        onRemove={ (file) => {
          const result = fileList.filter((item) => item.uid !== file.uid);
          setFileList(result);
          if (getFiles) {
            let getFileResult:any = getFilesList.filter((item) => item.file ? item.file.uid !== file.uid : item.uid !== file.uid);
            let OSSList:any = []
            if(OSS && getFileResult.length !== 0) {
              getFileResult.map((item:any) => {
                OSSList = [...OSSList, item?.newFile]
              })
            }
            setGetFilesList(getFileResult);
            // 删除文件
            getFiles(OSS ? OSSList : getFileResult, false);
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
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
      <Modal
        destroyOnClose
        title={cropConfig?.title || OssUpLoadSy.crop.title}
        visible={src ? true : false}
        style={{height: 200}}
        onCancel={() => {setSrc(false);setFile(false)}}
        footer={null}
      >
        <Cropper
          src={src}
          ref={cropperRef}
          style={{height: 400}}
          zoomable={false}
          guides={false}
        />
        <div style={{marginTop: 30, display: 'flex',justifyContent: 'flex-end'}}>
          <Button onClick={() => setSrc(false)} {...cropConfig?.cancelProps} style={{marginRight: 20, ...OssUpLoadSy.crop.cancelStyle, ...cropConfig?.cancelStyle}}>{cropConfig?.cancelText || OssUpLoadSy.crop.cancelText}</Button>
          <Button
            type="primary"
            {...cropConfig?.cropProps}
            style={{ ...OssUpLoadSy.crop.cropStyle, ...cropConfig?.cropStyle }}
            onClick={async () =>{
              cropperRef?.current?.cropper?.getCroppedCanvas().toBlob(async (blob:any) => {
                const base64 = await getBase64(blob)
                const newFile:any = new File([blob], file.name, {type: file.type})
                newFile.uid = file.uid
                onGetFiles(newFile)
                setFileList([...fileList, { url: base64, uid: file.uid, name: file.name}])
                setFile(false)
              })
              setSrc(false)
            }}
          >{cropConfig?.cropText || OssUpLoadSy.crop.cropText}</Button>
        </div>
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
