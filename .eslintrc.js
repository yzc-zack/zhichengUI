/*
 * @Author: zhicheng.yao zhicheng.yao@enesource.com
 * @Date: 2022-11-08 14:57:31
 * @LastEditors: zhicheng.yao zhicheng.yao@enesource.com
 * @LastEditTime: 2022-11-08 15:15:22
 * @FilePath: \npmdemo\zhicheng-ui\.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-unused-vars": 'off'
  }
}
