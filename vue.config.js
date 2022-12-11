const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './'
})

// module.exports = {
//   publicPath: './',
//   devServer: {
//       proxy: {
//           '/api': {
//               target: 'http://localhost:3000',
//               changeOrigin: true,
//               ws: true,
//               pathRewrite: {
//                 '^/api': ''
//               }
//           }
//       }
//   }
// }
