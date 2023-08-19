function removeDuplicates(inputArray) {
    const uniqueArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (uniqueArray.indexOf(inputArray[i]) === -1) {
            uniqueArray.push(inputArray[i]);
        }
    }
    return uniqueArray;
}
const inputArray = [1, 2, 3, 2, 4, 1, 5, 6, 5];
const filteredArray = removeDuplicates(inputArray);
console.log(filteredArray);
