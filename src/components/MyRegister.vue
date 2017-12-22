<template>
    
        <el-form ref="form" class="mform" :model="form" label-position="left" label-width="80px">
            <div class="outer">
            <el-form-item label="邮箱">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.pwd"></el-input>
            </el-form-item>
            <el-form-item label="再次确认">
                <el-input v-model="confirmpwd"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click.prevent.stop="onSubmit">注册</el-button>
            </el-form-item>
            </div>
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
      confirmpwd: ""
    };
  },
  methods: {
    onSubmit() {
      let data = { form: this.form };
      this.$http.post(`${baseUrl}/user/register`, data, (err, resp, body) => {
        let data = JSON.parse(body);
        switch (data.errno) {
          case 0:
            this.$alert("确认邮件已经发送", "Notes", {
              confirmButtonText: "确认",
              callback: action => {
                this.$message({
                  type: "info",
                  message: `action:${action}`
                });
              }
            });
            break;
          case 1001:
            this.$alert("账号或者密码错误", "Notes", {
              confirmButtonText: "确认",
              callback: action => {
                this.$message({
                  type: "info",
                  message: `action:${action}`
                });
              }
            });
            break;
          case 1002:
            this.$alert("该邮箱已经被使用", "Notes", {
              confirmButtonText: "确认",
              callback: action => {
                this.$message({
                  type: "info",
                  message: `action:${action}`
                });
              }
            });
            break;
          default:
            break;
        }
      });
    }
  }
};
</script>
<style scoped>
.mform {
  position: absolute;
  left: 800px;
  top: 400px;
  width:300px;
}
.outer{
    border: 1px;
}
</style>
