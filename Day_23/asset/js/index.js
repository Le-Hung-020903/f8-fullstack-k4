var btnModal = document.querySelector(".signin__btn");
var signin = document.querySelector(".signin-block");
var register = document.querySelector(".register-block");
var overlay = document.querySelector(".signin-register__overlay");
var modalSigninRegister = document.querySelector(".signin-register-btn");
var showPassword = document.querySelector(".form-group__password");
var passwordInput = document.querySelector(".password-input");
var emailInput = document.querySelector(".form-input-signin #email");
var registerBtn = document.querySelector(".form-input-signin #password");

// hiện thông tin đăng nhập
btnModal.addEventListener("click", function () {
    modalSigninRegister.classList.add("show");
    register.classList.add("d-none");
    signin.classList.add("active");

    emailInput.form.reset();
    if (emailInput.value === "") {
    }
});
//bấm vào nút đăng ký
// registerBtn.addEventListener("click", function () {
//     registerBtn.classList.add("active");
//     signin.classList.remove("active");
// });
// tắt overlay
overlay.addEventListener("click", function () {
    modalSigninRegister.classList.remove("show");
});
// hiển thị mật khẩu
showPassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});
