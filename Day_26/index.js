var progressBar = document.querySelector(".progress-bar");
var progressTime = progressBar.querySelector("span");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

//Yêu cầu: Chuyển đổi hết thành phần trăm (%)

var handleUpdateValue = function (value) {
    progress.style.width = `${value}%`;
};

//Tính độ dài của progress-bar
var progressBarWidth = progressBar.clientWidth;
var isDrag = false; //Cắm cờ
var initialClientX;
var initialValue = 0;
var value;

progressBar.addEventListener("mousedown", function (e) {
    if (e.which === 1) {
        var offsetX = e.offsetX;
        value = (offsetX * 100) / progressBarWidth;
        initialValue = value;
        initialClientX = e.clientX;
        // isDrag = true;
        handleUpdateValue(value);
        currentTimeEl.innerText = getTime((audio.duration * value) / 100);
    }
});

progressSpan.addEventListener("mousedown", function (e) {
    e.stopPropagation();
    if (e.which === 1) {
        isDrag = true;
        initialClientX = e.clientX;
        initialValue = timerUpdate;
    }
});

document.addEventListener("mousemove", function (e) {
    e.stopPropagation();
    if (isDrag) {
        var moveWidth = e.clientX - initialClientX;
        value = (moveWidth * 100) / progressBarWidth;
        value = initialValue + value;
        currentTimeEl.innerText = getTime(
            (audio.duration * initialValue) / 100
        );
        console.log(timerUpdate);
        if (value < 0) {
            value = 0;
        }

        if (value > 100) {
            value = 100;
        }

        handleUpdateValue(value);
    }
});

document.addEventListener("mouseup", function () {
    isDrag = false;
    initialValue = value;

    audio.currentTime = (audio.duration * initialValue) / 100;

    currentTimeEl.innerText = getTime((audio.duration * value) / 100);
});

//Xây dựng trình phát nhạc
var audio = document.querySelector(".audio");

var durationEl = progressBar.nextElementSibling;

var currentTimeEl = progressBar.previousElementSibling;

var playBtn = document.querySelector(".play-btn");

var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;

var playBtnIcon = `<i class="fa-solid fa-play"></i>`;

var getTime = function (seconds) {
    //Giây => Phút và giây
    var mins = Math.floor(seconds / 60);
    seconds -= mins * 60;
    seconds = Math.floor(seconds);

    return `${mins < 10 ? `0${mins}` : mins}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
};
//Lắng nghe sự kiện load xong nhạc
audio.addEventListener("loadeddata", function () {
    durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
    initialValue = 0;
    if (audio.paused) {
        audio.play();
        this.innerHTML = pauseBtnIcon;
        audio.currentTime = (audio.duration * timerUpdate) / 100;
    } else {
        audio.pause();
        this.innerHTML = playBtnIcon;
        audio.currentTime = (audio.duration * timerUpdate) / 100;
    }
});
var timerUpdate;
audio.addEventListener("timeupdate", function () {
    if (!isDrag) {
        currentTimeEl.innerText = getTime(audio.currentTime);

        //Lấy ra tỷ lệ phần trăm dựa vào currentTime và duration
        var value = (audio.currentTime * 100) / audio.duration;

        handleUpdateValue(value);
        timerUpdate = value;
    }
});

// Lắng nghe sự kiện hover chuột vào thanh timer

progressBar.addEventListener("mouseover", function (e) {
    progressTime.style.display = "flex";
});
progressBar.addEventListener("mouseout", function () {
    progressTime.style.display = "none";
});
progressBar.addEventListener("mousemove", function (e) {
    var value = (e.offsetX / progressBarWidth) * 100;
    progressTime.style.left = `${value}%`;
    progressTime.style.translate = `${-50}%`;
    progressTime.innerHTML = getTime((audio.duration * value) / 100);
});
progressSpan.addEventListener("mouseover", function (e) {
    e.stopPropagation();
});

// Sự kiện hết video tự reset về đầu

audio.addEventListener("ended", function () {
    value = 0;
    audio.currentTime = 0;
    handleUpdateValue(value);
    playBtn.innerHTML = playBtnIcon;
});
