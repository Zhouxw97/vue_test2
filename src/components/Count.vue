<template>
	<div>
		<h1>当前求和值:{{$store.state.sum}}</h1>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
	import {mapState,mapGetters} from 'vuex'
    export default {
        name:'Count',
        data() {
			return {
				n:1
			}
		},
		components:{
			...mapState({he:'sum',xuexiao:'school',xueke:'subject'})
		},
		methods: {
			increment(){
				this.$store.commit('JIA',this.n)
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			},
			incrementOdd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			}
		},
		mounted() {
			const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
			console.log(x);
		},
    }
</script>
	
<style>
	button{
		margin-left:5px
	}
</style>