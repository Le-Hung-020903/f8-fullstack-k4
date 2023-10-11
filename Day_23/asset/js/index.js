const openForm = document.querySelector(".signin__btn");
const form = document.querySelector(".signin-register-btn");
const login = document.querySelector(".signin-block");
const register = document.querySelector(".register-block");
const overlay = document.querySelector(".signin-register__overlay");
const tabNavItems = form.querySelectorAll(".signin-register__nav a");
const loginForm = form.querySelector(".form-input-signin");

// đóng mở form
const closeForm = () => form.classList.remove("show");

openForm.addEventListener("click", function () {
    form.classList.add("show");
});
overlay.addEventListener("click", closeForm);

// chuyển tab
tabNavItems.forEach((navItem) => {
    navItem.addEventListener("click", function () {
        const hash = this.getAttribute("href");
        const navItemActive = form.querySelector(
            ".signin-register__nav a.active"
        );
        navItemActive.classList.remove("active");
        this.classList.add("active");
        const tabPanel = form.querySelector(".tab-panel" + hash);
        const tabPanelActive = form.querySelector(".tab-panel.active");
        tabPanelActive.classList.remove("active");
        tabPanel.classList.add("active");
    });
});

// form login
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailEl = this.querySelector(".email-input");
    const passwordEl = this.querySelector(".password-input");
    const email = emailEl.value;
    const password = passwordEl.value;

    let errors = {};
    if (!email.trim()) {
        errors.email = "Vui lòng nhập email";
    }
    if (!password.trim()) {
        errors.password = "Vui lòng nhập password";
    }
    console.log(errors);
    const formGroup = login.querySelectorAll(".form-group");
    console.log(formGroup);
});
