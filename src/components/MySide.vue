<template>
<div>

    <div class="myli" v-for="(item,index) in sidelist" :key="index" v-bind:ref="'item'+index" @click.stop.prevent="handleClick" v-bind:index="item.id">
      <el-tag type="danger" size="medium">{{sidetype}} {{item.title}}</el-tag>               
    </div>
</div>  
</template>
<script>
export default {
  data() {
    return {
      sidetype: "index",
      sidelist: [{ title: "画布", id: 12 }, { title: "copy", id: 1 }]
    };
  },
  mounted: function() {
    let mgetData = this.getData;

    eventBus.$on("changeSide", obj => {
      this.sidetype = obj.label;
      console.log("shit", obj.label);
      this.sidelist = mgetData(obj.label);
      //   console.log(typeof this.getData);
    });
  },
  methods: {
    handleClick(event) {
      console.log(event);
      let article_id = event.currentTarget.attributes.index.nodeValue;
      console.log("in myside", article_id);
      eventBus.$emit("updatecontent",article_id);
    },
    getData(stype) {
      let res = [];
      this.$http.get(`${baseUrl}/article/getbytype?type=${this.sidetype}`,(err,resp,body)=>{
        if(err){
          console.log(err)
          this.sidelist=[]
        }
        let raw=JSON.parse(body);
        this.sidelist=raw.data;
      })
      // switch (stype) {
      //   case "python":
      //     res = [{ title: "clone", id: 1 }, { title: "copy", id: 2 }];
      //     break;
      //   case "index":
      //     res = [{ title: "test1", id: 3 }, { title: "test2", id: 4 }];
      //     break;
      //   case "html":
      //     res = [{ title: "html1", id: 5 }, { title: "html5", id: 6 }];
      //     break;
      //   case "mysql":
      //     res = [{ title: "insert", id: 7 }, { title: "delete", id: 8 }];
      //     break;
      //   default:
      //     break;
      // }
      return res;
    }
  }
};
</script>
<style>
ul.none {
  list-style-type: none;
}
.myli{
    height:60px;
}
</style>
