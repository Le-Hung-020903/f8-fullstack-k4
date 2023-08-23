// Làm phẳng array sau (Chuyển về mảng 1 chiều)
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
function flatArray(arr) {
    return arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
            return acc.concat(flatArray(cur));
        }
        return acc.concat(cur);
    }, []);
}
var output = flatArray(arr);
console.log(output);
