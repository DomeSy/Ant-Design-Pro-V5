import { Card, Select, message, Col, Dropdown, Menu, Row } from 'antd';
import { MailTwoTone, HeartOutlined } from '@ant-design/icons';
const { Option } = Select;

const list: any = [
  // {
  //   name: 'input',
  //   label: '普通输入框',
  //   tooltip: 'type: input',
  // },
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
  //   label: '前五天，后五天',
  //   tooltip: `dateLimit: { add: 5, subtract: 5 }`,
  //   type: 'date',
  //   dateLimit: {
  //     add: 5,
  //     subtract: 5,
  //   },
  // },
  // {
  //   name: 'date3',
  //   label: '前后1个月',
  //   tooltip: `dateLimit: { add: 1, subtract: 1,  methodAdd: 'month',  methodSubtract: 'month' }`,
  //   type: 'date',
  //   dateLimit: {
  //     add: 1,
  //     subtract: 1,
  //     methodAdd: 'month',
  //     methodSubtract: 'month'
  //   },
  // },
  // {
  //   name: 'date4',
  //   label: '禁用时间段',
  //   tooltip: `dateLimit: { end: ${Method.getDate({add: 3})}, start: ${Method.getDate({})} }`,
  //   type: 'date',
  //   dateLimit: {
  //     start: Method.getDate({}),
  //     end: Method.getDate({add: 3}),
  //   },
  // },
  // {
  //   name: 'date5',
  //   label: '只能选择今天之后的日期',
  //   tooltip: `dateLimit: { type: 1 }`,
  //   type: 'date',
  //   dateLimit: {
  //     type: 1
  //   },
  // },
  // {
  //   name: 'date6',
  //   label: '只能选择今天之前的日期（包含当天）',
  //   tooltip: `dateLimit: { type: 2 }`,
  //   type: 'date',
  //   dateLimit: {
  //     type: 2
  //   },
  // },
  // {
  //   name: 'date7',
  //   label: '只选择时间段',
  //   tooltip: `dateLimit: { type: 3, end: ${Method.getDate({add: 3})}, start: ${Method.getDate({})} }`,
  //   type: 'date',
  //   dateLimit: {
  //     type: 3,
  //     start: Method.getDate({}),
  //     end: Method.getDate({add: 3}),
  //   },
  // },
  // {
  //   name: 'date8',
  //   label: '日期时间段',
  //   method: 'dateRange',
  //   tooltip: `method: dateRange`,
  //   type: 'date',
  // },
  // {
  //   name: 'date9',
  //   label: '时间段为7天',
  //   method: 'dateRange',
  //   tooltip: `dateLimit: { type: 3, start: '2021-06-07', end: '2021-06-12' }`,
  //   type: 'date',
  //   dateLimit: {
  //     type: 3,
  //     start: Method.getDate({subscribe: 7}),
  //     end: Method.getDate({add: 7}),
  //   },
  // },
  // {
  //   name: 'date10',
  //   label: '限制前7后7',
  //   method: 'dateRange',
  //   tooltip: `dateLimit: { type: 3, start: '2021-06-07', end: '2021-06-12' }`,
  //   type: 'date',
  //   dateLimit: {
  //     type: 3,
  //     start: Method.getDate({subscribe: 7}),
  //     end: Method.getDate({add: 7}),
  //   },
  // },
  // {
  //   name: 'date11',
  //   label: '时间',
  //   method: 'time',
  //   tooltip: `method: 'time'`,
  //   type: 'date',
  // },
  // {
  //   name: 'date12',
  //   label: '日期+时间',
  //   method: 'dateTime',
  //   tooltip: `method: 'dateTime',`,
  //   type: 'date',
  // },

  // {
  //   name: 'date13',
  //   label: '时间+时间段',
  //   method: 'timeRange',
  //   tooltip: `dateLimit: { type: 3, start: '2021-06-07', end: '2021-06-12' }`,
  //   type: 'date',
  // },
  // {
  //   name: 'date14',
  //   label: '日期时间+日期时间段',
  //   method: 'dateTimeRange',
  //   tooltip: `dateLimit: { type: 3, start: '2021-06-07', end: '2021-06-12' }`,
  //   type: 'date',
  // },
  // {
  //   name: 'date18',
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
  {
    name: 'slider8',
    label: '步长为5',
    step: 5,
    tooltip: `step: 5`,
    type: 'slider',
  },
  {
    name: 'slider9',
    label: '禁用',
    disabled: true,
    default: 11,
    tooltip: `disabled: tru'`,
    type: 'slider',
  },
];
