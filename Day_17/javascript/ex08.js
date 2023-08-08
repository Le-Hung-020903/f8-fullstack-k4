function division(n) {
    if (n === 1) {
        return 1;
    }
    return 1 / n + division(n - 1);
}
const n = parseInt(prompt(`Nhập n: `));
const result = division(n);
console.log(`Giá trị biếu thức s cho N = ${n} : ${result}`);
