/**
 * 生成的文件为
 * -dist
 *    - css
 *        - index.xxx.css
 *        - studyOnline.xxx.css
 *    - img
 *  - class.html
 *  - componentTest.html
 */

/**
 * elementUi 主题、配置 --> true
 * axios 拦截器配置、 ajax封装优化 -- > true
 * 公共类、 依赖库跨页面复用 -- > true
 * 发布环境结合webpack配置，使用打包命令参数区分发布环境 --> 待测试
 * iconfont 图标 -- > true
 * eslint -- > true
 */

const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

// 配置end
module.exports = {
  publicPath: process.env.NODE_ENV && process.env.NODE_ENV.includes('production') ? './' : '/',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    open: process.platform === 'darwin',
    host: '',
    port: 8081,
    https: false,
    hotOnly: false,
    proxy: {
      '/': {
        ws: false,
        target: '', // dev环境 测试
        changeOrigin: true,
        pathRewrite: {
          '^/': '/' // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
        }
      }
    } // 设置代理
  },
  // css相关配置
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }, // css预设器配置项
    modules: false // 启用 CSS modules for all css / pre-processor files.
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        options.limit = 100
        return options
      })
    if (process.env.NODE_ENV && process.env.NODE_ENV.includes('production')) {
      config.plugin('extract-css').tap(() => [{
        path: path.join(__dirname, './dist'),
        filename: 'css/[name].[contenthash:8].css'
      }])
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV.includes('production')) {
      return {
        plugins: [
          new PrerenderSpaPlugin({
            staticDir: path.join(__dirname, 'dist'),

            // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
            routes: ['/', '/class/math', '/class/english', '/class/chinese', '/guide', '/teacher', '/information', '/about'],

            // To minify the resulting HTML.
            minify: {
              collapseBooleanAttributes: true,
              collapseWhitespace: true,
              decodeEntities: true,
              keepClosingSlash: true,
              sortAttributes: true
            },

            // 这个很重要，如果没有配置这段，也不会进行预编译
            renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
              // 配置inject可通过window.injectProperty获取参数
              inject: { },
              headless: false,
              // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
              renderAfterDocumentEvent: 'render-event'
            })
          })
        ]
      }
    }
  }
}
