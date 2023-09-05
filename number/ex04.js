Array.prototype.filter2 = function (callback) {
    var filtered = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filtered.push(this[i]);
        }
    }
    return filtered;
};
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumber = numbers.filter2((number) => number % 2 === 0);
console.log(evenNumber);
