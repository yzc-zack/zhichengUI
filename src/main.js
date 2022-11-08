/*
 * @Author: zhicheng.yao zhicheng.yao@enesource.com
 * @Date: 2022-11-08 14:57:31
 * @LastEditors: zhicheng.yao zhicheng.yao@enesource.com
 * @LastEditTime: 2022-11-08 15:13:00
 * @FilePath: \npmdemo\zhicheng-ui\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import examples from '../examples'

Vue.config.productionTip = false
Vue.use(examples)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
