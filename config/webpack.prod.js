const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
// const PurgeCssPlugin = require('purgecss-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const AutoUploadServer = require('../webpack_plugins/AutoUploadServer');
const serverConfig = require('./server');
// const glob = require('glob')
// const webpack = require('webpack');
// const path = require("path");
const isProduction = true;

module.exports = {
  // mode: "production",
  // devtool: 'source-map',
  externals: {
    axios: 'axios',
    less: 'less',
    echarts: 'echarts',
    iview: 'iview',
  },
  optimization: {
    // concatenateModules: true,  // production模式下默认true。告知 webpack 去寻找模块图形中的片段，哪些是可以安全地被合并到单一模块中。
    usedExports: true, // production模式或者不设置usedExports，它默认就是true。usedExports的目的是标注出来哪些函数是没有被使用 unused，会结合Terser进行处理
    minimize: true, // 是否开启Terser,默认就是true，设置false后，不会压缩和转化
    minimizer: [
      new TerserPlugin({
        parallel: true, // 使用多进程并发运行以提高构建速度
        extractComments: false, // 去除打包生成的bundle.js.LICENSE.txt
        terserOptions: {
          // Terser 压缩配置
          parse: {
            // default {},如果希望指定其他解析选项，请传递一个对象。
          },
          compress: {
            // default {},传递false表示完全跳过压缩。传递一个对象来指定自定义压缩选项。
            arguments: true, // default: false,尽可能将参数[index]替换为函数参数名
            dead_code: true, // 删除死代码，默认就会删除，实际测试设置false也没用，还是会删除
            toplevel: false, // default: false,在顶级作用域中删除未引用的函数("funcs")和/或变量("vars"), 设置true表示同时删除未引用的函数和变量
            keep_classnames: false, // default: false,传递true以防止压缩器丢弃类名
            keep_fnames: false, // default: false,传递true以防止压缩器丢弃函数名
          },
          /**
           * mangle,默认值true,会将keep_classnames,keep_fnames,toplevel等等mangle options的所有选项设为true。
           * 传递false以跳过篡改名称，或者传递一个对象来指定篡改选项
           */
          mangle: true,
          toplevel: true, // default false,如果希望启用顶级变量和函数名修改,并删除未使用的变量和函数,则设置为true。
          keep_classnames: true, // default: undefined,传递true以防止丢弃或混淆类名。
          keep_fnames: true, // default: false,传递true以防止函数名被丢弃或混淆。
        },
      }),
      new CssMinimizerPlugin({
        parallel: true, // 使用多进程并发执行，提升构建速度。
      }), // css压缩，去除无用的空格等等
    ],
    // runtimeChunk: {
    //   name: 'runtime'
    // }
  },
  plugins: [
    new CleanWebpackPlugin({}), // 自动删除生成的dist文件夹
    new HtmlWebpackTagsPlugin({
      append: false,
      publicPath: '',
      links: ['https://cdn.jsdelivr.net/npm/iview@3.5.4/dist/styles/iview.css'],
      scripts: [
        { path: 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js' },
        { path: 'https://cdn.jsdelivr.net/npm/vuex@3.6.2/dist/vuex.min.js' },
        {
          path: 'https://cdn.jsdelivr.net/npm/vue-router@3.5.1/dist/vue-router.min.js',
        },
        { path: 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js' },
        { path: 'https://cdn.jsdelivr.net/npm/less@4.1.1/dist/less.min.js' },
        {
          path: 'https://cdn.jsdelivr.net/npm/echarts@5.1.1/dist/echarts.min.js',
        },
        { path: 'https://cdn.jsdelivr.net/npm/iview@3.5.4/dist/iview.min.js' },
      ],
    }),
    // new webpack.optimize.ModuleConcatenationPlugin(), //作用域提升。！！！在使用cdn时，axios和iview有问题，先不用！！！
    // new PurgeCssPlugin({  //css的Tree Shaking
    //   /**
    //    * 实际测试很多bug,比如html里面有ul这个元素，css里面的.ul{}，#ul{}，ul{}都会打包进去？？？
    //    * 在js文件里如果有给元素添加类，但是注释了，如：// divEle.className='test123'，但是这个.test123一样会打包进去，得手动删除这行代码才行！
    //    */
    //   paths: glob.sync(`${path.resolve(__dirname, '../src')}/**/*`, { nodir: true }),
    //   safelist: function () {
    //     return {
    //       standard: ["body", "html"]
    //     }
    //   }
    // }),
    new CompressionPlugin({
      // http压缩
      test: /\.(css|js)$/i,
      threshold: 10 * 1024, // 大于10k的文件才进行压缩
      minRatio: 0.8, // 只有压缩比这个比率更好的资产才会被处理(minRatio =压缩大小/原始大小),即压缩如果达不到0.8就不会进行压缩
      algorithm: 'gzip', // 压缩算法
      // exclude
      // include
    }),
    // new PreloadWebpackPlugin({ //预加载
    //   rel: "preload",
    //   include: "initial",
    //   fileBlacklist: [/\.map$/, /hot-update\.js$/],
    // }),
    // new PreloadWebpackPlugin({ //预获取
    //   rel: "prefetch",
    //   include: "asyncChunks",
    // }),
    new AutoUploadServer({
      // 自定义plugin，打包完成后将output.path的内容上传到服务器
      host: serverConfig.host,
      username: serverConfig.username,
      password: serverConfig.password,
      remotePath: serverConfig.remotePath,
    }),
  ],
};
