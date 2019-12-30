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
const glob = require('glob')

// 配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
  const entries = {}
  let basename; let tmp; let pathname

  glob.sync(globPath).forEach(function(entry) {
    basename = path.basename(entry, path.extname(entry))
    // console.log(entry)
    tmp = entry.split('/').splice(-3)
    pathname = basename // 正确输出js和html的路径

    // console.log(pathname)
    entries[pathname] = {
      entry: 'src/' + tmp[0] + '/' + tmp[1] + '/main.js',
      template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[2],
      title: tmp[2],
      filename: tmp[2],
      chunks: ['chunk-vendors', 'chunk-common', pathname]
    }
  })
  return entries
}


const pages = getEntry('./src/pages/**?/*.html')
// 配置end
module.exports = {
  publicPath: process.env.NODE_ENV && process.env.NODE_ENV.includes('production') ? './' : '/',
  lintOnSave: true,
  productionSourceMap: false,
  pages,
  devServer: {
    index: 'class.html.html', // 默认启动serve 打开index页面
    open: process.platform === 'darwin',
    host: '',
    port: 8081,
    https: false,
    hotOnly: false,
    proxy: {
      '/': {
        ws: false,
        target: 'https://cssg.gddj.gov.cn/', // dev环境 测试
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
    Object.keys(pages).forEach(entryName => {
      config.plugins.delete(`prefetch-${entryName}`)
    })
    if (process.env.NODE_ENV && process.env.NODE_ENV.includes('production')) {
      config.plugin('extract-css').tap(() => [{
        path: path.join(__dirname, './dist'),
        filename: 'css/[name].[contenthash:8].css'
      }])
    }
  },
  configureWebpack: config => {
    // if (process.env.NODE_ENV.includes('production')) {
    //   config.output = {
    //     path: path.join(__dirname, './dist'),
    //     baseUrl: './',
    //     publicPath: './',
    //     filename: 'js/[name].[contenthash:8].js'
    //   }
    // }
  }
}
