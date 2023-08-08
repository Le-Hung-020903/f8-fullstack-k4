function multiplication(n) {
    var S = 0;
    for (var i = 1; i <= n; i++) {
        S += i * (i + 1);
    }
    return S;
}
const n = parseInt(prompt(`Nhập số nguyên n: `));
const giaTri = multiplication(n);
console.log(`Giá trị biếu thức s là: ${giaTri}`);
