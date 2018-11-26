<template>
  <div class="wrap">
    <button @click="addCity">添加一个村</button>
    <div class="mark">
      <textarea class="editor" v-model="MarkedValue" name="" id="" cols="100" rows="10"></textarea>
      <div class="show" v-html="currentValue"></div>
    </div>
  </div>
</template>

<script>
import Marked from 'marked'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello World',
      stars:[
          "范冰冰","大黑牛","邓超"
      ],
      MarkedValue:""
    }

  },
  methods:{
    // 向父组件传值
    addCity(){
      // 触发自定义事件,还能加参数
      this.$emit('AddCity',"石景山")
    }
  },
  computed:{
    currentValue(){
      return Marked(this.MarkedValue)
    }
  }
}
</script>

<style>
.mark{
  width: 1210px;
  height: 602px;
  margin: 0 auto;
}
.editor,.show{
  float: left;
  width: 600px;
  height: 600px;
  border: 1px solid black
}
</style>

