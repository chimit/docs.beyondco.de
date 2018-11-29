module.exports = {
  title: 'Laravel WebSockets 🚀',
  description: 'WebSockets for Laravel. Done right.',
  
  base: '/laravel-websockets/',
  dest: './public/laravel-websockets',
  
  head: [
    [
      'link',
      {
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css',
        rel: 'stylesheet',
        type: 'text/css',
      },
    ],
  ],

  themeConfig: {
    websocketClientKey: 'documentation',
    displayAllHeaders: true,
    sidebarDepth: 1,
    repo: 'beyondcode/laravel-websockets',
    docsRepo: 'beyondcode/laravel-websockets-docs',
    docsDir: 'resources/docs',
    docsBranch: 'master',
    editLinks: true,
    sidebar: {
      '/1.0/': require('./1.0'),
    },
  }
}