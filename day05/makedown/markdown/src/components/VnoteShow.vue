<template>
  <div class="note">
    <VnoteList></VnoteList>
  </div>

</template>

<script>
import VnoteList from  './VnoteList'
export default {
  name: 'note',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
