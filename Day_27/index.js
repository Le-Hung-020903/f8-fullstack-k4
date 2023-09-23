const listProduct = document.querySelector(".list-proc");
const tbody = listProduct.querySelector("tbody");
const cartProc = document.querySelector(".cart-proc");
let number = 0;

//Danh sách mặt hàng
const products = [
    { id: 1, name: "Sản phẩm 1", price: 1000 },
    { id: 2, name: "Sản phẩm 2", price: 2000 },
    { id: 3, name: "Sản phẩm 3", price: 3000 },
    { id: 4, name: "Sản phẩm 4", price: 4000 },
];
const resetProductsInput = function () {
    const ProcNumber = listProduct.querySelectorAll(`input[type = "number" `);
    ProcNumber.forEach((number) => {
        number.value = 1;
    });
};
const showProduct = function () {
    for (let i = 0; i < products.length; i++) {
        listProduct.innerHTML += `
          <tr>
          <td>${i + 1}</td>
          <td>${products[i].name}</td>
          <td>${products[i].price}</td>
          <td><input type = "number" value = "1" min = "1"/>
          <button class = "btn-add">Add to cart</button>
          </td>
          </tr>
          `;
    }
    const btnAdd = document.querySelectorAll(".btn-add");
    btnAdd.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            const number = btn.previousElementSibling.value;
            const product = new Product(
                products[index].id,
                products[index].name,
                products[index].price,
                number
            );
            addANewProcIntoCartProcs(product);
            updateCartTable();
        });
    });
};
showProduct();
//constructor Product
const Product = function (id, name, price, number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.number = number;
};

let cartProducts =
    localStorage.getItem("cartProcs") === null
        ? []
        : JSON.parse(localStorage.getItem("cartProcs"));

const updateLocalStorage = function () {
    localStorage.setItem("cartProcs", JSON.stringify(cartProducts));
};
const addANewProcIntoCartProcs = function (product) {
    if (cartProducts.length === 0) {
        if (Number(product.number) <= 0) {
            alert(
                "Số mặt hàng không thể nhỏ hơn hoặc bằng 0! Vui lòng nhập đúng định dạng!!"
            );
            resetProductsInput();
        } else {
            cartProducts.push(product);
        }
    } else {
        let flag = true;
        for (let cartProc of cartProducts) {
            if (Number(cartProc.id) === Number(product.id)) {
                flag = false;
                if (Number(product.number) <= 0) {
                    alert(
                        "Số mặt hàng không thể nhỏ hơn hoặc bằng 0! Vui lòng nhập đúng định dạng!!"
                    );
                    resetProductsInput();
                } else {
                    cartProc.number =
                        Number(cartProc.number) + Number(product.number);
                }
                break;
            }
        }
        if (flag) {
            cartProducts.push(product);
        }
        updateLocalStorage();
    }
};
const deleteAProc = function () {
    const butDel = document.querySelectorAll(".btn-delete");
    butDel.forEach((btn, i) => {
        let temp = [];
        btn.addEventListener("click", function () {
            if (
                confirm("Are you sure you want to delete your shopping cart?")
            ) {
                alert("deleted successfully!");
                for (let index in cartProducts) {
                    if (index != i) {
                        console.log("true");
                        temp.push(cartProducts[index]);
                    }
                }
                cartProducts = temp;
                updateLocalStorage();
                updateCartTable();
            }
        });
    });
};
const deleteAllProc = function () {
    btnDeleteCart = document.querySelector(".btn-delete-cart");
    btnDeleteCart.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete your shopping cart??")) {
            alert("deleted successfully!");
            cartProducts = [];
            updateLocalStorage();
            updateCartTable();
        }
    });
};
const updateCart = function () {
    btnUpdateCart = document.querySelector(".btn-update-cart");
    numberCart = document.querySelectorAll(".number-cart");
    btnUpdateCart.addEventListener("click", function () {
        alert("Shopping cart updated successfully!");
        let temp = [];
        numberCart.forEach((number, index) => {
            if (number.value > 0) {
                cartProducts[index].number = number.value;
                temp.push(cartProducts[index]);
            }
        });
        cartProducts = temp;
        updateCartTable();
    });
};
const showCartTable = function () {
    let totalNumber = 0;
    let totalPrice = 0;
    let html = `<table>
    <thead>
    <tr>
    <th style="width:10%">Id</th>
    <th style="width:40%">Product name</th>
    <th style="width:15%">Price</th>
    <th style="width:10%">Quantity</th>
    <th style="width:15%">Total</th>
    <th style="width:10%">Delete</th>
    </tr>
    </thead>
    `;
    for (let i = 0; i < cartProducts.length; i++) {
        let intoPrice =
            Number(cartProducts[i].price) * Number(cartProducts[i].number);
        totalPrice += intoPrice;
        totalNumber += Number(cartProducts[i].number);
        html += `
        <tr>
        <td>${i + 1}</td>
        <td>${cartProducts[i].name}</td>
        <td>${cartProducts[i].price}</td>
        <td><input class = "number-cart" type ="number" value = "${
            cartProducts[i].number
        }" min = "0"/></td>
        <td>${intoPrice}</td>
        <td><button class = "btn-delete">Delete</button></td>
        </tr>
        `;
    }

    html += `
    <tr>
    <td colspan = "3" >Total</td>
    <td>${totalNumber}</td>
    <td colspan = "2">${totalPrice}</td>
    </tr>
    </table>
    <div class = "btn">
    <button class ="btn-update-cart">
Update shopping cart</button>
    <button class ="btn-delete-cart">
delete cart</button>
    </div>
    `;
    cartProc.innerHTML = html;
};
const updateCartTable = function () {
    if (cartProducts.length === 0) {
        let html = `<p>There are no items in the cart</p>`;
        cartProc.innerHTML = html;
    } else {
        showCartTable();
        deleteAProc();
        deleteAllProc();
        updateCart();
    }
};
updateCartTable();
