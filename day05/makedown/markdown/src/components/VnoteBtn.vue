<template>
    <button class="btn" :class="currentBtn">
        <!-- 插槽 -->
        <slot>按钮</slot>
    </button>
</template>

<script>
export default {
    name:'btn',
    data(){
        return
    },
    props:{
        typed:String
    },
    computer:{
        currentBtn(){
            return {
                "brn-success":this.typed == 'success'? true:false,
                "brn-info":this.typed == 'info'? true:false,
            }
        }
    }
}
</script>
<style scoped>

</style>

