<template>
  <div class="noteList">
    <VnoteItem v-for="(item,index) in getAllDates" :data='item'></VnoteItem>
  </div>

</template>

<script>
import VnoteItem from './VnoteItem'

export default {
  name: 'note',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    VnoteItem
  },
  computed:{
    getAllDates(){
      return this.$store.state.allList;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
