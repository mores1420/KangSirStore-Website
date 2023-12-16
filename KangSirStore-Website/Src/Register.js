//定义注册按钮
var registerButton = document.getElementById("btn");
var account,password,username;

//点击按钮时判断账号和密码是否为空
registerButton.onclick = function () {
    //定义并获取变量
    var account = document.getElementById('account').value;
    var password = document.getElementById("password").value;
    var username = document.getElementById('username').value;

    var accountTF = isNull(account);
    var passwordTF = isNull(password);
    var usernameTF = isNull(username);
    
    if (accountTF == false && passwordTF == false && usernameTF == false) {
        var data = {
            Account: account,
            PassWord: password,
            UserName: username
        };

        var content=JSON.stringify(data);
        //保存到本地
        localStorage.setItem("USERDATA",content);
        alert("注册成功!");
    
    } else {
        alert("请输入以完成注册");
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