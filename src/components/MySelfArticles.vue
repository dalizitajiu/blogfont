<template>
  <el-row>
      <el-col :span="8">nihao</el-col>
      <el-col :span="16">
          <router-link v-for="(item,index) in articlelist" :key="index" :to="'/update_article/'+item.id">
            {{item.title}}--{{item.createtime}}
          </router-link>
          <!-- <span v-for="(item,index) in articlelist" :key="index" v-bind:index="item.id">{{item.title}}----{{item.createtime}} @click="handleClick"</span> -->
      </el-col>
  </el-row>
</template>
<script>
import lib from '../lib/util'
export default {
  data(){
      return {
          articlelist:[{title:"ok",createtime:"2017 12 21"},{title:"ok",createtime:"2017 12 21"},{title:"ok",createtime:"2017 12 21"}]
      }
  },
  created:function(){
    if(!lib.checkHasLogin()){
        window.location=window.location.origin
    }
  },
  methods:{
      getArticleList(){
          let url=`${baseUrl}/article/getones`
          this.$http.get(url,(err,resp,body)=>{
              let res=JSON.parse(body)
              this.articlelist=res.data
          })
      },
  }
}
</script>
<style scoped>

</style>
