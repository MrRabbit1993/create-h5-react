module.exports = {
    env: {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    extends: ['react-app','react-app/jest','eslint:recommended'],
    globals: {
        page: true,
        REACT_APP_ENV: true
    },
    plugins: [
        'react','@typescript-eslint','prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        requireConfigFile: false, // 是否需要 babel 配置文件
        sourceType: 'module', // script 或者 module
        allowImportExportEverywhere: false, // 设置为 true，import 和 export 声明 可以出现在文件的任务位置，否则只能出现在顶部
        ecmaVersion: 2020,
        ecmaFeatures: {
            globalReturn: false // 设置为 true，当 sourceType 为 script 时，允许全局 return
        },
        babelOptions: {
            presets: ['@babel/preset-react']
        }
    },
    rules: {
        'for-direction': 'error', // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
        'no-await-in-loop': 'off', // 禁止将 await 写在循环里
        'no-compare-neg-zero': 'error', // 禁止与负零进行比较
        'no-empty-character-class': 'error', // 禁止在正则表达式中使用空的字符集 []
        'no-extra-parens': ['error', 'functions'], // 禁止函数表达式中出现多余的括号
        'no-extra-semi': 'error', // 禁止出现多余的分号
        'no-func-assign': 'error', // 禁止将一个函数声明重新赋值
        'no-inner-declarations': ['error', 'both'], // 禁止在 if 代码块内出现函数声明
        'no-regex-spaces': 'error', // 禁止在正则表达式中出现连续的空格
        'no-sparse-arrays': 'error', // 禁止在数组中出现连续的逗号
        'no-unreachable': 'error', // 禁止在 return, throw, break 或 continue 之后还有代码
        'no-template-curly-in-string': 'error', // 禁止出现难以理解的多行表达式
        'use-isnan': 'error', // 必须使用 isNaN(foo)
        // 'complexity': ['error',{'max': 20}], // 禁止函数的循环复杂度超过 20
        'dot-location': ['error', 'property'], // 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
        'no-alert': 'error', //禁止使用alert
        'no-empty-function': [
            'error',
            {
                'allow': [
                    'functions',
                    'arrowFunctions'
                ]
            }
        ], // 不允许有空函数，除非是将一个空函数设置为某个项的默认值
        'no-extend-native': 'error', // 禁止修改原生对象
        'no-global-assign': 'error', // 禁止对全局变量赋值
        'no-return-assign': [
            'error',
            'always'
        ], // 禁止在 return 语句里赋值
        'keyword-spacing': [
            'error',
            {
                'before': true,
                'after': true
            }
        ], // 关键字前后必须有空格

        'key-spacing': [0, {
            'beforeColon': false,
            'afterColon': true
        }], //对象字面量中冒号的前后空格
        'max-depth': [
            'error',
            5
        ], // 代码块嵌套的深度禁止超过 5 层
        'max-params': [
            'error',
            6
        ], // 函数的参数禁止超过 6 个
        'newline-per-chained-call': 'error', //链式调用必须换行
        'no-multiple-empty-lines': ['error', {
            'max': 3,
            'maxEOF': 1,
            'maxBOF': 1
        }], // 禁止出现超过三行的连续空行
        'no-whitespace-before-property': 'error', // 禁止属性前有空格
        'nonblock-statement-body-position': [
            'error',
            'beside',
            {
                'overrides': {
                    'while': 'below'
                }
            }
        ], // 禁止 if 后面不加大括号而写两行代码
        'object-curly-newline': [
            'error',
            {
                'multiline': true,
                'consistent': true
            }
        ], // 大括号内的首尾必须有换行
        'object-property-newline': 'error', // 对象字面量内的属性每行必须只有一个
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
                'ignoredNodes': ['ConditionalExpression']
            }
        ],
        'quotes': [2, 'single'], // 单引号
        // 'no-console': ['error', { allow: ['info', 'error'] }],//不允许console,除了console.info和console.error
        'no-debugger': 0, // 不禁用debugger
        'no-var': 0, // 对var警告
        'semi': 0, // 不强制使用分号
        'no-irregular-whitespace': 0, // 不规则的空白不允许
        'no-trailing-spaces': 2, // 一行结束后面有空格就发出警告
        'eol-last': 0, // 文件以单一的换行符结束
        'no-unused-vars': [2, {
            'vars': 'all',
            'args': 'after-used'
        }], // 不能有声明后未被使用的变量或参数
        'no-underscore-dangle': 0, // 标识符不能以_开头或结尾
        'no-lone-blocks': 0, // 禁止不必要的嵌套块
        'no-class-assign': 2, // 禁止给类赋值
        'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
        'no-const-assign': 2, // 禁止修改const声明的变量
        'no-delete-var': 2, // 不能对var声明的变量使用delete操作符
        'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复
        'no-duplicate-case': 2, // switch中的case标签不能重复
        'no-useless-catch': 0, //允许try catch
        'no-dupe-args': 2, // 函数参数不能重复
        'no-empty': 2, // 块语句中的内容不能为空
        'no-invalid-this': 0, // 禁止无效的this，只能用在构造器，类，对象字面量
        'no-redeclare': 2, // 禁止重复声明变量
        'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
        'no-this-before-super': 0, // 在调用super()之前不能使用this或super
        'no-undef': 2, // 不能有未定义的变量
        'no-use-before-define': 2, // 未定义前不能使用
        'camelcase': 0, // 强制驼峰法命名
        'jsx-quotes': [2, 'prefer-double'], // 强制在JSX属性（jsx-quotes）中一致使用双引号
        'react/display-name': 0, // 防止在React组件定义中丢失displayName
        'react/forbid-prop-types': [2, {
            'forbid': ['any']
        }], // 禁止某些propTypes
        'react/jsx-boolean-value': 2, // 在JSX中强制布尔属性符号
        // 'react/jsx-closing-bracket-location': 1, // 在JSX中验证右括号位置
        'react/jsx-curly-spacing': [2, {
            'when': 'never',
            'children': true
        }], // 在JSX属性和表达式中加强或禁止大括号内的空格。
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4], // 验证JSX中的props缩进
        'react/jsx-key': 2, // 在数组或迭代器中验证JSX具有key属性
        'react/jsx-max-props-per-line': [1, {
            'maximum': 3
        }], // 限制JSX中单行上的props的最大数量
        'react/jsx-no-bind': 0, // JSX中不允许使用箭头函数和bind
        'react/jsx-no-duplicate-props': 2, // 防止在JSX中重复的props
        'react/jsx-no-literals': 0, // 防止使用未包装的JSX字符串
        'react/jsx-no-undef': 1, // 在JSX中禁止未声明的变量
        'react/jsx-pascal-case': 0, // 为用户定义的JSX组件强制使用PascalCase
        'react/jsx-sort-props': 2, // 强化props按字母排序
        'react/jsx-uses-react': 1, // 防止反应被错误地标记为未使用
        'react/jsx-uses-vars': 2, // 防止在JSX中使用的变量被错误地标记为未使用
        'react/no-danger': 0, // 防止使用危险的JSX属性
        'react/no-did-mount-set-state': 0, // 防止在componentDidMount中使用setState
        'react/no-did-update-set-state': 1, // 防止在componentDidUpdate中使用setState
        'react/no-direct-mutation-state': 2, // 防止this.state的直接变异
        // 'react/no-multi-comp': 2, // 防止每个文件有多个组件定义
        'react/no-set-state': 0, // 防止使用setState
        'react/no-unknown-property': 2, // 防止使用未知的DOM属性
        'react/prefer-es6-class': 2, // 为React组件强制执行ES5或ES6类
        'react/prop-types': 0, // 防止在React组件定义中丢失props验证
        'react/react-in-jsx-scope': 2, // 使用JSX时防止丢失React
        'react/self-closing-comp': 0, // 防止没有children的组件的额外结束标签
        'react/sort-comp': 2, // 强制组件方法顺序
        'no-extra-boolean-cast': 0, // 禁止不必要的bool转换
        'react/no-array-index-key': 0, // 防止在数组中遍历中使用数组key做索引
        'react/no-deprecated': 1, // 不使用弃用的方法
        'react/jsx-equals-spacing': 2, // 在JSX属性中强制或禁止等号周围的空格
        'comma-dangle': 2, // 对象字面量项尾不能有逗号
        'no-mixed-spaces-and-tabs': 0, // 禁止混用tab和空格
        'prefer-arrow-callback': 0, // 比较喜欢箭头回调
        'arrow-parens': 0, // 箭头函数用小括号括起来
        'arrow-spacing': 0, //= >的前/后括号
        'react/no-unescaped-entities': 'error' // 禁止出现 HTML 中的属性，如 class
    }
}