/**
 * @module Form表单
 * @author Domesy
 *
 * @param formList  表单配置的数据
 * @param footer 按钮是否显示在页脚，如果自定义按钮则无效 默认：false
 * @param buttonConfig 按钮相关的配置
 * @param layout 全局控制表单样式
 * @param method 特殊模式用于表单的一些特殊模式
 * @param initValues 初始值对象 设置默认初始值，属性名：formList的name字段 属性值：你想输入的默认字段（少部分field除外，需要在组件内自己写）
 * @param onValuesChange 用于监听表单项的值，如果你想监听到那个值，就使用此方法，但值再变化，他会返回一个对象，属性值就是当前表单的name。 用这个的好处，保持单向的数据流无论对开发者还是维护者都大有脾益
 * @fieldValues 自定义函数的值，当使用自定义的时候，表单无法绑定对应的值，这个时候将值绑定需要用到这个数组，如果不需要，也可以自行通过ref获取， 数组， 接收 name 和 value （name需要和formList中的field的那么保持一致，也就是接口对应的值）
 *
 * @zhu 自定义获取值需要通过fieldValues来确定，并且要在自定义组件中写入原有的值，不能设置initValue 来设置，会无效
 *
 * @param _config 配置相关的组件
 *
 * 尽量不要使用 value 和 onCHange 值的事件，原因是有可能导致绑定值的失败，个人认为，当碰到很麻烦的时候，直接使用ref进行赋值，可快速的解决
 *
 * @method string
 * @none 没有底部按钮
 * @mask 弹框模式，抽屉模式，宽度变为100%，并且没有按钮
 *
 * @_config
 * @param width 在布局的基础集中设置宽度
 * @param noRest 不要重置按钮
 * @param back 是否带返回按钮，可为对象，可为布尔，可为数字，为对象时继承按钮的所有属性，布尔：为true时，默认返回为-1，为number时可自己设置返回层数
 *
 * @back下的参数
 * @param jump 跳转的级数
 * @param text 按钮返回的字样
 *
 * @layout
 * @param close 关闭所有布局样式，自动充满当前格
 * @param way 控制样本展示的方式 horizontal 水平 vertical 垂直，默认水平
 * @param formLayout 栅格布局 与col类似,基础col的属性，将表格进行栅格布局，响应式布局等， 现在默认的居中，默认居中，有label字段，包含两个属性labelCol和wrapperCol
 * @param formTailLayout 与formLayout相同，但无label字段
 * 默认的属性，居中显示，Modal中展示为例正常的Modal可容纳6个字符，也就是一个必填项加四个字和一个冒号，如果超过了四字，建议使用 vertical 垂直属性，或是将Modal宽度调大即可解决
 *
 * @formList
 * @param type 类型，根据不同的类型来判断展示的组件， 默认为input
 * @param name 必填(最后获取的值)，值唯一，你可以这么理解，如果name=‘input’，那么最后返回的字段就是input，所以这个一般是接口所需要的提交字段,如果有相同的name，有可能会直接报错
 * @param label 字段名称
 * @param width 宽度
 * @param default 默认初始值，每个type对应不同的值，如是input他就是字符串，开关时是布尔值
 * @param tooltip 提示语
 * @param extra 额外节点 React.ReactNode
 * @param placeholder 预设时的字段 默认 请输入 + label（不一定都有）
 * @param readonly 只读
 * @param disabled 不可编辑
 * @param fieldProps 属性来支持原组件的props，在各种类型上提供一些简单的属性，这个属性如果自己设置相同的，会覆盖掉之前的
 * @param required select 唯一的规则，只有是否必填，加入必填（input，与 password, 必须没有rules这个属性，（也就是没有其他规则才能启用，否则要使用rules）
 *
 * @type
 * @param input 就是最基本的input
 * @param password 密码设置状态框, 包含input的全部属性
 * @param captcha 获取验证码的功能
 * @param select 选择框
 * @param checkbox 多选
 * @param radio 单选
 * @param switch 开关
 * @param textArea 文本框
 * @param rate 星级评价
 * @param slider 滑动输入条
 * @param field 自定义输入
 * @param digit 步进器
 * @param dependency 可获取其他的值，ProFormDependency
 * @param group ProForm.Group（暂未书写更多）
 *
 * @field的私有参数 自定义的field，并不是所有使用自定义的组件都需要fieldValue，绑定到onFinsh上，如果绑定的Ant Design的组件是不需要进行fieldValue绑定的，如 Cascader 组件，就可以不绑定fieldValue一样能够获取到。只有需要特殊处理的组件才需要绑定，如我封装的Upload组件
 *  //@param fieldValue 输入的值，必填，最后绑定在onFinsh上, 绑定在自定义组件上，也可以通过ref设置(有点问题)
 *
 * @input和password的私有参数
 * @param addonAfter 前缀 带个灰色的背景框
 * @param addonBefore 后缀 带个灰色的背景框
 * @param prefix 样式前缀
 * @param suffix 样式后缀
 * addonAfter addonBefore prefix suffix 类型都是ReactNode
 * @param rulesRender 适用于原本的rules
 * @param rules 数组 设置规则，disabled设置为true，规则不生效，接收一个数组，按照原本的参数传递，并在此基础上做了些方便的功能，如果想使用原本参数的形式，可适用 rulesRender
 * @param noRequired 在很少的情况下，不需要规则必填，但填必须按照规则去填,可以按此规则 布尔值
 *
 * @captcha的私有参数 包含input的参数
 * @getCaptcha 获取验证码的事件
 * @captchaTextRender 渲染计时的文案 timing: boolean, count: number
 * @max 倒计时的秒数
 *
 * @select的私有参数
 * @param mode 选择的模式：'singe' 单选（默认） 'multiple' 'tags' 多选
 * @param message 必填时的消息 默认
 * @param multiple 是否多选
 * @param search 是否搜索查询
 * @param enum 对象， 对应选择框的值，展示属性值，值为属性名
 * @param options 数组 包含label和value，展示label，值为value 并且等级高于enum
 * @param request 函数，返回对象为一个数组，包含label和value，展示label，值为value，并且等级高于enum和options
 * @param optionItemRender 函数，默认将item传入 下拉框自定义样式
 *
 * @digit的私有参数 步进器，这种适用于只输入数字，和保留小数的，他允许输入，但失去焦点会自动清除，传输答案的时候不会讲.0后面的带入
 * @param max 最大限制个数
 * @param min 最小限制个数
 * @param precision 设置小数点位数，可全局设置，默认为2
 *
 * @checkbox的私有参数
 * @param message 与select相同
 * @param enum 与select相同
 * @param options 与select相同
 *
 * @param request 与select相同
 *
 * @radio的私有参数
 * @param message 与select相同
 * @param enum 与select相同
 * @param options 与select相同
 * @param request 与select相同
 * @param radioType 按钮模式 button 单选变为button
 *
 * @textArea的私有参数
 * @param showCount 是否显示字数 布尔
 * @param max 限制最大字数 Number
 * @param autoSize 自适应内容高度， 为true自适应
 * @param rows 限定高度，固定文本框的高度
 *
 * @switch的私有参数
 * @param openText 开启是加载的文字或图标
 * @param closeText 关闭是加载的文字或图标
 * @param loading 是否是加载时
 *
 * @rate的私有参数
 * @param color  设置星的颜色 string
 * @param max 设置星的个数，默认为5
 * @param half 是否选整个星，而不是半星，默认false
 * @param tooltips 移动到星星上方的字样，Array<string> ，数组对应的顺序对应星星上面的数据
 * @param styleNode 星星的默认样式，可字母，可icon，可文字，也可以自定义文字
 *
 * @slider的私有参数
 * slider 有两种状态，第一种是单项，第二种是双向，单项时是纯选中的样式，双向时是以数组的形式展示，无论是默认值还是最终onFinsh的值都是这样返还的
 * @param range 布尔值 是否双向滑动 默认false
 * @param marks 对象，属性名为刻度尺，属性值为对应刻度尺下方展示的值，属性值可以使字符串和对象，字符串时就是展示的值，对象时有个style可以设置样式，label为展示的字体，类型为React.ReactNode(属性名必须在min-max范围内，否则会出现混乱现象)
 * @param max 布尔值 是否双向滑动
 * @param min 布尔值 是否双向滑动
 * @param step 数字 是否双向滑动
 *
 * @dependency下的私有参数
 * @param name 这里的name是必填的，可以为字符串，可以为数组吗，对应的获取其他的值
 * @param itemRender 获取对应name中的值，来做操作。注：可以返回对象或是数组，而对象和数组对应的就是formList中的值，如果返回其他则不显示
 *
 * @date的私有参数
 * @param method 包含  date 日期  time 时间  dateTime 日起+时间 dateRange 日期区间， timeRange 时间区间，dateTimeRange 日期时间区间
 * dateRange timeRange dateTimeRange  三者的placeholder设职位开始时间和结束时间，如果要修改，只能在fieldProps内修改
 * @param ranges 预设状态，是个对象，属性名为展示的名称，属性值是范围，是 [moment(), moment()],此方法只针对 dateRange timeRange  dateTimeRange 的设定
 * @param dateLimit
 * 目前只设置了dateLimit，针对日期所创建的限定条件，无针对时间的限定条件，如果需要限定时间或者预设日期不满足于所开发的条件，请在fieldProps内自行设置
 *
 * @dateLimit
 * start 和 end 优先级高于 add 和 subtract, start 和 end 可以使时间格式或这是 2021-06-02这样的格式
 * @param method 包含'days' 天  'months' 月 'weeks' 周 'years' 年 默认天（后面以天举例），限制天数
 * @param start 开始日期时间段，如果无结束日期，则结束日期取当天时间，如果输入的开始日期大于结束日期，则会全部禁用
 * @param end 结束日期时间段，如果无开始日期，则开始日期取当天时间，如果输入的开始日期大于结束日期，则会全部禁用
 * @param add 当前日期的后几天，包含当天
 * @param subtract 当前日期的前几天，包含当天，当method为天时 如果只选择当天，可设置subtract为-1
 * @param type 为了简洁开发，使用 type 来简易封装 type = 1： 只能选择今天之后的日期 2： 只能选择今天之前的日期（包含当天）
3 只选择时间段
 *
 * @rules
 * @param message 验证失败时返回的字段，可单独设置，下面的字段统一的默认message
 * @param required 必填项 判断是否有该字段 增加whitespace，只输入空格不可校验通过，如果字段无required，则默认加入必填字段，对应message默认字段为 请输入${data.label}
 * @param reMessage 有规则，但无必填字段，默认加入必填字段的message，取数组最后一个的reMessage
 * @param pattern 正则，验证失败时会报错
 * @param min 限定最少几个字符，可与max配合使用
 * @param max 限定最多几个字符，可与min配合使用
 * @param len 只限定几个字符能输入
 * @param method 简化开发设定常用的的值 具体有 'tel'：电话 'password'：密码 'name'：姓名 'card'：银行卡号 'sfz'：身份证 'emil'：邮箱 'telEmil'：电话+邮箱 'number': 数字 ‘numberZero': 非零数字 'numberFloat': 数字加浮点数（后两位）;
 *
 * @buttonConfig
 * @param submitText 提交的按钮文字
 * @param resetText 重置的按钮文字
 * @param submitButton 提交按钮的属性，继承Button
 * @param resetButton 重置按钮的属性，继承Button
 * @param onSubmit 点击提交按钮的事件，不建议使用
 * @param onReset 点击重置按钮的事件，不建议使用
 * @param otherRender 在原有的重置和提交增加其他按钮，如返回上一步，可以加个上一步的按钮，需要自己根据需求设计样式
 * @param position 自定义渲染按钮的位置，‘left’和 'right' 默认’left‘
 * @param render 自定义按钮样式，注：此方法是重置的按钮,继承原有的ProForm中submitter中的render，返回原有的props和dome，一旦由此方法，buttonConfig的其他方法都无法使用
 *
 */

