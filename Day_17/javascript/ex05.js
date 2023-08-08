function triangle(n) {
    let currentNumber = 1;
    for (var i = 1; i <= n; i++) {
        let row = "";
        for (var j = 1; j <= i; j++) {
            row += currentNumber + " ";
            currentNumber++;
        }
        console.log(row);
    }
}
const n = parseInt(prompt(`Nhập số dòng tam giác: `));
triangle(n);
