<template>
<!-- 组件的结构 -->
    <div class="demo">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">把学生名字给school</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
// 组件交互相关的代码
    export default {
        name:'Student',
        data() {
            return {
                name:'张山',
                age:'18'
            }
        },
        methods:{
            sendStudentName(){
                pubsub.publish('hello',666)
            }
        }
    }
</script>

<style>
    
</style>