/**
 *  placeholder: 请输入在日期内有点问题，在dateRange，date，和timeRange有点问题，照理说在fieldProps应该可以设置，但在fieldProps设置无效
 *   在原有属性的 labelCol 和 wrapperCol 是无效的，原因是存在无lable的情况，并且按钮的位置也受没有label的影响，所以此处不设有这两个属性
 *
 */

// import type { formProps } from '@/components'
// const list: formProps[] = [
//   {
//     name: 'input',
//     label: '普通输入框',
//     tooltip: 'type: input',
//     // default: '1112',
//   },
// {
//   name: 'input1',
//   label: '宽度',
//   tooltip: `width: 'sm'`,
//   width: 'sm',
// },
// {
//   name: 'input2',
//   label: '提示语',
//   tooltip: `我是提示语 tooltip: '我是提示语'`,
// },
// {
//   name: 'input3',
//   label: '为空时的文本样式',
//   default: '111',
//   tooltip: `default: '111'`,
//   placeholder: '自定义placeholder',
// },
// {
//   name: 'input4',
//   label: '额外配置信息',
//   tooltip: `extra: <span style={{color: 'red'}}>欢迎使用动态表单</span>`,
//   extra: <span style={{ color: 'red' }}>欢迎使用动态表单</span>,
//   placeholder: '自定义placeholder',
// },
// {
//   name: 'input5',
//   label: '只读',
//   readonly: true,
//   tooltip: `readonly: true`,
//   rules: [{ required: true, message: '此选项必填，并且不能为空格' }],
// },
// {
//   name: 'input6',
//   label: '禁用',
//   tooltip: `label: '禁用'`,
//   disabled: true,
// },
// {
//   name: 'input7',
//   label: '默认输入值',
//   tooltip: `default: 'Domesy'`,
//   default: 'Domesy',
// },
// {
//   name: 'input8',
//   label: '前缀图标(自定义)',
//   tooltip: 'prefix: <MailTwoTone />',
//   prefix: <MailTwoTone />,
// },
// {
//   name: 'input9',
//   label: '前缀图标(自定义)',
//   tooltip: 'suffix: <MailTwoTone />',
//   suffix: <MailTwoTone />,
// },
// {
//   name: 'input10',
//   label: '前置',
//   tooltip: 'addonAfter: "http"',
//   addonBefore: '.com',
// },
// {
//   name: 'input11',
//   label: '后置',
//   tooltip: 'addonBefore: ".com"',
//   addonAfter: 'http',
// },
// {
//   name: 'input12',
//   label: '前后置',
//   tooltip: 'addonBefore: React.Node, addonAfter: React.Node',
//   extra:
//     '无论是addonBefore、addonAfter还是suffix、prefix都不会将值传入，如果想要选择应该自行修改值',
//   addonBefore: (
//     <Select defaultValue="http://" className="select-before">
//       <Option value="http://">http://</Option>
//       <Option value="https://">https://</Option>
//     </Select>
//   ),
//   addonAfter: (
//     <Select defaultValue=".com" className="select-after">
//       <Option value=".com">.com</Option>
//       <Option value=".jp">.jp</Option>
//       <Option value=".cn">.cn</Option>
//       <Option value=".org">.org</Option>
//     </Select>
//   ),
// },
// {
//   name: 'input13',
//   label: '必填',
//   tooltip: '此选项必填，并且不能为空格',
//   rules: [{ required: true, message: '此选项必填，并且不能为空格' }],
// },
// {
//   name: 'input14',
//   label: '正则手机号',
//   tooltip: '所有有规则的都会加入required，并且不能为空格，简化开发',
//   rules: [
//     {
//       pattern: /^1\d{10}$/,
//       message: '满足规则为校验正确否则不正确',
//       reMessage: '为空时的提示语',
//     },
//   ],
// },
// {
//   name: 'input15',
//   label: '最小位数',
//   rules: [
//     {
//       min: 3,
//     },
//   ],
// },
// {
//   name: 'input16',
//   label: '最大位数',
//   rules: [
//     {
//       max: 5,
//     },
//   ],
// },
// {
//   name: 'input17',
//   label: '最小和最大',
//   rules: [
//     {
//       min: 3,
//       max: 5,
//     },
//   ],
// },
// {
//   name: 'input18',
//   label: '最小和最大',
//   tooltip: '同时支持最小和最大位数,但提示语不同',
//   rules: [
//     {
//       min: 3,
//     },
//     {
//       max: 5,
//     },
//   ],
// },
// {
//   name: 'input19',
//   label: '手机号验证',
//   tooltip: "method: 'tel', 对应utils/Regexp的reTel",
//   rules: [
//     {
//       method: 'tel',
//       message: '11',
//     },
//   ],
// },
// {
//   name: 'input20',
//   label: '密码',
//   tooltip: "method: 'password', 对应utils/Regexp的rePassword",
//   rules: [
//     {
//       method: 'password',
//     },
//   ],
// },
// {
//   name: 'input21',
//   label: '姓名',
//   tooltip: "method: 'name', 对应utils/Regexp的reName",
//   rules: [
//     {
//       method: 'name',
//     },
//   ],
// },
// {
//   name: 'input22',
//   label: '身份证',
//   tooltip: "method: 'sfz', 对应utils/Regexp的reSfz",
//   rules: [
//     {
//       method: 'sfz',
//     },
//   ],
// },
// {
//   name: 'input23',
//   label: '银行卡号',
//   tooltip: "method: 'card', 对应utils/Regexp的reCard",
//   rules: [
//     {
//       method: 'card',
//     },
//   ],
// },
// {
//   name: 'input24',
//   label: '邮箱',
//   tooltip: "method: 'emil', 对应utils/Regexp的reEmil",
//   rules: [
//     {
//       method: 'emil',
//     },
//   ],
// },
// {
//   name: 'input25',
//   label: '电话或邮箱',
//   tooltip: "method: 'name', 对应utils/Regexp的reTelEmil",
//   rules: [
//     {
//       method: 'telEmil',
//     },
//   ],
// },
// {
//   name: 'input26',
//   label: '规则rulesRender',
//   tooltip: '走原本的rules，原本的必填，输入空格也可校验过',
//   rulesRender: [
//     {
//       required: 'true',
//     },
//   ],
// },
// {
//   name: 'input27',
//   label: 'fieldProps',
//   noRequired: true,
//   rules: [
//     {
//       method: 'telEmil',
//     },
//   ],
//   tooltip: '支持原本的输入组件，如大小，placeholder',
//   extra: '在很少的情况下，不需要规则必填，但填必须按照规则去填',
// },
// {
//   name: 'input28',
//   label: 'fieldProps',
//   tooltip: '支持原本的输入组件，如大小，placeholder',
//   fieldProps: {
//     size: 'large',
//   },
// },
// {
//   name: 'input29',
//   placeholder: '没有 label，自动对齐',
// },
// {
//   name: 'password',
//   label: '密码',
//   type: 'password',
// },
// {
//   name: 'password1',
//   label: '密码',
//   placeholder: '配合规则，图标',
//   rules: [
//     {
//       method: 'password',
//       message: '密码，长度必须为6至20位',
//     },
//   ],
//   prefix: <MailTwoTone />,
//   type: 'password',
// },
// {
//   name: 'captcha',
//   label: '验证码',
//   tooltip: `type: captcha`,
//   prefix: <MailTwoTone />,
//   type: 'captcha',
// },
// {
//   name: 'captcha1',
//   label: '获取点击验证码事件',
//   tooltip: `getCaptcha:async (phone:any) => message.success('获取点击事件')`,
//   type: 'captcha',
//   getCaptcha: async (phone: any) => message.success('获取点击事件'),
// },
// {
//   name: 'captcha2',
//   label: '自定义文字',
//   tooltip: `captchaTextRender: (timing: boolean, count: number) => {return ...}`,
//   type: 'captcha',
//   captchaTextRender: (timing: boolean, count: number) => {
//     return timing ? `你还有${count}秒见到 Domesy` : 'Domesy';
//   },
// },
// {
//   name: 'captcha3',
//   label: '点击后的计时',
//   tooltip: `max: 30`,
//   type: 'captcha',
//   max: 30,
//   extra: '按钮的样式可以调，直接captchaProps可直接控制，跟Button样式一样',
// },
// {
//   name: 'date',
//   label: '日期',
//   type: 'date',
// },
// {
//   name: 'date1',
//   label: '必填日期',
//   type: 'date',
//   required: true
// },
// {
//   name: 'date2',
//   label: '日期',
//   type: 'date',
// },
// {
//   name: 'date3',
//   label: '前五天',
//   tooltip: `dateLimit: { subtract: 5 }`,
//   type: 'date',
//   dateLimit: {
//     subtract: 5,
//   },
// },
// {
//   name: 'date4',
//   label: '后五天',
//   tooltip: `dateLimit: { add: 5 }`,
//   type: 'date',
//   dateLimit: {
//     add: 5,
//   },
// },
// {
//   name: 'date5',
//   label: '前五天，后五天',
//   tooltip: `dateLimit: { add: 5, subtract: 5 }`,
//   type: 'date',
//   dateLimit: {
//     add: 5,
//     subtract: 5,
//   },
// },
// {
//   name: 'date6',
//   label: '前1个月',
//   tooltip: `dateLimit: { subtract: 1, method: 'months' }`,
//   type: 'date',
//   dateLimit: {
//     subtract: 1,
//     method: 'months'
//   },
// },
// {
//   name: 'date7',
//   label: '后1个月',
//   tooltip: `dateLimit: { add: 1, method: 'months' }`,
//   type: 'date',
//   dateLimit: {
//     add: 1,
//     method: 'months'
//   },
// },
// {
//   name: 'date8',
//   label: '前后1个月',
//   tooltip: `dateLimit: { add: 1, subtract: 1, method: 'months' }`,
//   type: 'date',
//   dateLimit: {
//     add: 1,
//     subtract: 1,
//     method: 'months'
//   },
// },
// {
//   name: 'date9',
//   label: '禁用时间段',
//   tooltip: `dateLimit: { start: '2021-06-07' ,end: '2021-06-12'}`,
//   type: 'date',
//   dateLimit: {
//     start: '2021-06-07',
//     end: '2021-06-12',
//   },
// },
// {
//   name: 'date10',
//   label: '只能选择今天之后的日期',
//   tooltip: `dateLimit: { type: 1, method: 'months' }`,
//   type: 'date',
//   dateLimit: {
//     type: 1,
//     method: 'months',
//   },
// },
// {
//   name: 'date11',
//   label: '只能选择今天之前的日期（包含当天）',
//   tooltip: `dateLimit: { type: 2, method: 'months' }`,
//   type: 'dateLimit: { type: 2, method: 'months' }',
//   dateLimit: {
//     type: 2,
//     method: 'months',
//   },
// },
// {
//   name: 'date12',
//   label: '只选择时间段',
//   tooltip: `dateLimit: { type: 3, start: '2021-06-07', end: '2021-06-12' }`,
//   type: 'date',
//   dateLimit: {
//     type: 3,
//     start: '2021-06-07',
//     end: '2021-06-12',
//   },
// },
// {
//   name: 'date13',
//   label: '时间',
//   tooltip: `method: 'time'`,
//   type: 'date',
// },
// {
//   name: 'date14',
//   label: '时间',
//   method: 'time',
//   tooltip: `method: 'time'`,
//   type: 'date',
// },
// {
//   name: 'date15',
//   label: '日期+时间',
//   method: 'dateTime',
//   tooltip: `method: 'dateTime',`,
//   type: 'date',
// },
// {
//   name: 'date16',
//   label: '日期时间段',
//   method: 'dateRange',
//   tooltip: `method: 'dateRange'`,
//   type: 'date',
// },
// {
//   name: 'date17',
//   label: '时间+时间段',
//   method: 'timeRange',
//   tooltip: `method: 'timeRange'`,
//   type: 'date',
// },
// {
//   name: 'date18',
//   label: '日期时间+日期时间段',
//   method: 'dateTimeRange',
//   tooltip: `method: 'dateTimeRange'`,
//   type: 'date',
// },
// {
//   name: 'date19',
//   label: '预设状态',
//   method: 'dateTimeRange',
//   tooltip: ``,
//   ranges: {
//     今天: [moment(), moment()],
//     本月: [moment().startOf('month'), moment().endOf('month')],
//   },
//   type: 'date',
// },
// {
//   name: 'switch',
//   label: '开关',
//   tooltip: `type: 'switch'`,
//   type: 'switch',
// },
// {
//   name: 'switch1',
//   label: '开关文字',
//   openText: '开启',
//   closeText: '关闭',
//   tooltip: `openText: '开启',closeText: '关闭',`,
//   type: 'switch',
// },
// {
//   name: 'switch2',
//   label: '开关图标',
//   openText: <MailTwoTone />,
//   tooltip: ` openText: <MailTwoTone />,`,
//   type: 'switch',
// },
// {
//   name: 'switch3',
//   label: '默认开启',
//   default: true,
//   tooltip: `default: true,`,
//   type: 'switch',
// },
// {
//   name: 'switch4',
//   label: '开关加载',
//   default: true,
//   loading: true,
//   tooltip: `default: true,loading: true,`,
//   type: 'switch',
// },
// {
//   name: 'digit',
//   label: '步进器',
//   type: 'digit',
//   tooltip: 'type: digit',
// },
// {
//   name: 'digit1',
//   label: '必填',
//   type: 'digit',
//   required: true,
//   tooltip: 'required: true',
// },
// {
//   name: 'digit2',
//   label: '只读',
//   readonly: true,
//   tooltip: 'readonly: true',
// },
// {
//   name: 'digit3',
//   label: '禁用',
//   type: 'digit',
//   disabled: true,
//   tooltip: 'disabled: true',
// },
// {
//   name: 'digit4',
//   label: '默认',
//   type: 'digit',
//   default: 3,
//   tooltip: 'type: digit',
// },
// {
//   name: 'digit5',
//   label: '限制10~0',
//   type: 'digit',
//   max: 10,
//   min: 0,
//   tooltip: 'max: 10, min: 0',
// },
// {
//   name: 'digit6',
//   label: '限制小数点: 3',
//   type: 'digit',
//   precision: 3,
//   tooltip: 'precision: 3',
// },
// {
//   name: 'select',
//   label: 'options字符串',
//   tooltip: '可以是数组为字符串，最后的值就是字符串本身',
//   options: [
//     '已选择',
//     '未选择',
//     '待选择'
//   ],
//   type: 'select',
// },
// {
//   name: 'select1',
//   label: '选择options',
//   tooltip: 'onFinish的值是enum的属性名',
//   options: [
//     { label: '全部1', value: 'all' },
//     { label: '未解决', value: 'open' },
//     { label: '已解决', value: 'closed' },
//     { label: '解决中', value: 'processing' },
//   ],
//   type: 'select',
// },
// {
//   name: 'select2',
//   label: '选择valueEnum',
//   tooltip: `enum,简化options`,
//   enum: {
//     0: '已选择',
//     1: '未选择',
//     2: '待选择',
//   },
//   type: 'select',
// },
// {
//   name: 'select3',
//   label: '选择request',
//   tooltip: '接收一个函数，可以动态调取接口，返回的值需要有label，和value，onFinish的值是value,并且层级大于enum',
//   request: async () => [
//     { label: '全部', value: 'all' },
//     { label: '未解决', value: 'open' },
//     { label: '已解决', value: 'closed' },
//     { label: '解决中', value: 'processing' },
//   ],
//   type: 'select',
// },
// {
//   name: 'select4',
//   label: '必填',
//   enum: {
//     0: '已选择',
//     1: '未选择',
//     2: '代选择',
//   },
//   placeholder: '选择规则',
//   required: true,
//   type: 'select',
// },
// {
//   name: 'select5',
//   label: '自定义下拉框样式',
//   enum: {
//     0: '已选择',
//     1: '未选择',
//     2: '代选择',
//   },
//   type: 'select',
//   optionItemRender: (item: any) => {
//     return item.label + ' - ' + item.value;
//   },
// },
// {
//   name: 'select6',
//   label: '多选',
//   tooltip: 'multiple: true,',
//   options: [
//     { label: '全部1', value: 'all' },
//     { label: '未解决', value: 'open' },
//     { label: '已解决', value: 'closed' },
//     { label: '解决中', value: 'processing' },
//   ],
//   multiple: true,
//   type: 'select',
// },
// {
//   name: 'select7',
//   label: '搜索',
//   tooltip: 'multiple: true,',
//   options: [
//     { label: '全部1', value: 'all' },
//     { label: '未解决', value: 'open' },
//     { label: '已解决', value: 'closed' },
//     { label: '解决中', value: 'processing' },
//   ],
//   search: true,
//   type: 'select',
// },
// {
//   name: 'checkbox',
//   label: 'option',
//   tooltip: `type: 'checkbox'，option为字符串`,
//   options: [
//     'React',
//     'Hook',
//     'DomesyPro'
//   ],
//   type: 'checkbox',
// },
// {
//   name: 'checkbox1',
//   label: 'option',
//   tooltip: `option为对象`,
//   options: [
//     { label: 'React', value: 0 },
//     { label: 'Hook', value: 1 },
//     { label: 'DomesyPro', value: 2 },
//   ],
//   type: 'checkbox',
// },
// {
//   name: 'checkbox2',
//   label: 'enum',
//   tooltip: `enum,简化options`,
//   enum: {
//     0: 'React',
//     1: 'Hook',
//     2: 'DomesyPro',
//   },
//   type: 'checkbox',
// },
// {
//   name: 'checkbox3',
//   label: 'request',
//   tooltip: '接收一个函数，可以动态调取接口，返回的值需要有label，和value，onFinish的值是value,并且层级大于enum',
//   request: async () => [
//     { label: 'React', value: 0 },
//     { label: 'Hook', value: 1 },
//     { label: 'DomesyPro', value: 2 }
//   ],
//   type: 'checkbox',
// },
// {
//   name: 'checkbox4',
//   label: '必填',
//   required: true,
//   tooltip: 'required: true',
//   message: '请选择checkbox',
//   enum: {
//     0: 'React',
//     1: 'Hook',
//     2: 'DomesyPro',
//   },
//   type: 'checkbox',
// },
// {
//   name: 'checkbox5',
//   label: '设置默认值',
//   tooltip: `default: ['2', '0'] `,
//   default: ['2', '0'],
//   enum: {
//     0: 'React',
//     1: 'Hook',
//     2: 'DomesyPro',
//   },
//   type: 'checkbox',
// },
// {
//   name: 'checkbox6',
//   label: '禁用',
//   tooltip: `disabled: true, default: ['2']`,
//   disabled: true,
//   default: ['2'],
//   enum: {
//     0: 'React',
//     1: 'Hook',
//     2: 'DomesyPro',
//   },
//   type: 'checkbox',
// },
// {
//   name: 'radio',
//   label: 'option',
//   tooltip: `type: 'radio'，option为字符串`,
//   options: ['React', 'Hook', 'DomesyPro'],
//   type: 'radio',
// },
// {
//   name: 'radio1',
//   label: 'option',
//   tooltip: `option为对象`,
//   options: [
//     { label: 'React', value: 0 },
//     { label: 'Hook', value: 1 },
//     { label: 'DomesyPro', value: 2 },
//   ],
//   type: 'radio',
// },
// {
//   name: 'radio2',
//   label: 'enum',
//   tooltip: `enum,简化options`,
//   enum: {
//     0: 'React',
//     1: 'Hook',
//     2: 'DomesyPro',
//   },
//   type: 'radio',
// },
// {
//   name: 'radio3',
//   label: 'request',
//   tooltip:
//     '接收一个函数，可以动态调取接口，返回的值需要有label，和value，onFinish的值是value,并且层级大于enum',
//   request: async () => [
//     { label: 'React', value: 0 },
//     { label: 'Hook', value: 1 },
//     { label: 'DomesyPro', value: 2 },
//   ],
//   type: 'radio',
// },
// {
//   name: 'radio4',
//   label: '必填',
//   required: true,
//   tooltip: 'required: true',
//   message: '请选择radio',
//   enum: {
//     0: 'React',
//     1: 'Hook',
//     2: 'DomesyPro',
//   },
//   type: 'radio',
// },
// {
//   name: 'radio5',
//   label: '设置默认值',
//   tooltip: `default: '2' `,
//   default: '2',
//   enum: {
//     0: 'React',
//     1: 'Hook',
//     2: 'DomesyPro',
//   },
//   type: 'radio',
// },
// {
//   name: 'radio6',
//   label: '禁用',
//   tooltip: `disabled: true, default: '2'`,
//   disabled: true,
//   default: '2',
//   enum: {
//     0: 'React',
//     1: 'Hook',
//     2: 'DomesyPro',
//   },
//   type: 'radio',
// },
// {
//   name: 'radio7',
//   label: '按钮模式',
//   tooltip: `radioType: 'button'`,
//   options: ['React', 'Hook', 'DomesyPro'],
//   type: 'radio',
//   radioType: 'button'
// },
// {
//   name: 'textArea',
//   label: '文本框',
//   tooltip: `type: 'textArea'`,
//   type: 'textArea',
// },
// {
//   name: 'textArea1',
//   label: '限制输入字数',
//   tooltip: `showCount: true`,
//   showCount: true,
//   type: 'textArea',
// },
// {
//   name: 'textArea2',
//   label: '限制最大值',
//   tooltip: `max: 200`,
//   max: 200,
//   type: 'textArea',
// },
// {
//   name: 'textArea3',
//   label: '自适应高度',
//   tooltip: `高度自适应 { autoSize: true }`,
//   type: 'textArea',
//   autoSize: true
// },
// {
//   name: 'textArea4',
//   label: '限制高度',
//   tooltip: `高度限制 { rows: 8 }`,
//   rows: 8,
//   type: 'textArea',
// },
// {
//   name: 'textArea5',
//   label: '默认值',
//   tooltip: `default: 'DomeSy TextArea'`,
//   default: 'DomeSy TextArea',
//   type: 'textArea',
// },
// {
//   name: 'textArea6',
//   label: '禁用',
//   tooltip: `disabled: true`,
//   disabled: true,
//   type: 'textArea',
// },
// {
//   name: 'rate',
//   label: '评星',
//   tooltip: `type: 'rate'`,
//   type: 'rate',
// },
// {
//   name: 'rate1',
//   label: '只能选全星',
//   half: true,
//   tooltip: `type: 'rate'`,
//   type: 'rate',
// },
// {
//   name: 'rate2',
//   label: '设置星数',
//   max: 8,
//   tooltip: `max: 8`,
//   type: 'rate',
// },
// {
//   name: 'rate3',
//   label: '额外配置信息',
//   half: true,
//   tooltips: ['terrible', 'bad', 'normal', 'good', 'wonderful'],
//   tooltip: `type: 'rate'`,
//   type: 'rate',
// },
// {
//   name: 'rate4',
//   label: '设置颜色',
//   color: 'rgba(12,218,22,.8)',
//   tooltip: `color: 'rgba(12,218,22,.8)'' | yellow | #000`,
//   type: 'rate',
// },
// {
//   name: 'rate5',
//   label: '必填',
//   required: true,
//   tooltip: `{ required: true }`,
//   type: 'rate',
// },
// {
//   name: 'rate6',
//   label: '默认',
//   default: 1.5,
//   tooltip: `disabled: 1.5`,
//   type: 'rate',
// },
// {
//   name: 'rate7',
//   label: '不可修改',
//   default: 2.5,
//   tooltip: `disabled: true`,
//   disabled: true,
//   type: 'rate',
// },
// {
//   name: 'rate8',
//   label: '自定义图标',
//   styleNode: <HeartOutlined />,
//   tooltip: `styleNode: <HeartOutlined />`,
//   type: 'rate',
// },
// {
//   name: 'rate9',
//   label: '自定义字母',
//   styleNode: 'D',
//   tooltip: `styleNode: 'D'`,
//   type: 'rate',
// },
// {
//   name: 'rate10',
//   label: '自定义文字',
//   styleNode: '好',
//   tooltip: `styleNode: '好'`,
//   type: 'rate',
// },
// {
//   name: 'rate11',
//   label: '自定义字符',
//   max: 6,
//   default: 6,
//   styleNode: ({ index }: any) => {
//     const data = ['D', 'O', 'M', 'E', 'S', 'Y'];
//     return data[index];
//   },
//   tooltip: `styleNode: ({index}:any) => Array[index]`,
//   type: 'rate',
// },
// {
//   name: 'slider',
//   label: '滑动输入条',
//   tooltip: `type: 'slider'`,
//   range: false,
//   type: 'slider',
// },
// {
//   name: 'slider2',
//   label: '双向滑动',
//   tooltip: `range: true`,
//   range: true,
//   type: 'slider',
// },
// {
//   name: 'slider3',
//   label: '默认值单项',
//   default: 70,
//   tooltip: `default: 70`,
//   type: 'slider',
// },
// {
//   name: 'slider4',
//   label: '默认值双向',
//   default: [10, 70],
//   range: true,
//   tooltip: `default: [10, 70]`,
//   type: 'slider',
// },
// {
//   name: 'slider5',
//   label: '设置文本',
//   tooltip: `通过marks进行设置，属性值为刻度尺，属性名为对应刻度尺下方展示的值，也可以通过style自定义样式`,
//   marks: {
//     0: '0°C',
//     100: '100°C',
//   },
//   default: [26, 57],
//   range: true,
//   type: 'slider',
// },
// {
//   name: 'slider6',
//   label: '设置文本',
//   marks: {
//     0: '0°C',
//     26: '26°C',
//     57: '57°C',
//     100: {
//       style: {
//         color: '#f50',
//       },
//       label: <strong>100°C</strong>,
//     },
//   },
//   default: [26, 57],
//   tooltip: `marks:{ 100: { style: { color: '#f50' } label: <strong>100°C</strong> } }`,
//   range: true,
//   type: 'slider',
// },
// {
//   name: 'slider7',
//   label: '设置最大值和最小值',
//   marks: {
//     20: '20',
//     50: '50',
//   },
//   max: 50,
//   min: 20,
//   tooltip: `max: 50, min:20`,
//   range: true,
//   type: 'slider',
// },
// {
//   name: 'slider8',
//   label: '步长为5',
//   step: 5,
//   tooltip: `step: 5`,
//   type: 'slider',
// },
// {
//   name: 'slider9',
//   label: '禁用',
//   disabled: true,
//   default: 11,
//   tooltip: `disabled: tru'`,
//   type: 'slider',
// },
// {
//   name: 'field',
//   label: '自定义',
//   type: 'field',
//   fieldRender: (
//     <OssUpLoad
//       getFiles={(file: Array<any>) => {
//         setFile(file)
//       }}
//     />
//   ),
// },
// {
//   name: 'field1',
//   label: '必填',
//   type: 'field',
//   required: true,
//   fieldRender: (
//     <OssUpLoad
//       getFiles={(file: Array<any>) => {
//         setFile1(file)
//       }}
//     />
//   ),
// },
// {
//   name: 'field',
//   label: '自定义',
//   type: 'field',
//   fieldRender: (
//     <OssUpLoad
//       initFile={['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png']}
//       getFiles={(file: Array<any>) => {
//         setFile(file)
//       }}
//     />
//   ),
// },

  // 切换
  // const list: formProps[] = [
  //   {
  //     name: 'text',
  //     label: '获取文本',
  //     default: '文本字样',
  //   },
  //   {
  //     name: 'radio',
  //     label: '切换',
  //     default: '形式1',
  //     options: ['形式1', '形式2', '形式3'],
  //     type: 'radio',
  //   },
  //   {
  //     name: ['radio', 'text'],
  //     type: 'dependency',
  //     itemRender: (data:any) => {
  //       if(data.radio === '形式1'){
  //         return [
  //           {
  //             name: 'name1',
  //             label: '示例1',
  //           },
  //           {
  //             name: 'name2',
  //             label: '示例2',
  //           },
  //         ]
  //       }
  //       return false
  //     }
  //   },
  //   {
  //     name: ['radio', 'text'],
  //     type: 'dependency',
  //     itemRender: (data:any) => {
  //       if(data.radio === '形式2'){
  //         return {
  //           name: 'name3',
  //           label: '示例3',
  //         }
  //       }
  //       return false
  //     }
  //   },
  //   {
  //     name: ['radio', 'text'],
  //     type: 'dependency',
  //     itemRender: (data:any) => {
  //       if(data.radio === '形式3'){
  //         return false
  //       }
  //       return {
  //         name: 'name4',
  //         label: '示例4',
  //       }
  //     }
  //   },
  // ];


  // const list: formProps[] = [
  //   {
  //     name: 'input',
  //     default:'React',
  //     label: '技术栈',
  //   },
  //   {
  //     name: 'input1',
  //     default: 'Domesy',
  //     label: '作者',
  //   },
  //   {
  //     type: 'dependency',
  //     name: ['input', 'input1'],
  //     itemRender: (data:any) => {
  //       return [
  //         {
  //           name: 'input3',
  //           label: `你使用的技术栈${data?.input || ''}`,
  //         },
  //         {
  //           name: 'input4',
  //           label: `你欣赏的作者${data?.input1 || ''}`,
  //         },
  //       ]
  //     }
  //   }
  // ];
