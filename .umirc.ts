import { defineConfig } from 'umi';

export default defineConfig({
  antd: {},
  dynamicImport: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/login', component: '@/pages/login/index', title: '欢迎登陆' },
    {
      path: '/',
      component: '@/layouts/Basic',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/user', component: '@/pages/user/index', wrappers: ['@/wrappers/auth']},
        { path: '/ad', component: '@/pages/ad/index' },
      ],
    },
  ],
  // chunks: ['vendors', 'umi'],
  // chainWebpack: function (config, { webpack }) {
  //   config.merge({
  //     optimization: {
  //       minimize: true,
  //       splitChunks: {
  //         chunks: 'all',
  //         minSize: 1000,
  //         minChunks: 2,
  //         automaticNameDelimiter: '.',
  //         cacheGroups: {
  //           vendor: {
  //             name: 'vendors',
  //             // @ts-ignore
  //             test({ resource }) {
  //               return /[\\/]node_modules[\\/]/.test(resource);
  //             },
  //             priority: 10,
  //           },
  //         },
  //       },
  //     }
  //   });
  // },
  scripts: [
    'https://res.wx.qq.com/open/js/jweixin-1.6.0.js'
  ],
  hash: true,
  manifest: {},
  dva: {
    hmr: true,
  },
});
