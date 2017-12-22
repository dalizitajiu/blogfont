<template>
    <el-form v-show="isShow" ref="form" class="mform" :model="form" label-position="left" label-width="80px">
        <el-form-item>
            <el-button type="danger" round class="close" size="mini" @click="closeShow">关闭</el-button>
        </el-form-item>       
        <el-form-item label="邮箱">
            <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="form.pwd"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click.prevent.stop="onSubmit">登陆</el-button>
        </el-form-item>
    </el-form>
    
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        pwd: ""
      },
      isShow: false
    };
  },
  created: function() {
    
  },
  methods: {
    onSubmit: function() {
      console.log("onSumbit 登陆");
      this.isShow = false;
      // this.$parent.$data.isLogin = true;
      // return;
      if (!this.checkArgs()) {
        this.$message({
          type: "info",
          message: "参数错误"
        });
        return;
      }
      let data = { form: this.form };
      this.$http.post(`${baseUrl}/user/login`, data, (err, resp, body) => {
        console.log(body);
        let data = JSON.parse(body);
        switch (data.errno) {
          case 0:
            this.$message("登陆成功");
            this.isShow = false;
            this.$parent.$data.isLogin = true;
            break;
          case 1001:
            this.$message("参数错误");
            break;
          case 1002:
            this.$message("内部错误");
            break;
          case 1003:
            this.$message("账号或者密码错误");
            break;
          default:
            break;
        }
      });
    },
    closeShow() {
      this.isShow = false;
    },
    checkArgs() {
      const email_reg = new RegExp(
        /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/i
      );
      if (email_reg.test(this.form.email) && this.form.pwd.length > 6) {
        return true;
      }
      return false;
    }
  }
};
</script>
<style scoped>
.mform {
  position: absolute;
  left: 800px;
  top: 400px;
}
.close {
  position: relative;
  float: right;
  padding: 4px;
}
</style>
