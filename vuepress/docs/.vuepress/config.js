const { readdirSync } = require('fs');

const getPath = path => {
  return readdirSync(`docs/${path}`)
    .map(dir => {
      return `${path}/${dir}`;
    });
}


module.exports = {

  title: 'Gavin的进阶之路',
  description: 'Gavin的博客',
  serviceWorker: true, // 是否开启 PWA
  base: '/',
  head: [
    // ['link', { rel: 'icon', href: '/img/logo.ico' }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {

    nav: [
      { text: '主页', link: '/java/' },

      {
        text: '工具',
        items: [
          { text: '导航', link: 'https://www.pythonforever.com' },
          { text: '图床', link: 'http://tu.pythonforever.com' },
          { text: '摇号', link: 'http://choose.pythonforever.com' },
          { text: 'LOVE', link: 'http://love.pythonforever.com' },


        ]
      },
      { text: 'Github', link: 'https://www.github.com/xunyegege' },

    ],
    sidebar:'auto',
    sidebar: [
  
    {
      title: '学习笔记',
      children: getPath('js'),
    }
    ],
    sidebarDepth: 3,
    lastUpdated: 'Last Updated'
  },
  markdown: {
    lineNumbers: true
  }
}