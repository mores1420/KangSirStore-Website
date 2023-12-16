//等待加载完成
document.addEventListener('DOMContentLoaded', function () {
    //获取登录按钮
    var LoginButton = document.getElementById("loginButton");
    var account, password;

    LoginButton.onclick = function () {

        //获取输入框的值
        var InputAccount = document.getElementById("account").value;
        var InputPassword = document.getElementById("password").value;

        //判断是否为空
        var InputAccountTF = isNull(InputAccount);
        var InputPasswordTF = isNull(InputPassword);

        if (InputAccountTF == false && InputPasswordTF == false) {
            //从本地获取数据
            var UserData = JSON.parse(localStorage.getItem("USERDATA"));
            account = UserData.Account;
            password = UserData.PassWord;

            //判断是否为正确的账号密码
            if (InputAccount == account && InputPassword == password) {
                window.location.href = "index.html";
            } else {
                alert("账号或者密码错误")
            }
        } else {
            alert("账号或者密码错误")
        }
    }
})

//判空函数
function isNull(str) {
    if (str == '' || str == undefined || str == null) {
        return true;
    } else {
        return false;
    }
}