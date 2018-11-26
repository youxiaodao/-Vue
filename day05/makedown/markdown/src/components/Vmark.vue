<template>
  <div class="wrap">
      请输入文章标题: <input type="text" name="" id="" v-model="titleHander">
      <button class="btn btn-success" @click="addOneNote">提交</button>
    <div class="mark">
      <textarea class="editor" v-model="markdownHander" id="" cols="100" rows="10"></textarea>
      <div class="show" v-html="currentValue" ref="content"></div>
    </div>
  </div>
</template>

<script>
import Marked from 'marked'
import $ from 'jquery'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods:{
      addOneNote(){
          var json={
              title:this.titleHander,
              markdown:this.markdownHander,
              content:this.$refs.content.innerText,
          }

        //   var _this =this
        //   $.ajax({
        //       url:'http://127.0.0.1:9527/api/content/create/',
        //       method:'post',
        //       data:json,
        //       success:function(data){
        //           _this.$store.state.allList = data

        //       },
        //       error:function(err){
        //           console.log(err)
                
        //       }
        //   })
        
        // 触发mutations中的方法，这个方法有局限性，只限于同步操作
        // this.$store.commit('addOneDdata',json)
        // action的异步操作
        this.$store.dispatch('addOneData',json)



      }
  },
  computed:{
      titleHander:{
          set:function(newValue){
              this.$store.state.note.title = newValue

          },
          get:function(){
              return this.$store.state.note.title;
          }
      },
      markdownHander:{
          set:function(newValue){
              this.$store.state.note.markdown = newValue

          },
          get:function(){
              return this.$store.state.note.markdown;
          }
      },
      
    currentValue(){
      return Marked(this.markdownHander)
    }
  }
}
</script>

<style>
.mark{
  width: 810px;
  height: 602px;
  margin: 0 auto;
}
.editor,.show{
  float: left;
  width: 400px;
  height: 600px;
  border: 1px solid black
}
</style>