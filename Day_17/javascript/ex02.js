function electricityPrice(number) {
    var money;
    if (number <= 50) {
        money = 1678 * number;
    } else if (number <= 100) {
        money = 50 * 1678 + (number - 50) * 1734;
    } else if (number <= 200) {
        money = 50 * 1678 + 50 * 1734 + (number - 100) * 2014;
    } else if (number <= 300) {
        money = 50 * 1678 + 50 * 1734 + 100 * 2014 + (number - 200) * 2536;
    } else if (number <= 400) {
        money =
            50 * 1678 +
            50 * 1734 +
            100 * 2014 +
            100 * 2536 +
            (number - 300) * 2834;
    } else {
        money =
            50 * 1678 +
            50 * 1734 +
            100 * 2014 +
            100 * 2536 +
            100 * 2834 +
            (number - 400) * 2927;
    }
    return money;
}
const number = parseFloat(prompt(`nhập số điện tiêu thụ (kWh): `));
const money = electricityPrice(number);
console.log(`số tiền phải đóng: ${money.toFixed(2)} VND`);
