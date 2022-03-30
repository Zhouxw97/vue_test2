<template>
<!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
// 组件交互相关的代码
    export default {
        name:'School',
        data() {
            return {
                name:'尚硅谷',
                address:'北京'
            }
        },
        methods:{
            demo(msgName,data){
                console.log(this);
                console.log('有人发布了hello消息',msgName,data);
            }
        },
        mounted(){
            this.pubId  = pubsub.subscribe('hello',this.demo)
        },
        beforeDestroy() {
            pubsub.unsubscribe(this.pubId)
        },
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: orange;
    }
</style>