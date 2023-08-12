function fibonacciRecursive(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        const fibList = fibonacciRecursive(n - 1);
        fibList.push(fibList[fibList.length - 1] + fibList[fibList.length - 2]);
        return fibList;
    }
}
const calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", () => {
    const numberInput = document.getElementById("numberInput");
    const resultDiv = document.getElementById("result");

    const n = parseInt(numberInput.value);
    const fibonacciList = fibonacciRecursive(n);

    resultDiv.innerHTML = `Các số Fibonacci đầu tiên là: ${fibonacciList.join(
        ", "
    )}`;
});