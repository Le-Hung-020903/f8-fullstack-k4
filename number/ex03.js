Array.prototype.push2 = function () {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this.length;
};
var arr = [1, 2, 3];
arr.push2(4, 5, 6);
console.log(arr);
