<template>
  <div id="app">
    
    <Vheader></Vheader>
    <!-- 子组件向父组件传值 -->
    <!-- 1、自定义事件 -->
    <Vcontent v-on:AddCity="AddCityHander"></Vcontent>
    <!-- 父子组件传值 -->
    <!-- 1、绑定自定义属性 -->
    <!-- 2、在footers中验证类型 -->
    <Vfooter v-bind:starsArray="stars"></Vfooter>

  </div>
</template>

<script>
import Vheader from './components/Vheader.vue'
import Vfooter from './components/Vfooter.vue'
import Vcontent from './components/Vcontent.vue'
// 

export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello World',
      stars:[
          "范冰冰","大黑牛","邓超"
      ]
    }
  },
  methods:{
    AddCityHander(str){
      console.log(str)
      this.stars.push(str)
    }
  },
  components:{
    Vheader,
    Vcontent,
    Vfooter,
  }
}
</script>

<style>
</style>
