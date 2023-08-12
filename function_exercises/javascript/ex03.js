function numberToWords(number) {
    const units = [
        "không",
        "một",
        "hai",
        "ba",
        "bốn",
        "năm",
        "sáu",
        "bảy",
        "tám",
        "chín",
    ];
    const tens = [
        "",
        "mười",
        "hai mươi",
        "ba mươi",
        "bốn mươi",
        "năm mươi",
        "sáu mươi",
        "bảy mươi",
        "tám mươi",
        "chín mươi",
    ];

    function convertLessThan1000(num) {
        if (num === 0) {
            return "";
        } else if (num < 10) {
            return units[num];
        } else if (num < 20) {
            return tens[num - 10];
        } else if (num < 100) {
            const tenDigit = Math.floor(num / 10);
            const unitDigit = num % 10;
            return `${tens[tenDigit]} ${convertLessThan1000(unitDigit)}`;
        } else {
            const hundredDigit = Math.floor(num / 100);
            const remainingNum = num % 100;
            return `${units[hundredDigit]} trăm ${convertLessThan1000(
                remainingNum
            )}`;
        }
    }

    if (number === 0) {
        return "không";
    } else if (number < 1000) {
        return convertLessThan1000(number);
    } else {
        const thousandDigit = Math.floor(number / 1000);
        const remainingNum = number % 1000;
        return `${convertLessThan1000(
            thousandDigit
        )} ngàn ${convertLessThan1000(remainingNum)}`;
    }
}

const inputNumber = 4298;
const words = numberToWords(inputNumber);
console.log(words);
