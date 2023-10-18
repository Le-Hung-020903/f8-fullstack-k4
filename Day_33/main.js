const btn = document.querySelector(".btn");
const msgStart = document.querySelector(".msg-start");
const msgSuccess = document.querySelector(".msg-success");
const results = document.querySelector(".result");

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = false;
recognition.lang = "vi-VN";
recognition.continuous = false;
recognition.maxAlternatives = 1;

btn.addEventListener("click", function (e) {
    e.preventDefault();
    btn.innerText = "Đang nghe ...";
    msgStart.classList.remove("d-none");
    recognition.start();
});

recognition.onresult = (e) => {
    console.log(e);
    msgStart.classList.add("d-none");
    let text = e.results[0][0].transcript.toLowerCase();
    results.innerText = `Đang tìm kiếm ${text}`;
    console.log(`Đang tìm kiếm ${text}`);
    switch (text) {
        case "google":
            window.open("https://www.google.com", "_blank");
            msgSuccess.classList.remove("d-none");
            results.innerText = `Đã thực hiện xong`;
            break;
        case "facebook":
            window.open("https://www.facebook.com", "_blank");
            msgSuccess.classList.remove("d-none");
            results.innerText = `Đã thực hiện xong`;
            break;
        case "youtube":
            window.open("https://www.youtube.com", "_blank");
            msgSuccess.classList.remove("d-none");
            results.innerText = `Đã thực hiện xong`;
            break;
        case "zing":
            window.open("https://zingmp3.vn", "_blank");
            msgSuccess.classList.remove("d-none");
            results.innerText = `Đã thực hiện xong`;
            break;
        case "google maps":
        case "bản đồ":
            window.open("https://maps.google.com", "_blank");
            msgSuccess.classList.remove("d-none");
            results.innerText = `Đã thực hiện xong`;
            break;
        case `chỉ đường tới vinhomes smart city tây mỗ`:
            window.open(
                "https://www.google.com/maps/d/viewer?mid=18pnjUfXUkBkQKnjjQWpmcmOXfok&hl=en_US&ll=20.9959605%2C105.81076380000002&z=17",
                "_blank"
            );
            msgSuccess.classList.remove("d-none");
            results.innerText = `Đã thực hiện xong`;
            break;
        default:
            results.innerText = "Không thực hiện được yêu cầu";
            results.classList.add("failure");
    }
};

recognition.onspeechend = () => {
    results.style.display = "block";
    recognition.stop();
};
