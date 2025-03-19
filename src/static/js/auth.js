
// JavaScript cho đăng ký/đăng nhập

document.addEventListener("DOMContentLoaded", function () {
    let passwordToggles = document.querySelectorAll(".toggle-password");

    passwordToggles.forEach(toggle => {
        toggle.addEventListener("click", function () {
            let inputField = this.previousElementSibling; // Lấy input password trước nó
            if (inputField.type === "password") {
                inputField.type = "text";
                this.textContent = "🙈"; // Đổi icon thành con mắt đóng
            } else {
                inputField.type = "password";
                this.textContent = "👁️"; // Đổi icon thành con mắt mở
            }
        });
    });
});