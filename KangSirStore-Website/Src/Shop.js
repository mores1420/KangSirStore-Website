//回到主界面
function Renovate() {
    window.location.href = "index.html";
}

//获取数据
var USERDATA = JSON.parse(localStorage.getItem("USERDATA"));
var Username = USERDATA.UserName;

//插入HTML
document.getElementById("Username").innerHTML = Username;
//等待页面加载完毕
document.addEventListener("DOMContentLoaded", function () {
    //获取商品列表
    const storedProductIds = JSON.parse(localStorage.getItem("productIds"));
    // 更新商品列表显示
    const productsListContainer = document.getElementById('productsList');
    productsListContainer.innerHTML = "";

    let totalPrice = 0;

    for (let i = 0; i < storedProductIds.length; i++) {
        //图片id
        const productId = storedProductIds[i];
        //图片路径
        const imgPath = `image/IndexGoodsImage/${productId}.jpg`;
        //商品列表
        const productList = document.createElement("li");
        //创建图片
        const productImg = document.createElement('img');
        //图片大小样式
        var productWidth = "100px";
        var productHeight="120px";
        productImg.src = imgPath;
        productImg.style.width = productWidth;
        productImg.style.height = productHeight;
        productList.appendChild(productImg);
        //商品信息
        const productInfo = document.createElement('div');
        productInfo.classList.add("productinfo");
        productInfo.innerHTML = `
            <p>商品${i + 1}</p>
            <p>数量: <span id="quantity-${productId}">1</span></p>
            <button onclick="decrementQuantity('${productId}')">-</button>
            <button onclick="incrementQuantity('${productId}')">+</button>
        `;
        productInfo.style.display = 'flex';
        productInfo.style.alignItems= 'center';
        productList.appendChild(productInfo);
        productsListContainer.appendChild(productList);
        totalPrice += 100;
    }

    // 更新总计金额
    document.getElementById('totalPrice').innerText = totalPrice;

})

//减少
function decrementQuantity(productId) {
    const quantityElement = document.getElementById(`quantity-${productId}`);
    let quantity = parseInt(quantityElement.innerText, 10);
    if (quantity > 1) {
        quantity--;
        quantityElement.innerText = quantity;
        updateTotalPrice();
    }
}

//增加
function incrementQuantity(productId) {
    const quantityElement = document.getElementById(`quantity-${productId}`);
    let quantity = parseInt(quantityElement.innerText, 10);
    quantity++;
    quantityElement.innerText = quantity;
    updateTotalPrice();
}

function updateTotalPrice() {
    const quantities = document.querySelectorAll('[id^="quantity-"]');
    let totalPrice = 0;

    quantities.forEach(quantityElement => {
        const quantity = parseInt(quantityElement.innerText, 10);
        totalPrice += quantity * 100; 
    });

    document.getElementById('totalPrice').innerText = totalPrice;
}

//结算
function checkout() {
    alert('结算');
}