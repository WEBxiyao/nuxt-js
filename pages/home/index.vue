<template>
    <div>
        <h1>我是home页面</h1>
        <ul>
         <li v-for="(item,index) in list" :key="index">
         <nuxt-link :to="'/detail/'+item.id">{{item.title}}</nuxt-link>
         </li>
        </ul>
       <h1>我是vuex里面的数据：{{$store.state.count}}--{{$store.state.name}}</h1>
      <button @click="$store.commit('add')">加一</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[
                {
                    title:'我是第1个标题',
                    id:1,
                },
                 {
                    title:'我是第2个标题',
                    id:2,
                },
                 {
                    title:'我是第3个标题',
                    id:3,
                },
            ]
        }
    },
    mounted(){
        this.$axios.get('/api/index_category/data').then(res=>{
            console.log(res)
        })
        console.log(this.$store,"-----")
    }
}
</script>