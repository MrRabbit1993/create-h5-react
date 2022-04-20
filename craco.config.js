const CracoLessPlugin = require('craco-less')
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  },
  devServer: {
    proxy: {}
  },
  babel: {
    plugins: [
      ["import", { "libraryName": "antd-mobile", "libraryDirectory": "es/components", "style": false}]
      // ['import', { libraryName: 'antd', style: true }] //第一个 style 为 true ,需要配置 craco-less一起才能生效
      // ['import', { libraryName: 'antd', libraryDirectory: 'es', style: "css" }],//第二种 style 为css ,不需要 craco-less
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // '@primary-color': '#1DA57A'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  style:{
    
  }
}
