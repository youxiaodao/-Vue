<template>
  <div id="app">
    
<!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/header">Go to Foo</router-link>
    <router-link to="/footer">Go to Bar</router-link>
<!-- 路由出口 -->
<!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>


  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {

    }
  },
}
</script>

<style>
</style>
