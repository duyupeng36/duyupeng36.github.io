import { defineCollection } from 'vuepress-theme-plume'

export default defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: 'cppstudy',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/cppstudy',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: 'C++',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: 'C++: 基础语法',
      prefix: 'basic-syntax',
      collapsed: true,
      items: [
        {
          text: "第一章 基本概念",
          link: '001-基本概念.md'
        },
        {
          text: "第二章 基本数据类型",
          link: '002-基本数据类型.md'
        },
        {
          text: "第三章 处理基本数据类型",
          link: '003-处理基本数据类型.md'
        },
        {
          text: "第四章 决策",
          link: '004-决策.md'
        },
        {
          text: "第五章 数组和循环",
          link: '005-数组和循环.md'
        },
        {
          text: "第六章 指针和引用",
          link: '006-指针和引用.md'
        },
        {
          text: "第七章 操作字符串",
          link: '007-操作字符串.md'
        },
        {
          text: "第八章 定义函数",
          link: '008-定义函数.md'
        },
        {
          text: "第九章 词汇类型",
          link: '009-词汇类型.md'
        },
        {
          text: "第十章 函数模板",
          link: '010-函数模板.md'
        },
        {
          text: "第十一章 模块和名字空间",
          link: '011-模块和名字空间.md'
        },
        {
          text: "第十二章 定义自己的数据类型",
          link: '012-定义自己的数据类型.md'
        },
        {
          text: "第十三章 运算符重载",
          link: '013-运算符重载.md'
        },
        {
          text: "第十四章 继承",
          link: '014-继承.md'
        },
        {
          text: "第十五章 多态性",
          link: '015-多态性.md'
        },
        {
          text: "第十六章 运行时错误和异常",
          link: '016-运行时错误和异常.md'
        },
        {
          text: "第十七章 类模板",
          link: '017-类模板.md'
        },
        {
          text: "第十八章 移动语义",
          link: '018-移动语义.md'
        },
        {
          text: "第十九章 头等函数",
          link: '019-头等函数.md'
        },
        {
          text: "第二十章 容器与算法",
          link: '020-容器与算法.md'
        },
        {
          text: "第二十一章 受约束的模板和概念",
          link: '021-受约束的模板和概念.md'
        },
      ]
    },
    {
      text: 'C++ 标准模板库',
      prefix: 'std-template-library',
      collapsed: true,
      items: [
      ]
    }
  ],
  sidebarCollapsed: true,
})