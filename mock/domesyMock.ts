import type { Props } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'

export const welcome:Props = {
  use: {
    title: '开始学习',
    id: 'start'
  },
  useList: [
    {
      render: '首先 Ant Design Pro V5 是蚂蚁的框架，以 React 为主的框架，可以说是非常棒的框架，而我只是将研发中心的问题制作记录，适应所在的项目，做出更好的适配，尽快了解 这个框架'
    },
    {
      render: '通过学习这门课程，我们希望帮助读者达到下面几个目标。'
    },
    {
      type: 'list',
      list: [
        {
          render: `掌握 Ant Design 和 ProComponents 组件库`,
        },
        {
          render: `掌握Umi和Dva数据流前沿技术栈`,
        },
        {
          render: '熟练掌握 Hook'
        },
        {
          render: '处理日常开发过程遇到的问题',
        },
        {
          render: '提升实际开发能力和就业竞争力，能够承担真实业务',
        },
      ]
    },
    {
      render: '说明',
      id: 'explain',
      type: 'title'
    },
    {
      type: 'list',
      list: [
        {
          render: `本篇与其说是手册不如说我整理的笔记，在日常开发中所遇到的一些问题的汇总，主要是以实际项目为演示，所展示的东西可能不是很全面，有更好的建议、及问题欢迎指出，共同进步~`,
        },
        {
          render: `组件的封装是结合与项目，所进行的二次封装，原因是为了在每个页面更好的使用，控制，所以设置了全局配置文件`,
        },
        {
          render: '具体的案例请观赏 '
        },
        {
          render: '本文的组件还不是很多，后续会持续增加~~~',
        },
        {
          render: '感谢~~~',
        },
      ]
    },
    {
      render: '前置知识',
      id: 'knowledge',
      type: 'title'
    },
    {
      render: '观赏博客的时候，应该具备简单的前端开发知识，了解简单的SPA开发机制，会使用HTML+CSS+JavaScript编写简单的页面。'
    },
    {
      render: '尤为重要的一点 要先学会 React 中的 Hook ，原因是 V5 相对于 V4 上的提升，在于将 class 改为 函数式组件，更加快速的开发组件'
    },
    {
      render: '其次要掌握 ES6、ES7、Less、TS基本用法 '
    },
    {
      render: 'Ant Design Pro 介绍',
      id: 'AntDesign',
      effect: 4,
      type: 'title'
    },
    {
      render: 'Ant Design Pro 是一个企业级中后台前端/设计解决方案，我们秉承 Ant Design 的设计价值观，致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。'
    },
    {
      render: '简单的说，它是一个已经实现大部分开发需要的后台脚手架，以帮助开发者快速开发项目。',
      strong: true
    },
    {
      render: 'https://user-images.githubusercontent.com/8186664/44953195-581e3d80-aec4-11e8-8dcb-54b9db38ec11.png',
      type: 'img'
    },
  ],
}

export const welcomeAnchorList:AnchorLinkProps[] = [
  {
    title: '开始学习',
    href: 'start'
  },
  {
    title: '说明',
    href: 'explain',
  },
  {
    title: '前置知识',
    href: 'knowledge',
    children: [
      {
        title: 'Ant Design Pro 介绍',
        href: 'AntDesign',
      },
    ]
  },
  {
    title: 'Ant Design Pro 介绍',
    href: 'AntDesign',
  },
]
