var a = 5;
var b = 10;
console.log(`Before swap: a = ` + a + ` b = ` + b);

a = a ^ b;
b = b ^ a;
a = a ^ b;

console.log(`After swap: a = ` + a + ` b = ` + b);
