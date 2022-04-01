<template>
  <section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
			<button @click="searchUsers">Search</button>
		</div>
	</section>
</template>

<script>
    import axios from 'axios'

    export default {
        name:'Search',
        data() {
            return {
                keyWord:''
            }
        },
        methods: {
            searchUsers(){
                this.$bus.$emit('updateListData',{users:[],isFirst:false,isLoading:true})
                axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    response => {
                        console.log('请求成功了',response.data);
                        this.$bus.$emit('updateListData',{users:response.data.items,isLoading:false})
                    },
                    error => {
                        this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
                    }
                )
            }
        },
    }
</script>

