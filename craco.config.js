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
        'presets': [
            [
                '@babel/preset-env',
                {
                    'targets': {
                        'chrome': '49',
                        'ios': '10'
                    }
                }
            ]
        ],
        plugins: [
            ['import', {
                'libraryName': 'antd-mobile',
                'libraryDirectory': 'es/components',
                'style': false
            }]
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
                        // modifyVars: {
                        // '@primary-color': '#1DA57A'
                        // },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ],
    style:{
        postcss:{
            mode:'extends',
            loaderOptions:{
                postcssOptions:{
                    ident:'postcss',
                    plugins:[
                        // ['postcss-pxtorem',{ rootValue:375/10 }] //配置rem
                        ['postcss-px-to-viewport',{
                            unitToConvert:'px',//需要转换的单位，默认为"px"
                            viewportWidth: 375, //设计稿的视口宽度
                            unitPrecision: 5, //单位转换后保留的小数位数
                            propList: ['*'], //要进行转换的属性列表,*表示匹配所有,!表示不转换
                            viewportUnit: 'vw', //转换后的视口单位(指定需要转换成的视窗单位,建议使用vw)
                            fontViewportUnit: 'vw', //转换后字体使用的视口单位
                            selectorBlackList: [], //不进行转换的css选择器，继续使用原有单位
                            minPixelValue: 1, //设置最小的转换数值 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值。
                            mediaQuery: false, //设置媒体查询里的单位是否需要转换单位
                            replace: true, //是否直接更换属性值，而不添加备用属性
                            exclude: [/node_modules/], //忽略某些文件夹下的文件
                            landscape: false
                        },'autoprefixer']
                    ]
                }
            }
        }
    }
}
