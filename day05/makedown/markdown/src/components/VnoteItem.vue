<template>
  <div class="noteItem">
    <li>
      <h2>{{data.title}}</h2>
      <p>{{data.content}}</p>
      <Vbtn typed='success'>删除</Vbtn>
    </li>
  </div>

</template>

<script>
import Vbtn from './VnoteBtn'
export default {
  name: 'note',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  prorps:{
    data:Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
