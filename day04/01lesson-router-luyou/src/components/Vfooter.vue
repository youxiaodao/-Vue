<template>
    <div>haha</div>
</template>

<script>
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
  // 父子组件传值
  // 先验证类型
  props:{
    starsArray:Array
  }
}
</script>

<style>
</style>
