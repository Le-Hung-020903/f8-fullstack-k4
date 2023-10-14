const openForm = document.querySelector(".signin__btn");
const form = document.querySelector(".signin-register-btn");
const login = document.getElementById("signin-block");
const register = document.querySelector(".register-block");
const overlay = document.querySelector(".signin-register__overlay");
const tabNavItems = form.querySelectorAll(".signin-register__nav a");
const loginForm = form.querySelector(".form-input-signin");
const fidelNameList = loginForm.querySelectorAll(".filed-item");
const togglePassword = document.querySelector(".show-hide-password");
let currentTab;

const handleValidateForm = function (current) {
    const emailEl = current.querySelector(".email");
    const passwordEl = current.querySelector(".password");
    const email = emailEl.value;
    const password = passwordEl.value;

    let errors = {};
    if (!email.trim()) {
        errors.email = "Vui lòng nhập email";
    }
    if (!password.trim()) {
        errors.password = "Vui lòng nhập password";
    }
    const formGroupList = login.querySelectorAll(".form-group");
    formGroupList.forEach((element) => {
        const fidelName = element.querySelector(".filed-item").classList[1];
        element.classList.remove("has-error");
        element.querySelector(".error").innerText = "";
        if (errors[fidelName]) {
            element.classList.add("has-error");
            element.querySelector(".error").innerText = errors[fidelName];
        }
    });
    return errors;
};

// đóng mở form
const closeForm = () => form.classList.remove("show");
openForm.addEventListener("click", function () {
    form.classList.add("show");
});
overlay.addEventListener("click", closeForm);

// chuyển tab
tabNavItems.forEach((navItem) => {
    navItem.addEventListener("click", function (e) {
        e.preventDefault();
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

        // reset value và error về lại trạng thái ban đầu
        if (currentTab) {
            if (hash !== currentTab) {
                const formGroupList = login.querySelectorAll(".form-group");
                formGroupList.forEach((element) => {
                    element.classList.remove("has-error");
                    element.querySelector(".error").innerText = "";
                    element.querySelector(".filed-item").value = "";
                });
                loginForm.querySelector(".message").innerText = "";
                currentTab = hash;
            }
        } else {
            currentTab = hash;
        }
    });
});

// form login
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const errors = handleValidateForm(this);
    if (!Object.keys(errors).length) {
        loginForm.querySelector(".message").innerText = "Đăng nhập thành công";
    } else {
        loginForm.querySelector(".message").innerText = "";
    }
});
// lắng nghe sự kiện điền ô input
fidelNameList.forEach((fidelName) => {
    fidelName.addEventListener("input", function () {
        handleValidateForm(loginForm);
    });
});

// chức năng hiển thị password
togglePassword.addEventListener("click", function () {
    const password = loginForm.querySelector(".password");
    if (this.classList.contains("hide")) {
        password.type = "text";
        this.classList.remove("hide");
    } else {
        password.type = "password";
        this.classList.add("hide");
    }
});
