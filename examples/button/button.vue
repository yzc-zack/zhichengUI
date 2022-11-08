<!--
 * @Author: zhicheng.yao zhicheng.yao@enesource.com
 * @Date: 2022-11-08 15:06:28
 * @LastEditors: zhicheng.yao zhicheng.yao@enesource.com
 * @LastEditTime: 2022-11-08 15:19:20
 * @FilePath: \npmdemo\zhicheng-ui\examples\button\button.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <button class="zhicheng-button">
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'ZcButton',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.zhicheng-button{
    width: 200px;
    height: 34px;
    background-color: aqua;
}
</style>