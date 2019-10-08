function loadStyles(url) {
    let l = document.createElement("link");
    l.rel = "stylesheet";
    l.type = "text/css";
    l.href = "https://sxqian.oss-cn-hangzhou.aliyuncs.com/app/online/server/widget/chunk-vendors.df73e011.css";
    let h = document.getElementsByTagName("head")[0];
    h.appendChild(l);
}

function loadJs() {
    let s = document.createElement("script");
    s.src = "https://sxqian.oss-cn-hangzhou.aliyuncs.com/app/online/server/widget/chunk-vendors.1cc43d22.js";
    let b = document.getElementsByTagName("body")[0];
    b.appendChild(s);
}

function createD() {
    let d = document.createElement('div');
    d.id = "sxq_widget_id";
    let sws = document.getElementsByClassName("sxq_widget_class");
    for (let i = 0; i < sws.length; i++){
        sws[i].appendChild(d)
    }
}

$(document).ready(()=>{
    loadStyles();
    loadJs();
    createD();
})