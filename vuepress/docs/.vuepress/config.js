const { readdirSync } = require('fs');

const getPath = path => {
  return readdirSync(`docs/${path}`)
    .map(dir => {
      return `${path}/${dir}`;
    });
}


module.exports = {

  title: '狂拽酷炫屌炸天 琴棋书画诗酒茶',
  description: 'Gavin的博客',
  serviceWorker: true, // 是否开启 PWA
 
  base: '/',
  head: [
    // ['link', { rel: 'icon', href: '/img/logo.ico' }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {

    nav: [
      { text: '主页', link: '/' },

      {
        text: '工具',
        items: [
          { text: '导航', link: 'https://www.pythonforever.com' },
          { text: '图床', link: 'http://tu.pythonforever.com' },
          { text: '摇号', link: 'http://choose.pythonforever.com' },
          { text: 'LOVE', link: 'http://love.pythonforever.com' },


        ]
      },
      { text: 'CSDN', link: 'https://blog.csdn.net/weixin_39200308' },
      { text: 'Github', link: 'https://www.github.com/xunyegege' },

    ],
    sidebar:'auto',
    sidebar: [
  
    {
      title: '大前端',
      children: getPath('js'),
    },{
      title:'Java',
      children: getPath('java'),
    },
    {
      title:'岁月如梭(日记)',
      children:getPath('life')
    }
    ],
    sidebarDepth: 3,
    lastUpdated: '最后更新于',
  },
  markdown: {
    lineNumbers: true
  }
}