const { defineConfig } = require('@vue/cli-service');
const { name } = require('./package.json')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  devServer: {
    https: true,
    port: 5173,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      filename: '[name].[chunkhash].js', // 配置打包后的文件名称
      library: `${name}-[name]`, // 配置导出的 UMD 包名称
      libraryTarget: 'umd', // 配置导出的 UMD 包格式,
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
});
