<template>
<div>
    <el-row :gutter="20">
        <el-col :span="10" :offset="7"><span>{{title}}</span></el-col>
        <el-col :span="2" :offset="1"><span>{{author}}</span></el-col>
        <el-col :span="4"><span>{{createtime}}</span></el-col>
    </el-row>
    <div ref="content">{{content}}</div>
    
</div>

</template>
<script>

export default {
    data(){
        return {
            title:"title",
            author:"lixiaomeng",
            createtime:"2017年12月19日11:19",
            content:"hello world"
        }
    },
    created(){
        eventBus.$on("updatecontent",(article_id)=>{
            console.log("got message to update")
            this.getData(article_id);
        })
    },
    methods:{
        getData(id){
            this.$http.get(`${baseUrl}/article/${id}`,(err,resp,body)=>{
                let res=JSON.parse(body);
                console.log(res);
                if(res.errno==0){
                    this.title=res.data.title
                    this.author=res.data.author
                    this.createtime=res.data.createtime
                    this.$refs.content.innerHTML=this.unescapeString(res.data.content)
                }
            })
        },
        unescapeString(raw){
            return raw.replace(/(\&|\&)gt;/g, ">").replace(/(\&|\&)lt;/g, "<").replace(/(\&|\&)quot;/g, "\"");
        }
    }
}
</script>
<style scoped>
span{
    text-align: center;
}
</style>
