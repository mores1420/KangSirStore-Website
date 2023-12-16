//获取数据
var UserData = JSON.parse(localStorage.getItem("USERDATA"));
var Username = UserData.UserName;

//插入HTML
document.getElementById("Username").innerHTML = Username;

//跳转主页面
function Renovate() {
    window.location.href = "index.html";
}


window.onload = function(){
    document.getElementById("btn").onclick = function(){
    var msg = document.getElementById("inp").value
    var newObj = document.createElement("p");
    newObj.innerHTML = msg
    document.getElementById("show").appendChild(newObj);
    document.getElementById("btn").value = "";
    document.getElementById("inp").value = "";
    }
}    