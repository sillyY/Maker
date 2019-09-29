const path = require('path')
const webpack = require('webpack')
// const moment = require('moment')
// const FileManagerPlugin = require('filemanager-webpack-plugin');

// const Config = require('./config')

function resolve(dir) {
  return path.join(__dirname, dir)
}

class CustomFilterPlugin {
  constructor({ exclude }) {
    this.exclude = exclude
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tap('CustomFilterPlugin', compilation => {
      compilation.warnings = compilation.warnings.filter(
        warning => !this.exclude.test(warning.message)
      )
    })
  }
}

module.exports = {
  pages: {
    app: {
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      title: 'Maker',
      chunks: ['chunk-vendors', 'chunk-common', 'app']
    }
  },
  publicPath: '/',
  runtimeCompiler: true,
  lintOnSave: false,
  productionSourceMap: false,
  chainWebpack: config => {
    //支持 audio 的 src 属性
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          audio: 'src',
          video: 'src'
        }
        return options
      })

    //设置别名
    config.resolve.alias.set('@', resolve('src')) //src or test

    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.resolve.alias.set('vue$', 'vue/dist/vue.runtime.esm.js') //生产环境用，比完整版小30%左右，前端性能更优
    } else {
      // 为开发环境修改配置...
      config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js') //开发环境用
    }
  },
  configureWebpack: config => {
    const assetsRoot = config.output.path

    config.performance = {
      hints: false
    }

    let plugins = []
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...

      // let zipFileName = 'crm' + '-' + moment().format('YYYYMMDDHHmm')

      //设置模块存放目录
      // config.output.chunkFilename = assetsDir + '/js/chunks/[name].[contenthash:8].js';

      plugins = [
        //压缩打包结果
        // new FileManagerPlugin({
        //   onEnd: {
        //     delete: [
        //       '*.zip',
        //      ],
        //     archive: [
        //       {
        //         source: assetsRoot,
        //         destination: `./${zipFileName}.zip`
        //       }
        //     ]
        //   }
        // })
      ]
    } else {
      // 为开发环境修改配置...
      plugins = []
    }

    let _plugins = [
      // new webpack.DefinePlugin({
      //   //全局变量
      //   // 'process.env.API_URL': JSON.stringify(Config[process.env.NODE_ENV].api)
      // }),
      new webpack.ProvidePlugin({
        CKEDITOR: 'window.CKEDITOR',
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      }),
      new CustomFilterPlugin({
        //忽略警告
        exclude: /Conflicting order between:/
      })
    ]

    config.plugins = [...config.plugins, ...plugins, ..._plugins]
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // sourceMap:false,
    loaderOptions: {}
  },
  //在生产构建中为babel&ts使用线程加载器
  //如果机器有多个核心，默认情况下启用
  parallel: require('os').cpus().length > 1,
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000,
    https: false
  }
}
