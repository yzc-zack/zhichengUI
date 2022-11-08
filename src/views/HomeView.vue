<!--
 * @Author: zhicheng.yao zhicheng.yao@enesource.com
 * @Date: 2022-11-08 14:57:31
 * @LastEditors: zhicheng.yao zhicheng.yao@enesource.com
 * @LastEditTime: 2022-11-08 15:20:32
 * @FilePath: \npmdemo\zhicheng-ui\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home">
    <ZcButton>1245</ZcButton>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
