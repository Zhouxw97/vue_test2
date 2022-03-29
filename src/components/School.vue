<template>
<!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        
    </div>
</template>

<script>
// 组件交互相关的代码
    export default {
        name:'School',
        data() {
            return {
                name:'尚硅谷',
                address:'北京'
            }
        },
        mounted(){
            this.$bus.$on('hello',(data)=>{
                console.log('我是school组件',data);
            })
        }
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: orange;
    }
</style>