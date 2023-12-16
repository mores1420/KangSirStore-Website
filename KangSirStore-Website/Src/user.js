//获取按钮
var usernameBtn = document.getElementById("usernameBtn");
var passwordBtn = document.getElementById("passwordBtn");
var accountBtn = document.getElementById("accountBtn");

//用户按钮点击事件
usernameBtn.onclick = function () {
    //获取输入框的值
    var InputUsername = document.getElementById("username").value;

    //判断是否为空
    var InputUsernameTF = isNull(InputUsername);
    if (InputUsernameTF == false) {
        //构建字符串
        var data = {
            UserName: InputUsername
        }
        var content = JSON.stringify(data);
        //保存到本地
        localStorage.setItem("USERDATA", content);
        alert("更改成功!");
        //刷新输入框
        document.getElementById("username").value = "";
        // window.location.href = "User.html";
    } else {
        alert("请输入以进行更改");
    }
}

//密码按钮点击事件
passwordBtn.onclick = function () {
    //获取输入框的值
    var InputPassword = document.getElementById("password").value;

    //判断是否为空
    var InputPasswordTF = isNull(InputPassword);
    if (InputPasswordTF == false) {
        //构建字符串
        var data = {
            PassWord: InputPassword
        }
        var content = JSON.stringify(data);
        //保存到本地
        localStorage.setItem("USERDATA", content);
        alert("更改成功!");
        //刷新输入框
        document.getElementById("password").value = "";
    } else {
        alert("请输入以进行更改");
    }
}

//账号按钮点击事件
accountBtn.onclick = function () {
    //获取输入框的值
    var InputAccount = document.getElementById("account").value;

    //判断是否为空
    var InputAccountTF = isNull(InputAccount);
    if (InputAccountTF == false) {
        //构建字符串
        var data = {
            Account: InputAccount
        }
        var content = JSON.stringify(data);
        //保存到本地
        localStorage.setItem("USERDATA", content);
        alert("更改成功!");
        //刷新输入框
        document.getElementById("account").value = "";
    } else {
        alert("请输入以进行更改");
    }
}

//判断是否为空
function isNull(str) {
    if (str == '' || str == undefined || str == null) {
        return true;
    } else {
        return false;
    }
}

//获取数据
var USERDATA = JSON.parse(localStorage.getItem("USERDATA"));
var Username = USERDATA.UserName;
var Account = USERDATA.Account;
var Password = USERDATA.PassWord;

//插入HTML
document.getElementById("Username").innerHTML = Username;
document.getElementById("Account").innerHTML = Account;
document.getElementById("Password").innerHTML = Password;