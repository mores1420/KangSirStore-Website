//回到主界面
function Renovate() {
    window.location.href = "index.html";
}

//获取数据
var UserData = JSON.parse(localStorage.getItem("USERDATA"));
var Username = UserData.UserName;

//插入HTML
document.getElementById("Username").innerHTML = Username;

//页面加载完毕后执行放大镜
window.onload = function () {
    //获得小放大镜、阴影和大图元素
    small = document.getElementById("small");
    shadow = document.getElementById("shadow");
    //获得小放大镜和大图的宽高
    shadowWH = shadow.style.width ? shadow.style.width : document.defaultView.getComputedStyle(shadow, null).width;
    shadowWH = parseInt(shadowWH);
    smallW = small.style.width ? small.style.width : document.defaultView.getComputedStyle(small, null).width;
    smallW = parseInt(smallW);

    smallMT = small.style.marginTop ? small.style.marginTop : document.defaultView.getComputedStyle(small, null).marginTop;
    smallMT = parseInt(smallMT);
    big = document.getElementById("big");
    bigW = big.style.width ? big.style.width : document.defaultView.getComputedStyle(big, null).width;
    bigW = parseInt(bigW);

    // 获得大图元素的图片对象
    bigImg = big.getElementsByTagName("img")[0];
    move();
}

function move() {
    //鼠标移入放大镜区域时显示放大镜和大图并监听鼠标移动
    small.onmouseover = function () {
        shadow.style.display = "block";
        big.style.display = "block";
        change(event);
    }
    small.onmouseout = function () {
        shadow.style.display = "none";
        big.style.display = "none";
    }
    small.onmousemove = function (event) {
        change(event);
    }
}
function change(event) {
    var evt = event ? event : window.event;
    var moveL = evt.clientX - small.getBoundingClientRect().left - shadowWH / 2;
    var moveT = evt.clientY - small.getBoundingClientRect().top - shadowWH / 2;

    //边界检查
    if (moveL < 0) {
        moveL = 0;
    }
    if (moveL > smallW - shadowWH) {
        moveL = smallW - shadowWH;
    }

    if (moveT < 0) {
        moveT = 0;
    }
    if (moveT > smallW - shadowWH) {
        moveT = smallW - shadowWH;
    }

    //设置阴影位置
    shadow.style.left = moveL + "px";
    shadow.style.top = moveT + "px";

    big.style.left = 50 + "px";
    big.style.top = smallMT + "px";

    bigImgW = bigImg.offsetWidth;
    var scale = bigImgW / bigW;
    bigImg.style.top = -moveT * scale + "px";
    bigImg.style.left = -moveL * scale + "px";

}
