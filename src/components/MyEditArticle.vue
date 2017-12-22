<template>
    <div class="outer">
        <el-form ref="form" class="mform" :model="form" label-position="left" label-width="80px">
            <el-col :span="8" :offset="6">
                <el-form-item label="文章名称">
                    <el-input v-model="form.r_title"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="3" :offset="1">
                <el-select v-model="form.type" placeholder="文章类型">
                    <el-option label="PYTHON" value="python"></el-option>
                    <el-option label="MYSQL" value="mysql"></el-option>
                    <el-option label="HTML" value="html"></el-option>
                    <el-option label="MYSQL" value="mysql"></el-option>
                </el-select>
            </el-col>           
        </el-form>
        <el-col :span="12" :offset="6">
            <vue-editor v-model="form.r_content"></vue-editor>
        </el-col>

        <el-col :span="6" :offset="9" class="commit">
            <el-button type="primary" @click.prevent.stop="onSubmit">提交文章</el-button>
        </el-col>       
    </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
import lib from "../lib/util";
export default {
  data() {
    return {
      form: {
        type: "",
        r_title: "",
        r_content: "<h1>Default r_content</h1>",
        r_articleid: 0,
        r_articletoken: ""
      },

      isUpdate: false
    };
  },
  created() {
    console.log("created!!!!!!!!!!!!!!!!!");
    if (!lib.checkHasLogin()) {
      window.location = window.location.origin;
      return;
    }
    if (this.$route.params.id != undefined) {
      const id = this.$route.params.id;
      this.isUpdate = true;
      this.$http.get(`${baseUrl}/article/${id}`, (err, resp, body) => {
        let res = JSON.parse(body);
        if (res.errno == 0) {
          this.form.r_title = res.data.title;
          this.form.r_content = res.data.r_content;
          this.form.type = res.data.type;
        }
      });
      this.$http.get(
        `${baseUrl}/article/gettoken?articleid=${id}`,
        (err, resp, body) => {
          let res = JSON.parse(body);
          if (res.errno == 0) {
            this.form.r_articletoken = res.data;
          }
        }
      );
    }
  },
  components: { VueEditor },
  methods: {
    onSubmit() {
      if (!this.isUpdate) {
        console.log("增加文章");
        let data = { form: this.form };
        this.$http.post(
          `${baseUrl}/article/addnew`,
          data,
          (err, resp, body) => {
            console.log(body);
          }
        );
      } else {
        let data = { form: this.form };
        this.$http.post(
          `${baseUrl}/article/update`,
          data,
          (err, resp, body) => {
            console.log("更新文章");
          }
        );
      }
    }
  }
};
</script>
<style scoped>
.outer {
  margin-top: 50px;
}
.commit {
  margin-top: 50px;
}
</style>

