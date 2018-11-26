<template>
  <header class="header">
    <div class="nav">
      <div class="logo">
        <img src="" alt="">
      </div>
      <div class="info">
        <button>注册</button>
        <button>登陆</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello World',
    }
  }
}
</script>

<style>
.header{
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 #c9c9c9;
}
.header .nav{
  width: 980px;
  height: 40px;
  margin: 0 auto;
}

</style>
