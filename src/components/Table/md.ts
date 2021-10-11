/**
 * @module Table
 * @author Domesy
 *
 * @param headerTitle 表格标题
 * @param tooltip 表格提示语
 * @param search 搜索框的配置
 * @param pagination 分页器的配置
 * @param getRef 获取表格的Ref
 * @param request 请求数据 => 暂未设置
 * @param tableList 请求的列 替换原有的 columns（如果columns存在，则会替换tableList）
 * @param _config 额外配置(在原有的配置上加入其它属性，来帮助开发)
 * @param rowKey rowKey对应列表中的key,这个值其实就是列表的key，没有会报错，通常来说，后端返回列表的时候会有一个类似于key，id这样唯一的值做以区分，那么这个 rowKey 就是接口返回的key，id，因为通常而言这个key是一样的所以可以统一设置
 * @param toolBar 替换原有的toolBarRender,改为数组格式，如果toolBarRender存在则，走toolBarRender
 * @_config 额外配置
 *
 *
 * @param create 新建按钮，可跳转新的页面，也可以自动生成表单，与Mask组件和Form组件结合，为false是不显示，否则为对象
 *
 * @param toolBar 数组的格式，接收React.ReactNode的形式。
 * @param method 方式 creat 新建 button 自定义按钮
 * @param create 新建按钮存在的对象
 * @param button 新建按钮存在的对象
 * @param fieldRender 自定义，接收toolBarRender的参数，返回数组=>React.React.ReactNode
 *
 * @create 下的参数
 * @param go 跳转页面的路径
 * @param payload 跳转页面所需的参数
 * @param text 新建按钮的文字， 默认 新建
 * @param maskFrom 对应 Mask.From组件的全部属性，具体的请参照对应的文档
 * @param from 对应 From组件的全部属性，具体的请参照对应的文档
 * @param formList 对应from表单的list属性
 * @param button 对应Button的相关属性
 * @param prefix 前置图标，默认➕，不显示返回false即可
 * @param onBefore 跳转之前执行其他的方式
 * @param onBeforeFormList 通过次方法可以返回新的formList，用于做一些复杂的表单生成
 *
 * @button下的参数 自定义按钮，如果是其他按钮，可以用这个，方便统一样式处理
 * @param text 按钮的文字
 * @param prefix 按钮的前置图标
 * @param style 按钮的样式
 * @param type 对应按钮的type
 * @param onClick 对应按钮的点击事件
 * @param props 对应AntD的按钮样式
 *
 * @tableList 下的参数（独有参数不一定，一个参数在不同的type下有可能有不同的意思)
 * @param type 用于判断类型 有 date 日期 tools 额外配置
 * @param method type下的分类  dateTimeRange 日期时间秒
 * @param readonly 是否只读
 * @param required select 唯一的规则，只有是否必填，加入必填（input，与 password, 必须没有rules这个属性，（也就是没有其他规则才能启用，否则要使用rules）
 * @param rulesRender 适用于原本的rules
 * @param rules 数组 设置规则，disabled设置为true，规则不生效，接收一个数组，按照原本的参数传递，并在此基础上做了些方便的功能，如果想使用原本参数的形式，可适用 rulesRender
 * @param message 必填时的消息提示，默认为标题+为必填项
 * @param noRequired 在很少的情况下，不需要规则必填，但填必须按照规则去填,可以按此规则 布尔值
 *
 * @type为tools下的参数 接收一个数组（为简化开发，设置编辑，删除，和启用禁用三个按钮）
 * @param method 方式的类型 edit 编辑 delete 删除 state 状态
 *
 * @param method 下的参数
 * @param edit 接收一个对象，具体用法与新建一样，不同的是，在编辑中可能需要当前这一行的信息，所以增加一些额外配置
 * @param delete 删除
 * @param state 状态处理，启用警用
 *
 * @state下的参数 以启用禁用为例
 * @param openText 启用时的文字，默认启用
 * @param closeText 禁止时的文字，默认禁止
 * @param title 提示框的提示语，默认 你确定要禁用（启用）吗
 * @param okText 提示框的确定文字，默认确定
 * @param cancelText 删除上提示框的取消文字，默认取消
 * @param onState 接收当列的值，返回一个布尔值， 为true则代表启用状态，按钮为禁用，反之亦然
 * @param onEdit 编辑，编辑前的操作，返回一个对象，为 open 和 close 分别对应 启用时，和禁用的接口数据，返回的字符串给出提示，返回的对象作为onRequest的参数，否则没有任何操作
 * @param onSuccess 成功时的操作，第一个参数，返回成功结果，第二个参数返回布尔值，为true则是禁用， 为false为启用
 * @param onRequest 请求的接口
 * @param onRequestClose 禁用的接口，防止警用和启用不是同一个接口，如果没有，则走onRequest的方法
 * @param style 对应的样式
 *
 * @delete下的参数
 * @param text 按钮文字的字样，默认删除
 * @param okText 删除上提示框的确定文字，默认确定
 * @param cancelText 删除上提示框的取消文字，默认取消
 * @param message 删除成功后的提示语句
 * @param title 删除提示框的提示语，默认 你确定要删除吗
 * @param onEdit 编辑，请求接口上的操作，返回 字符串，会提示错误，返回对象，会将返回值提供给onRequest作为请求参数，其他格式不做任何处理
 * @param onSuccess 删除成功进行的操作，（同步，执行完后会刷新列表）
 * @param onRequest 删除请求的接口
 * @param style 对应的样式
 *
 * @edit下的参数 （除了_config.create的配置外）
 * @param onBeforeFiled 接收当前列表的数据 编辑时的弹框对应自定义组件有些不同，原因是表单调取自定义实际上依靠的是fieldValues的值，但当表单调入传入的是当前行的值，也就是说当点击的那刻才能拿到值，并不是在函数一开始执行就能拿到对应的，因此，用之前的方法显然不行，所以需要通过onBeforeFiled来单独设置fieldValues的值以便来设定自定义组件的值
 * @param onBeforeStart 接收当前列表的数据 当我们编辑的时候，需要依赖于这行数据，调取接口等操作，最终都在列表中进行操作，所以这个函数提供返回formList数组，用于替换原有的formList这个参数，接收这行数据的信息。另外 如果返回字符串，则会提示对应的字符串信息，除此之外，都无效
 * @param onEdit 此处的onEdit实际上就是 Mask.Form 中的onEdit，只不过在此基础上增加了第二个参数，当前行掉的信息，跟onBeforeStart一样，在编辑的时候，有可能需要此行的信息，（注：maskForm 中的onEdit不在有用）
 * @param style 对应的样式
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
 * @param method 简化开发设定常用的的值 具体有;
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
 * @param cancel 是否取消原有的查询和导出按钮，如果写入将没有查询和导出按钮(谨慎使用)
 * @param searchText 查询按钮文本，默认查询
 * @param resetText 重置按钮文本，默认重置
 * @param show 是否默认展开
 * @param labelWidth 名称的宽度 默认为 100（刚好是4字加一个提示符号和冒号）
 * @param options 自定义按钮配置
 * @param layout 是否垂直 'horizontal' | 'vertical'
 *
 * @options下的参数 （返回一个数组）
 * @param method（在查询重置之后） 模式 export 导出 search 查询按钮 reset 重置按钮 button 自定义按钮
 * @param export 导出的相关配置
 * @param fieldRender 自定义状态（接收两个原有optionRender参数）
 *
 * @export下的参数
 * @param text 对应的文字 默认导出
 * @param message 导出成功对应的提示
 * @param button 按钮的相关配置
 * @param style 对应的样式
 * @param searchProps 查询按钮对应的按钮属性
 * @param resetProps 重置按钮对应的按钮属性
 * @param searchStyle 查询按钮对应的样式
 * @param resetStyle 重置按钮对应得到样式
 * @param searchPrefix 搜索按钮前置图标
 * @param resetPrefix 重置按钮前置图标
 * @param onExportBefore 导出之前的方法（接收两个原有optionRender参数），返回需要满足 Method.ExportExcel的参数要求
 * @param onExportAfter 导出之后的方法
 *
 * @button下的参数 自定义按钮，如果是其他按钮，可以用这个，方便统一样式处理
 * @param text 按钮的文字
 * @param prefix 按钮的前置图标
 * @param style 按钮的样式
 * @param type 对应按钮的type
 * @param onClick 对应按钮的点击事件
 * @param props 对应AntD的按钮样式
 *
 * @pagination下的参数
 * @param showQuickJumper 是否加入跳转元素，（当数据只有一页时）
 * @param pageSize 每行页数
 * @param size 分页器大小
 */
