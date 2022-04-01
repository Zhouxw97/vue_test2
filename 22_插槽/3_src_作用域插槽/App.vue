<template>
    <div class="container">
        <Category title="美食">
            <template scope="zhi">
                <ul>
                    <li v-for="(item,index) in zhi.games" :key="index">{{item}}</li>
                </ul>
            </template>
        </Category>
        <Category title="游戏">
            <template scope="{games}">
                <ol>
                    <li v-for="(item,index) in games" :key="index">{{item}}</li>
                </ol>
            </template>
        </Category>
        <Category title="电影">
            <template slot-scope="{games}">
                <h4 v-for="(item,index) in games" :key="index">{{item}}</h4>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category'
   

    export default {
        name:'App',
        components:{Category},
    }
</script>

<style>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
</style>

