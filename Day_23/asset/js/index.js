var btnSignin = document.querySelector(".signin__btn");
var modal = document.querySelector(".signin-register-btn");
var openModal = document.querySelector(".show");
var sign_in = document.querySelector(".signin-block");
var register = document.querySelector(".register-block");
var overlay = modal.querySelector(".signin-register__overlay");
var tabNavItems = modal.querySelectorAll(".signin-register__nav a");

var closeModal = function () {
    modal.classList.remove("show");
};
// hiện modal
btnSignin.addEventListener("click", function () {
    modal.classList.add("show");
});
// bấm overlay tắt modal
overlay.addEventListener("click", closeModal);
// chuyển tab tương ứng
tabNavItems.forEach(function (tabNavItem) {
    tabNavItem.addEventListener("click", function () {
        var activeTab = modal.querySelector(".signin-register__nav a.active");
        activeTab.classList.remove("active");
        this.classList.add("active");

        var hash = this.getAttribute("href");
        var tab = modal.querySelector(
            ".signin-register__inner .tab-panel" + hash
        );
        var tabActive = modal.querySelector(
            ".signin-register__inner .tab-panel.active"
        );
        tabActive.classList.remove("active");
        tab.classList.add("active");
    });
});
