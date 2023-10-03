var btn = document.querySelector(".btn");
var dropMenu = document.querySelector(".dropdown-menu");
var fontBold = document.getElementById("btn-bold");
var fontUnderline = document.getElementById("btn-underline");
var fontItalic = document.getElementById("btn-italic");
var textContent = document.querySelector(".text-content");
var changeColor = document.getElementById("btn-color");
var fileName = document.querySelector(".name");
var saveTxt = document.getElementById("txt-btn");
var savePdf = document.getElementById("pdf-btn");
var btnNew = document.getElementById("new-btn");
var countWord = document.querySelector(".count-word");
var countLetter = document.querySelector(".count-letter");
// hàm chuyển đổi text
var formatText = function (command) {
    document.execCommand(command);
};

// saveTxt.addEventListener("click", function () {
//     var content = textContent.value;
//     var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
//     var url = URL.createObjectURL(blob);
//     var a = document.createElement("a");
//     a.href = url;
//     a.download = `${fileName.value}.txt`;
//     a.click();
//     URL.revokeObjectURL(url);
// });
saveTxt.addEventListener("click", function () {
    var content = textContent.innerText; // Sử dụng getElementById để lấy giá trị từ thẻ HTML
    var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var name = fileName.value; // Lấy giá trị tên tệp tin từ thẻ HTML
    var a = document.createElement("a");
    a.href = url;
    a.download = `${name}.txt`;
    a.click();
    URL.revokeObjectURL(url);
});

savePdf.addEventListener("click", function () {
    var filePdf = fileName.value;
    html2pdf(textContent).save(filePdf);
});

btnNew.addEventListener("click", function () {
    textContent.innerHTML = "";
});
// var saveFileTxt = function () {};
btn.addEventListener("click", function (e) {
    e.preventDefault();
    dropMenu.classList.toggle("show");
});
let numLetter = document.createTextNode(0);
let numWord = document.createTextNode(0);

countLetter.append(numLetter);
countWord.append(numWord);

function updateWordAndLetterCount() {
    const text = textContent.textContent;
    const wordArray = text.split(/\s+/).filter(Boolean); // Chia thành từ bằng cách tách bởi khoảng trắng và loại bỏ các từ rỗng.
    const letterCount = text.replace(/\s+/g, "").length;

    numWord.data = wordArray.length;
    numLetter.data = letterCount;
}

textContent.addEventListener("input", updateWordAndLetterCount);

// Xử lý sự kiện paste
textContent.addEventListener("paste", function (e) {
    e.preventDefault();

    let text = e.clipboardData.getData("text/plain");
    text = text.replace(/\n/g, " "); // Thay thế ký tự xuống dòng bằng khoảng trắng.

    document.execCommand("insertText", false, text);
});

textContent.addEventListener("input", updateWordAndLetterCount);

fontBold.addEventListener("click", function () {
    formatText("bold");
});
fontUnderline.addEventListener("click", function () {
    formatText("underline");
});
fontItalic.addEventListener("click", function () {
    formatText("italic");
});
changeColor.addEventListener("input", function () {
    document.execCommand("foreColor", false, this.value);
});
