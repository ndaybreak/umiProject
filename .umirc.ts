import { defineConfig } from 'umi';

export default defineConfig({
  // antd: {},
  dynamicImport: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/login', component: '@/pages/login/index', title: '欢迎登陆' },
    { path: '/recipe/list/:month', component: '@/pages/recipe/list' },
    {
      path: '/',
      component: '@/layouts/Basic',
      routes: [
        { path: '/', component: '@/pages/test/index' },
        {
          path: '/user',
          component: '@/pages/user/index',
          wrappers: ['@/wrappers/auth'],
        },
        { path: '/ad', component: '@/pages/ad/index' },
        { path: '/wx', component: '@/pages/wx/index' },
        { path: '/recipe/month', component: '@/pages/recipe/month' },
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
  scripts: ['https://res.wx.qq.com/open/js/jweixin-1.6.0.js'],
  hash: true,
  manifest: {},
  dva: {
    hmr: true,
  },
  extraBabelPlugins: [
    ['import', { libraryName: 'antd-mobile', style: 'css' }], // `style: true` 会加载 less 文件
  ],
});
