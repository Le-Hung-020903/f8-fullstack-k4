// Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng.
// Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (var i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function avg(inputArray) {
    var sum = 0;
    var count = 0;
    for (let num of inputArray) {
        if (isPrime(num)) {
            sum += num;
            count++;
        }
    }
    if (count === 0) {
        console.log(`arrays with no primes`);
    }
    return sum / count;
}
const arrayNumber = [2, 5, 3, 7, 4];
const result = avg(arrayNumber);
console.log(result);
