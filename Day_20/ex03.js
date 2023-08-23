var arr = [
    ["a", 1, true],
    ["b", 2, false],
];

var resultReduce = arr[0].reduce((acc, _, i) => {
    acc.push(arr.map((subArr) => subArr[i]));
    return acc;
}, []);

console.log(resultReduce);
