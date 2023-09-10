// var btnModal = document.querySelector(".signin__btn");
// var signin = document.querySelector(".signin-block");
// var register = document.querySelector(".register-block");
// var overlay = document.querySelector(".signin-register__overlay");
// var modalSigninRegister = document.querySelector(".signin-register-btn");
// var showPassword = document.querySelector(".form-group__password");
// var passwordInput = document.querySelector(".password-input");
// var emailInput = document.querySelector(".form-input-signin #email");
// var registerBtn = document.querySelector(".form-input-signin #password");

// // hiện thông tin đăng nhập
// btnModal.addEventListener("click", function () {
//     modalSigninRegister.classList.add("show");
//     register.classList.add("d-none");
//     signin.classList.add("active");

//     emailInput.form.reset();
//     if (emailInput.value === "") {
//     }
// });
// //bấm vào nút đăng ký
// // registerBtn.addEventListener("click", function () {
// //     registerBtn.classList.add("active");
// //     signin.classList.remove("active");
// // });
// // tắt overlay
// overlay.addEventListener("click", function () {
//     modalSigninRegister.classList.remove("show");
// });
// // hiển thị mật khẩu
// showPassword.addEventListener("click", function () {
//     if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//     } else {
//         passwordInput.type = "password";
//     }
// });
const btnModal = document.querySelector(".btn-login");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
const btnLogin = document.querySelector(".modal__login");
const btnRegister = document.querySelector(".modal__register");
const contentLogin = document.querySelector(".login-content");
const contentRegister = document.querySelector(".register-content");

// Show modal
btnModal.addEventListener("click", function () {
    modal.classList.add("show");
    btnLogin.classList.add("active");
    btnRegister.classList.remove("active");
    contentRegister.classList.add("hidden");
    contentLogin.classList.remove("hidden");

    resetFormFields(inputEmailLogin, errEmail);
    resetFormFields(inputPasswordLogin, errPassword);
});

modalOverlay.addEventListener("click", function () {
    modal.classList.remove("show");
});

document.onkeyup = function (e) {
    if (e.key === "Escape") {
        modal.classList.remove("show");
    }
};

// Check Email
function isValidEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Check Password
function isValidPassword(password) {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(password);
}

// Reset form
function resetFormFields(inputElement, errElement) {
    inputElement.form.reset();
    if (inputElement.value === "") {
        errElement.innerText = "";
        inputElement.parentElement.classList.remove("error");
    }
}

// View password
function viewPassword(inputElement, eyeElement) {
    if (inputElement.getAttribute("type") === "password") {
        inputElement.setAttribute("type", "text");
        eyeElement.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        inputElement.setAttribute("type", "password");
        eyeElement.classList.replace("fa-eye-slash", "fa-eye");
    }
}
