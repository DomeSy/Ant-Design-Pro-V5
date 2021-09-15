/**
 * @module OssUpLoad 图片上传
 * @author Domesy
 *
 * @param amount 数量 可设置上传的数量，默认为1张
 * @param getFiles 上传后图片返回的值(有两个值，第一个值为返回的数组。当前状态下的数组， 第二个参数为flag， flag为 true 则代表新增照片的值， false 为删除时的值)
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
 * @cropConfig下的配置
 * @param title 弹出框的title名，默认图片裁剪
 * @param cropText 裁剪时的文字 默认 裁剪
 * @param cancelText 取消时的文字 默认 取消
 * @param cropProps 裁剪时按钮的属性
 * @param cancelProps 取消时按钮的属性
 * @param cropStyle 裁剪时按钮的样式
 * @param cancelStyle 裁剪时按钮的样式
 *
 * @_config
 * @param noCheck 检验是否同一张图片 （当相同名字和文件大小一致时，才会校验不通过），默认false
 * @param radio 单选照片，默认多选(当图片为一张时默认单选)
 * @param text 未上传时的文字 默认 Upload
 * @param uploadNode 自定义upload样式，类型 Function | React.ReactNode
 * @param ossUrl 上传完图片，统一前缀 默认 web/domesy/images/
 * @param ossText 上传完图片，oss地址最后的后缀， 默认不加（之前有定义的时间戳）
 * @param pictureCardTip listType为picture-card时上传其他模式时的提示语 默认'请上传正确的图片类型！'
 */

/**
 * 问题：
 *  无法同时满足裁剪功能的照片和文件共同满足的情况，这种情况建议分开处理
 *  普通上传会产生两个文件 一个是原本的文件， 一个是base64的文件, OSS上传会直接给出数组的地址
 */

/**
 * @是否支持多选 maxCount
 */
