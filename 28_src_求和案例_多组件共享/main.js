import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App.vue'
import store from './store'


Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
Vue.use(vueResource)

new Vue({
  el:'#app',
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this //安装数据总线
  },
})
