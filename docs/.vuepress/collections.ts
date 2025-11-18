/**
 * @see https://theme-plume.vuejs.press/guide/collection/ 查看文档了解配置详情。
 *
 * Collections 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * 请注意，你应该先在这里配置好 Collections，然后再启动 vuepress，主题会在启动 vuepress 时，
 * 读取这里配置的 Collections，然后在与 Collection 相关的 Markdown 文件中，自动生成 permalink。
 *
 * collection 的  type 为 `post` 时，表示为 文档列表类型（即没有侧边导航栏，有文档列表页）
 * 可用于实现如 博客、专栏 等以文章列表聚合形式的文档集合 （内容相对碎片化的）
 *
 * collection 的 type 为 `doc` 时，表示为文档类型（即有侧边导航栏）
 * 可用于实现如 笔记、知识库、文档等以侧边导航栏形式的文档集合 （内容强关联、成体系的）
 * 如果发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应的 Collection 配置的 link 的前缀开头。 是否展示侧边栏是根据 页面链接 的前缀 与 `collection.link`
 * 的前缀是否匹配来决定。
 */

/**
 * 在受支持的 IDE 中会智能提示配置项。
 *
 * - `defineCollections` 是用于定义 collection 集合的帮助函数
 * - `defineCollection` 是用于定义单个 collection 配置的帮助函数
 *
 * 通过 `defineCollection` 定义的 collection 配置，应该填入 `defineCollections` 中
 */
import { defineCollection, defineCollections } from 'vuepress-theme-plume'

const blog = defineCollection({
  // post 类型，这里用于实现 博客功能
  type: 'post',
  // 文档集合所在目录，相对于 `docs`
  dir: 'blog',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: 'Blog',
  // 文章列表页的链接，如果 `linkPrefix` 未定义，它也将作为 相关的文章的 permalink 的前缀
  link: '/blog/',
  //   linkPrefix: '/article/', // 相关文章的链接前缀
  //   postList: true, // 是否启用文章列表页
  //   tags: true, // 是否启用标签页
  //   archives: true, // 是否启用归档页
  //   categories: true, // 是否启用分类页
  //   postCover: 'right', // 文章封面位置
  //   pagination: 15, // 每页显示文章数量
})

const cppstudy = defineCollection({
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
      text: 'C++20: 基础语法',
      prefix: 'basic-syntax',
      collapsed: true,
      items: [
        {text: "第一章 基本概念", link: '001-基本概念.md'},
        {text: "第二章 基本数据类型", link: '002-基本数据类型.md'},
        {text: "第三章 处理基本数据类型", link: '003-处理基本数据类型.md'},
        {text: "第四章 决策", link: '004-决策.md'},
        {text: "第五章 数组和循环", link: '005-数组和循环.md'},
        {text: "第六章 指针和引用", link: '006-指针和引用.md'},
        {text: "第七章 操作字符串", link: '007-操作字符串.md'},
        {text: "第八章 定义函数", link: '008-定义函数.md'},
        {text: "第九章 词汇类型", link: '009-词汇类型.md'},
        {text: "第十章 函数模板", link: '010-函数模板.md'},
        {text: "第十一章 模块和名字空间", link: '011-模块和名字空间.md'},
        {text: "第十二章 定义自己的数据类型", link: '012-定义自己的数据类型.md'},
        {text: "第十三章 运算符重载", link: '013-运算符重载.md'},
        {text: "第十四章 继承", link: '014-继承.md'},
        {text: "第十五章 多态性", link: '015-多态性.md'},
        {text: "第十六章 运行时错误和异常", link: '016-运行时错误和异常.md'},
        {text: "第十七章 类模板", link: '017-类模板.md'},
        {text: "第十八章 移动语义", link: '018-移动语义.md'},
        {text: "第十九章 头等函数", link: '019-头等函数.md'},
        {text: "第二十章 容器与算法", link: '020-容器与算法.md'},
        {text: "第二十一章 受约束的模板和概念", link: '021-受约束的模板和概念.md'},
      ]
    }
  ],
  sidebarCollapsed: true,
})

/**
 * 导出所有的 collections
 * (blog 为博客示例，如果不需要博客功能，请删除)
 * (demoDoc 为参考示例，如果不需要它，请删除)
 */
export default defineCollections([
    blog,
    cppstudy
])
