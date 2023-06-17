const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 自动打开浏览器
    open: true,
    port: 70,
    proxy: {
      // // detail: https://cli.vuejs.org/config/#devserver-proxy
      '/api': {
        target: `https://10.44.122.225:8080`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
