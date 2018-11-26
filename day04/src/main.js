import Vue from 'vue'
import App from './App.vue'
// 如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能：
import VueRouter from 'vue-router'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App)
})
