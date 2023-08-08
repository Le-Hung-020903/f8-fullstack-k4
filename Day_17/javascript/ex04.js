function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
const num = parseInt(prompt(`nhập số: `));
if (isPrime(num)) {
    console.log(`${num} là số nguyên tố`);
} else {
    console.log(`${num} không phải là số nguyên tố`);
}
