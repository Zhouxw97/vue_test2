import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
Vue.use(vueResource)
new Vue({
  el:'#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this //安装数据总线
  },
})
