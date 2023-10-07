const time = document.querySelector(".counter");
const btn = document.querySelector(".btn");

let timeCountDown = 10;
let countdownInterval;

function updateTimerDisplay() {
    time.innerText = timeCountDown;
}

function handleCountdown() {
    if (timeCountDown === 0) {
        clearInterval(countdownInterval);
        btn.style.cursor = "pointer";
        btn.style.backgroundColor = "transparent";
        btn.addEventListener("click", () => {
            window.location.href = "https://fullstack.edu.vn/";
        });
    } else {
        timeCountDown--;
        updateTimerDisplay();
    }
}

function startCountdown() {
    updateTimerDisplay();
    countdownInterval = setInterval(handleCountdown, 1000);
}

function handleVisibilityChange() {
    if (document.hidden) {
        clearInterval(countdownInterval);
    } else {
        startCountdown();
    }
}

window.addEventListener("load", () => {
    startCountdown();
});

document.addEventListener("visibilitychange", handleVisibilityChange);
