module.exports = {
    title: 'Hello VuePress',
  description: 'Just playing around',
  base:"/reco/",
    theme: 'reco',

    //移动端优化
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
      ],
    themeConfig: {
        sidebar: 'auto',//在所有页面中启用自动生成侧栏
        author: 'jarvis',
        huawei: true,
        nav: [
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
          ],
         
       // 博客配置
      blogConfig: {
        category: {
          location: 2,     // 在导航栏菜单中所占的位置，默认2
          text: 'Category' // 默认文案 “分类”
        },
        tag: {
          location: 3,     // 在导航栏菜单中所占的位置，默认3
          text: 'Tag'      // 默认文案 “标签”
        }
      },

      // 备案信息和项目开始时间
      record: 'ICP 备案文案',
      recordLink: 'ICP 备案指向链接',
      cyberSecurityRecord: '公安部备案文案',
      cyberSecurityLink: '公安部备案指向链接',
      // 项目开始时间，只填写年份
      startYear: '2017',

      type: 'blog',
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      }
    ],
    repo: 'SuYxh/reco',
    // // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // // 假如文档放在一个特定的分支下：
    // docsBranch: 'gh-pages',
    // // 默认是 false, 设置为 true 来启用
    editLinks: true,
    mode: 'light'
    }
  }