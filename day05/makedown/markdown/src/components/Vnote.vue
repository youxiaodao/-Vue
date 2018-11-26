<template>
  <div class="container">
    <div class="row">
      <!-- 笔记列表 -->
      <div class="col-md-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">我的笔记列表</h3>
          </div>
          <div class="panel-body">
            <VnoteShow></VnoteShow>
          </div>
        </div>

      </div>
      <!-- markdown编辑器 -->
      <div class="col-md-9">
        <div class="panel panel-default">
          <div class="panel-heading">
          </div>
          <div class="panel-body">
            <vmark></vmark>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Vmark from './Vmark'
import VnoteShow from './VnoteShow.vue'

export default {
  name: 'note',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      nodeList:[
        {content:'你说啥呢',id:1},
        {content:'说不知道',id:2},

      ]
    }
  },
  components:{
    Vmark,  
    VnoteShow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
