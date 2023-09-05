Number.prototype.getCurrency = function (input) {
    var value = parseFloat(this);
    if (!isNaN(value)) {
        return value.toLocaleString("vi-VN") + " " + input;
    } else {
        return this;
    }
};
//Case 1
var price = 12000;
console.log(price.getCurrency("đ")); //Hiển thị: 12,000 đ

//Case 2
var price = "12000000";
console.log(price.getCurrency("đ")); //Hiển thị: 12,000,000 đ
