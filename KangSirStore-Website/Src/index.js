//获取数据
var UserData = JSON.parse(localStorage.getItem("USERDATA"));
var Username = UserData.UserName;

//插入HTML
document.getElementById("Username").innerHTML = Username;

//更换背景图片
function changeBackgroundImage(url) {
    document.body.style.backgroundImage = `url(${url})`;
}

//刷新页面
function Renovate() {
    window.location.href = "index.html";
}

//跳转到showPic
function showPic(){
    window.location.href = "showPic.html";
}

//跳转到Support
function showSupport(){
    window.location.href = "support.html";
}

//设置秒杀结束时间
var endTime = new Date('2023-12-15 12:30:00'), endseconds = endTime.getTime();
//声明变量剩余保存的时间
var d = g = m = s = 0;
//设置定时器
var id = setInterval(seckill, 1000);
function seckill() {
    var nowTime = new Date();
    //获取时间差
    var remaining = parseInt((endseconds - nowTime.getTime()) / 1000);
    //判断秒杀是否过期
    if (remaining > 0) {
        d = parseInt(remaining / 86400);
        h = parseInt((remaining / 3600) % 24);
        m = parseInt((remaining / 60) % 60);
        s = parseInt(remaining % 60);

        //用两位数表示剩余的时间
        d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
    } else {
        clearInterval(id);
        d = h = m = s = '00';
    }
    //将剩余的时间填写到网页中
    document.getElementById('d').innerHTML = d + "天";
    document.getElementById('h').innerHTML = h + '时';
    document.getElementById('m').innerHTML = m + '分';
    document.getElementById('s').innerHTML = s + '秒';
}

window.onload = function () {
    var adContainer = document.getElementById('ad-container');
    var closeBtn = document.getElementById('close-btn');

    // 关闭广告的点击事件
    closeBtn.onclick = function () {
        adContainer.style.bottom = '-100%'; // 隐藏广告
    };

    // 初始时展现广告
    adContainer.style.bottom = '0';
};

//获取所有商品
const productElements = document.querySelectorAll('.product');

//初始化商品ID数组
let productID = [];

//添加商品点击监听器
productElements.forEach(productElements => {
    productElements.addEventListener('click', () => {
        //获取点击的商品id
        const productId = productElements.querySelector('img').id;
        //判断是否已经添加过
        if (productID.indexOf(productId) === -1) {
            //添加到数组中
            productID.push(productId);
            // 将商品ID数组存储到LocalStorage
            localStorage.setItem('productIds', JSON.stringify(productID));
            alert("已将"+productId+"加入购物车");
            // 输出已选择的商品ID数组
            console.log(productID);
        } else { alert("该商品已存在于购物车中！") }
    });
});