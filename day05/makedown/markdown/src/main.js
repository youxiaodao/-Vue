// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'

import $ from 'jquery'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    // 这里面的状态跟每个组件的数据属性有关系
    alllist:[],
    note:{
      title:'',
      content:'',
      markdown:''
    }
  },
  mutations:{
    getAllData(state){

      $.ajax({
        url:'http://127.0.0.1:9527/api/comments/',
        method:'get',
        success:function(data){
          //发送ajax拿到了后端的数据
          state.allList = data
        }
      })

    },
    ADDONEDATA(state,newData){
      state.allList = newData
    }
  },
  
  actions:{
    addOneDdata(content,json){
      $.ajax({
          url:'http://127.0.0.1:9527/api/content/create/',
          method:'post',
          data:json,
          success:function(data){
              state.allList = data
          content.commit('ADDONEDATA',data)
          },
          error:function(err){
              console.log(err)
          }
      })

    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Store,
  components: { App },
  template: '<App/>'
})
