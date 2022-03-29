<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button @click="showDOM">点我输出上方DOM元素</button>
      <School/>
      <Student/>

  </div>
</template>

<script>
    import School from './components/School'
    import Student from './components/Student'

    export default {

        name:'App',
        components:{
            School,
            Student
        },
        data(){
            return {
                msg:'欢迎学习Vue!'
            }
        },
        methods:{
            showDOM(){
                console.log(this.$refs.title)
            }
        }
    }
</script>

<style>

</style>