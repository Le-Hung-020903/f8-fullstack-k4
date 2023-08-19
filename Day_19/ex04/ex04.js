var numbers = [5, 1, 9, 8, 10];
var element = 4;

numbers.sort(function (a, b) {
    return a - b;
});
var indexToInsert = 0;
while (indexToInsert < numbers.length && numbers[indexToInsert] < element) {
    indexToInsert++;
}
numbers.splice(indexToInsert, 0, element);
console.log(numbers);
