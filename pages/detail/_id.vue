import axios from '@nuxtjs/axios';
<template>
    <div>
      <h3>我是详情页面来验证传递的参数</h3>
      <p>我是传过来的参数：--{{$route.params.id}}</p>
    </div>
</template>
<script>
// import axios from 'axios'
export default {
   mounted(){
     this.$H('/api/index_category/data').then(res=>{
      console.log(res,"ppppp")
    })
   }
}
</script>