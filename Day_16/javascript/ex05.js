var a = 10;
var b = 20;
var c = 30;

if (a > b) {
    var temp = a;
    a = b;
    b = temp;
}
if (a > c) {
    var temp = a;
    a = c;
    c = temp;
}
if (b > c) {
    var temp = b;
    b = c;
    c = temp;
}
console.log(a, b, c);