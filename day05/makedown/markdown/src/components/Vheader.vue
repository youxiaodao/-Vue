<template>
  <div class="main">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
              <!-- 修改a标签为router-lnik -->
          <router-link class="navbar-brand" to="#">Brand</router-link>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li v-for="(item,index) in routers" :class="{active:index==currentIndex}" @click="activeHander(index)">
              <!-- 修改a标签为router-lnik -->
              <router-link :to="item.url">{{item.title}}</router-link>
            </li>
          </ul>
          <form class="navbar-form navar-left">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      currentIndex:0,
      routers:[
        {url:'/',title:'我的首页'},
        {url:'/note',title:'我的笔记'},
      ]
    }
  },
  methods:{
    activeHander(index){
      this.currentIndex = index

    }
  },
  created(){
    // 路由切换保持状态
    for(var i=0;i<this.routers.length;i++){
      // 获取当前URL中的path=====>this.$route.path
      if(this.routers[i].url==this.$route.path){
        this.currentIndex = i;
        return;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
