//回到主页面
function Renovate(){
    window.location.href = "index.html";
}

//获取数据
var UserData = JSON.parse(localStorage.getItem("USERDATA"));
var Username = UserData.UserName;

//插入HTML
document.getElementById("Username").innerHTML = Username;

window.onload = function () {
    window.setInterval(tab, 1000);
    var imgs = document.getElementById("box").getElementsByTagName("img");
    var lis = document.getElementById("box").getElementsByTagName("li");
    var i = 0;

    function tab() {
        // var i=0;
        i++;
        if (i >=6) {
            i = 0;
        }

        for (var j = 0; j < imgs.length; j++) {
            if (i === j) {
                imgs[j].className = "show";
                console.log("切换成功")
            } else {
                imgs[j].className = "";
            }
        }

        for (var x = 0; x < lis.length; x++) {
            if (i === x) {
                lis[x].className = "bg_red";
            } else {
                lis[x].className = "";
            }
        }
    }
}
