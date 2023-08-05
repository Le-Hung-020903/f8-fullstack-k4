var a = 2;
var b = 3;
var c = 5;
var maxNumber;

if (a >= b && a >= c) {
    maxNumber = a;
} else if (b >= a && b >= c) {
    maxNumber = b;
} else {
    maxNumber = c;
}

console.log(`Max number: ` + maxNumber);
