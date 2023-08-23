// Lấy kết quả giao giữa 2 mảng
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
// [1,2]
var output = arrA.filter((item) => {
    return arrB.indexOf(item) !== -1;
});
console.log(output);
