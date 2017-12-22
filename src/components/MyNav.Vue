<template>
<div>
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item v-for="(item,index) in title_list" :key="index" v-bind:index="index+1+''">
    {{item.title}}
  </el-menu-item>
  <span class="spanlogin" v-show="!isLogin" @click="handleLogin">登陆</span>
  <router-link class="spanlogin" v-show="!isLogin" to="/register">注册</router-link>
  <router-link class="spanlogin" v-show="isLogin" to="/admin"><span class="spanlogin" >李小孟</span></router-link>
  
  <router-link class="spanlogin" v-show="isLogin" to="/newarticle">新文章</router-link>
  </el-menu>
  <my-login ref="login"></my-login>
  </div>
  

</template>
<script>
import MyLogin from "./MyLogin";
import lib from '../lib/util.js'
export default {
  data() {
    return {
      activeIndex2: "1",
      title_list: [
        { title: "首页", link: "/", label: "index" },
        { title: "HTML", link: "/html", label: "html" },
        { title: "PYTHON", link: "/python", label: "python" },
        { title: "MYSQL", link: "/mysql", label: "mysql" }
      ],
      isLogin: false
    };
  },
  mounted:function(){
    if(lib.checkHasLogin()){
      console.log("登陆了")
      this.isLogin=true
    }else{
      console.log("没登陆")
      this.isLogin=false
    }
  },
  components: { MyLogin },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, "||", keyPath);
      eventBus.$emit("changeSide", this.title_list[key - 1]);
    },
    handleLogin() {
      console.log("通知登陆组件显示");
      this.$refs.login.isShow=true;
    }
  }
};
</script>
<style scoped>
.spanlogin{
  color:white;
}
</style>
