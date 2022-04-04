import Vue from 'vue';
import Vuex from 'vuex';
//应用Vuex插件
Vue.use(Vuex)

//actions用于响应组件中的动作
const actions = {
    jiaOdd(context,value){
        console.log(context);
        if(context.state.sum % 2) context.commit('JIA',value)
    },
    jiaWait(context,value){
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500);
    }
}

//mutations用于操作数据
const mutations = {
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    },
    ADD_PERSON(state,value){
        console.log(value);
        state.personList.unshift(value)
    }
}

//存储数据
const state = {
    sum:0,
    school:'山硅谷',
    subject:'前端',
    personList:[
        {id:'001',name:'张三'}
    ]
}

const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
