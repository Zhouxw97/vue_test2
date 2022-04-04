<template>
	<div>
		<h1>当前求和值:{{$store.state.sum}}</h1>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
		<h3 style="color:red">Person组件的总人数是：{{personList.length}}</h3>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapMutations} from 'vuex'
    export default {
        name:'Count',
        data() {
			return {
				n:1
			}
		},
		computed:{
			...mapState({he:'sum',xuexiao:'school',xueke:'subject',personList:'personList'})
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
			},
			...mapMutations({increment:'JIA',decrement:'JIAN'})
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