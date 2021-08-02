/**
 * @module Table
 * @author Domesy
 *
 * @param search 搜索框的配置
 * @param pagination 分页器的配置
 * @param getRef 获取表格的Ref
 * @param request 请求数据 => 暂未设置
 * @param tableList 请求的列 替换原有的 columns（如果columns存在，则会替换tableList）
 * @param _config 额外配置(在原有的配置上加入其它属性，来帮助开发)
 * @param rowKey rowKey对应列表中的key,这个值其实就是列表的key，没有会报错，通常来说，后端返回列表的时候会有一个类似于key，id这样唯一的值做以区分，那么这个 rowKey 就是接口返回的key，id，因为通常而言这个key是一样的所以可以统一设置
 *
 * @tableList 下的参数（独有参数不一定，一个参数在不同的type下有可能有不同的意思)
 * @param type 用于判断类型 有 date 日期
 * @param method type下的分类  dateTimeRange 日期时间秒
 * @param readonly 是否只读
 * @param required select 唯一的规则，只有是否必填，加入必填（input，与 password, 必须没有rules这个属性，（也就是没有其他规则才能启用，否则要使用rules）
 * @param rulesRender 适用于原本的rules
 * @param rules 数组 设置规则，disabled设置为true，规则不生效，接收一个数组，按照原本的参数传递，并在此基础上做了些方便的功能，如果想使用原本参数的形式，可适用 rulesRender
 * @param message 必填时的消息提示，默认为标题+为必填项
 * @param noRequired 在很少的情况下，不需要规则必填，但填必须按照规则去填,可以按此规则 布尔值
 *
 * @date下的参数
 * @param method 区分日期的方式 dateTimeRange 日期时分秒区间
 * @param config 配置
 *
 * @rules
 * @param message 验证失败时返回的字段，可单独设置，下面的字段统一的默认message
 * @param required 必填项 判断是否有该字段 增加whitespace，只输入空格不可校验通过，如果字段无required，则默认加入必填字段，对应message默认字段为 请输入${data.label}
 * @param reMessage 有规则，但无必填字段，默认加入必填字段的message，取数组最后一个的reMessage
 * @param pattern 正则，验证失败时会报错
 * @param min 限定最少几个字符，可与max配合使用
 * @param max 限定最多几个字符，可与min配合使用
 * @param len 只限定几个字符能输入
 * @param method 简化开发设定常用的的值 具体有 'tel'：电话 'password'：密码 'name'：姓名 'card'：银行卡号 'sfz'：身份证 'emil'：邮箱 'telEmil'：电话+邮箱;
 *
 * @date下的config字段
 * @param add 当前日期的后几天，包含当天
 * @param subtract 当前日期的前几天，包含当天，当method为天时 如果只选择当天，可设置subtract为-1
 * @param defaultInitTime 设置默认初始值
 * @param range 限制选中时间段的范围
 * @param methodAdd 间隔后的日期 day 天 month 月 year 年 默认 day
 * @param methodSubtract 间隔前的日期 day 天 month 月 year 年 默认 day
 * @param methodRange 选中时的日期 day 天 month 月 year 年 默认 day
 *
 * @param defaultInitTime 设置默认初始值, 可自定义默认的时间，此时格式为数组，但数组的格式需要以官方为例是以[moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')]格式传入
 * 当defaultInitTime为对象时，有以下几个参数，以简便写入
 * @param showStartTime 开始的时间，如 '00:00:00'
 * @param showEndTime  结束的时间 如：'23:59:59'
 * @param showStartType 开始时间的类型，默认 HH:mm:ss'
 * @param showEndType 结束时间的类型， 默认 HH:mm:ss'
 *
 * @search下的参数
 * @param searchText 查询按钮文本，默认查询
 * @param resetText 重置按钮文本，默认重置
 * @param show 是否默认展开
 * @param cancelShow 是否默认展开并去除展开收起按钮
 * @param labelWidth 名称的宽度 默认为 100（刚好是4字加一个提示符号和冒号）
 *
 * @pagination下的参数
 * @param showQuickJumper 是否加入跳转元素，（当数据只有一页时）
 * @param pageSize 每行页数
 * @param size 分页器大小
 */
