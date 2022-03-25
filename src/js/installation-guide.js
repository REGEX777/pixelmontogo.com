const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const step3 = document.getElementById("step-3");
const step4 = document.getElementById("step-4");

const btn_step1 = document.querySelectorAll(".step-1-btn");
const btn_step2 = document.querySelectorAll(".step-2-btn");
const btn_step3 = document.querySelectorAll(".step-3-btn");
const btn_step4 = document.querySelectorAll(".step-4-btn");

btn_step1.forEach(function (button) {
    button.addEventListener("click", () => {
        step1.style.display = "flex";
        step2.style.display = "none";
        step3.style.display = "none";
        step4.style.display = "none";
    });
});

btn_step2.forEach(function (button) {
    button.addEventListener("click", () => {
        step1.style.display = "none";
        step2.style.display = "flex";
        step3.style.display = "none";
        step4.style.display = "none";
    });
});

btn_step3.forEach(function (button) {
    button.addEventListener("click", () => {
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "flex";
        step4.style.display = "none";
    });
});

btn_step4.forEach(function (button) {
    button.addEventListener("click", () => {
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "none";
        step4.style.display = "flex";
    });
});