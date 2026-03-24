const form = document.querySelector(".form");
const input = document.querySelector(".form input");
const error = document.querySelector(".error");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const value = input.value.trim();

    const pattern = /^[^\s@]+[^\s@]+\.[^\s@]+$/;

    if (value === "" || !pattern.test(value)) {
        error.style.display = "block";
    } else {
        error.style.display = "none";
        errorIcon.style.display = "none";
    }
    
});