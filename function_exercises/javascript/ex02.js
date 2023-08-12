function reverseNumber(number) {
    let reversed = 0;

    while (number > 0) {
        const lastDigit = number % 10;
        reversed = reversed * 10 + lastDigit;
        number = Math.floor(number / 10);
    }

    return reversed;
}
const reverseButton = document.getElementById("reverseButton");
reverseButton.addEventListener("click", () => {
    const numberInput = document.getElementById("numberInput");
    const resultDiv = document.getElementById("result");

    const inputNumber = parseInt(numberInput.value);
    const reversedNumber = reverseNumber(inputNumber);

    resultDiv.textContent = `Số sau khi đảo ngược: ${reversedNumber}`;
});