<template>
<!-- 3、引入bootstrap，直接在script中引入 -->
<!-- 4、引入vheader --注册在components中-->
  <div id="app">
    <!-- 导航条 -->
    <!-- 5、在导航条组件中把a标签改为router-link -->
    <Vheader></Vheader>
    <!--3、路由出口标签，也可以是双闭合标签  -->
    <!-- 出口可以在任何地方 -->
    <router-view/> 
  </div>
</template>

<script>
// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 引入导航条
import Vheader from './components/Vheader'
// import $ from 'jquery'

export default {
  name: 'App',
  data(){
    return{
      // 这里面只放一些0，1,或者不常变，不放在数据库的值
    }
  },
  // 注册组件
  components:{
    Vheader
  },
  mounted(){
    // 除了{created（）（初始化操作的方法）}又一个生命周期的方法，
    // dom元素加载完之后运行
    // 从后端取值---->store.state.数据变量
    // var _this = this;

    // $.ajax({
      // url:'http://127.0.0.1:9527/api/comments/',
      // method:'get',
      // success:function(data){
        //发送ajax拿到了后端的数据
        // _this.$store.state.allList = data
      // }

      // 使用mutations,是代码简洁，优雅
    this.$store.commit('getAllDates')
    }

  }

</script>

<style>

</style>
