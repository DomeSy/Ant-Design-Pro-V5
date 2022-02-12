import type { Props } from '../src/commonPages/DetailSetting'
import type { AnchorLinkProps } from '../src/components'

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
    {
      render: '相关技术栈',
      id: 'about',
      effect: 4,
      type: 'title'
    },
    {
      render: 'React',
      id: 'React',
      effect: 5,
      type: 'title',
      href: 'https://react.docschina.org/?no-cache=1',
      hrefTooltip: 'React文档'
    },
    {
      render: '如果你对它还不了解，请查看：React文档，它是学习该教程的前提。学过Vue的小伙伴，有的反馈说，它比较难上手，不如Vue简单高效。其实这点我个人观点是不同意的，Vue适合小型项目，代码复用低的情况。',
    },
    {
      render: 'React难归难，但是一旦上手，便爱不释手。',
      strong: true
    },
    {
      render: 'React Hook',
      id: 'ReactHook',
      effect: 5,
      type: 'title',
      href: 'https://react.docschina.org/docs/hooks-intro.html',
      hrefTooltip: 'React Hook文档'
    },
    {
      render: 'Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性',
    },
    {
      render: '也就是说函数式组件也能拥有状态，并且比class组件的使用更加简洁',
      strong: true
    },
    {
      render: 'dva',
      id: 'dva',
      effect: 5,
      type: 'title',
      href: 'https://dvajs.com/',
      hrefTooltip: 'dva文档'
    },
    {
      render: 'dva 首先是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，dva 还额外内置了 react-router 和 fetch，所以也可以理解为一个轻量级的应用框架。',
    },
    {
      render: '简单的说，Dva是在Mobx和Redux基础上的高度封装，使用更简单高效。',
      strong: true
    },
    {
      render: 'Umi@3',
      id: 'Umi@3',
      effect: 5,
      type: 'title',
      href: 'https://umijs.org/zh/',
      hrefTooltip: 'umi文档'
    },
    {
      render: 'umi 是蚂蚁金服的底层前端框架，已直接或间接地服务了 600+ 应用，是一个可插拔的企业级 react 应用框架。umi 以路由为基础的，支持类 next.js 的约定式路由，以及各种进阶的路由功能，并以此进行功能扩展，比如支持路由级的按需加载。',
    },
    {
      render: '简单的说，有了Umi，从此操作路由变得如此高效简单。',
      strong: true
    },
    {
      render: 'TypeScript',
      id: 'TypeScript',
      effect: 5,
      type: 'title',
    },
    {
      render: '带类型的 JS，ypeScript 是 javascript 的超集，TypeScript 不仅包含 JavaScript 的语法，同时还提供了静态类型检查和更完善的代码提示功能。任何现有的 JavaScript 程序都是合法的 TypeScript 程序，只需要简单的学习，就可以获得更佳的开发体验。',
    },
    {
      render: '简单来说，ts就是代码检测，使用的时候超级方便，同时也让代买更加规范，更好维护',
      strong: true
    }
  ],
  explain: {
    title: '其他',
    id: 'other',
  },
  explainList: [
    {
      render: '如果本文对您有帮助，请点个至高无上的 Star，支持一下吧~',
      strong: true
    },
    {
      render: '点我去语雀文档',
      effect: 5,
      href: 'https://www.yuque.com/domesy/vlgpwh',
    },
    {
      render: '点我去gitHub',
      effect: 5,
      href: 'https://github.com/DomeSy/Ant-Design-Pro-V5',
    },
    {
      render: '点我去Gitee',
      effect: 5,
      href: 'https://github.com/DomeSy/Ant-Design-Pro-V5',
    }
  ]
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
      {
        title: '相关技术栈',
        href: 'about',
        children: [
          {
            title: 'React',
            href: 'React',
          },
          {
            title: 'React Hook',
            href: 'ReactHook',
          },
          {
            title: 'dva',
            href: 'dva',
          },
          {
            title: 'Umi@3',
            href: 'Umi@3',
          },
          {
            title: 'TypeScript',
            href: 'TypeScript',
          }
        ]
      },
    ]
  },
  {
    title: '其他',
    href: 'other',
  },
]
