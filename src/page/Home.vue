<template>
  <div>
  <!-- <my-nav></my-nav> -->
      <el-container>
    <el-aside width="200px">
      <my-side></my-side>
    </el-aside>
    <el-container>
    <el-header>
      <my-nav></my-nav>
    </el-header>
    <el-main class="main">
      <my-show-article></my-show-article>
    </el-main>
    <el-footer>
      <my-foot></my-foot>
    </el-footer>
    </el-container>   
  </el-container>
  </div>
</template>
<script>
import MyNav from '../components/MyNav'
import MyFoot from '../components/MyFoot'
import MySide from '../components/MySide'
import MyShowArticle from '../components/MyShowArticle'
export default {
  components:{MyNav,MyFoot,MySide,MyShowArticle}
}
</script>
<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    min-height: 900px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
