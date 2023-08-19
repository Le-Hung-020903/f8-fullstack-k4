function findMinMax() {
    var inputArray = document.getElementById("inputArray").value;
    var arr = inputArray.split(" ").map(Number);

    if (arr.length === 0) {
        document.getElementById("result").innerHTML = "Mảng rỗng!";
        return;
    }
    var minVal = arr[0];
    var maxVal = arr[0];
    var minIndex = 0;
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
            minIndex = i;
        }
        if (arr[i] > maxVal) {
            maxVal = arr[i];
            maxIndex = i;
        }
    }

    var resultText =
        "Số nhỏ nhất trong mảng là " +
        minVal +
        ", tại vị trí " +
        minIndex +
        ".<br>" +
        "Số lớn nhất trong mảng là " +
        maxVal +
        ", tại vị trí " +
        maxIndex +
        ".";
    document.getElementById("result").innerHTML = resultText;
}
