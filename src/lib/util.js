function checkHasLogin() {
    const cookielist=['I','r_time','r_token']
    for(let i=0;i<cookielist.length;i){
        if(getCookie(cookielist[i])==undefined){
            return false
        }
    }
    return true
}
function getCookie(name) {
    let raw = document.cookie;
    console.log('raw',raw)
    // return null;
    if (raw == null || raw.length<5) {
        return undefined;
    }
    let res = {};
    console.log(raw);
    const myreg = RegExp(/(.*?)=(.*?);+\s+/g);
    let reslist = raw.match(myreg);

    reslist.forEach((value, index) => {
        let temp = value.split("=");
        res[temp[0]] = temp[1];
    });
    return res[name];
}
exports.getCookie = getCookie
exports.checkHasLogin=checkHasLogin
