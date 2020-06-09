module.exports = {
    // 可以理解为路由的配置文件
    title: "mengliao-blog",
    description: '这个地方的内容是自定义的',
    themeConfig: {
      lastUpdated: true,
      lastUpdated: 'Last Time',
      // 是否现实打开git源码的tab
      // repo: '',
      // repoLabel: 'Github',
      // 上面导航栏的配置
      nav: [
        // 没有下拉的情况
        { text: '首页', link: '/' },
        { text: '关于我的', link: '/about/' },
        // 需要下拉的情况，需要现实几个配置几个，注意这个地方的选中是正则匹配的，所以点第二个的时候第一个也是选中状态，解决方案就是每一个都把路径写死，这样就不会出现模糊匹配的情况了
        { text: 'Posts', items: [
          { text: 'post', link: '/post/' },
          { text: 'post1', link: '/post/post1' },
          { text: 'post2', link: '/post/post2' }
        ] },
        { text: 'other', items: [
            { text: 'other', link: '/other/' }
        ] }
      ],
      // 侧边栏支持多少级的显示
      sidebarDepth: 0,
      // 侧边栏的配置
      sidebar: {
        '/post/': [
          '',
          'post1',
          'post2',
          'post3',
        ],
        '/other/': [
          '',
          'other1',
          'other2',
          'other3',
          'other4',
        ]
      }
    },
    markdown: {
      lineNumbers: true // 显示代码块行号
    }
  }