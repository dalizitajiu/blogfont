const request=require("request")
let url="http://127.0.0.1:8080/user/login"
let data={
    form:{
        email:"573912623@qq.com",
        pwd:"dalizi1992"
    }
}
request.post(url,data,(err,resp,body)=>{
    console.log(body)
})