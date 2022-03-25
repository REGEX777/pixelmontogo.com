const item1 = document.querySelector("#carousel-item-1");
const item2 = document.querySelector("#carousel-item-2");
const item3 = document.querySelector("#carousel-item-3");
const item4 = document.querySelector("#carousel-item-4");

const header = document.querySelector("header");

let currentItem = item1;
let sliderCooldown = false;

const button1 = document.querySelectorAll(".carousel-button-1");
const button2 = document.querySelectorAll(".carousel-button-2");
const button3 = document.querySelectorAll(".carousel-button-3");
const button4 = document.querySelectorAll(".carousel-button-4");

button1.forEach(function(button) {
    button.addEventListener("click", function() {
        if (currentItem !== item1) {
            currentItem.classList.add("animation-fadeout");
            currentItem = item1;

            //header.style.background = "url(media/download-bg.png) no-repeat bottom center";
            //header.style.backgroundSize = "cover";

            startCooldown();
        }
    });
});

item1.addEventListener("animationend", (event) => {
    if (event.type === "animationend") {
        if (event.animationName === "fadeout") {
            item1.classList.add("hidden");
            item1.classList.remove("animation-fadeout");

            currentItem.classList.remove("hidden");
            currentItem.classList.add("animation-fadein");
        } else if (event.animationName === "fadein") {
            item1.classList.remove("animation-fadein");
        }
    }
});

button2.forEach(function(button) {
    button.addEventListener("click", function() {
        if (currentItem !== item2) {
            currentItem.classList.add("animation-fadeout");
            currentItem = item2;

            //header.style.background = "url(media/bg-head-2.png) no-repeat bottom center";
            //header.style.backgroundSize = "cover";

            startCooldown();
        }
    });
});

item2.addEventListener("animationend", (event) => {
    if (event.type === "animationend") {
        if (event.animationName === "fadeout") {
            item2.classList.add("hidden");
            item2.classList.remove("animation-fadeout");

            currentItem.classList.remove("hidden");
            currentItem.classList.add("animation-fadein");
        } else if (event.animationName === "fadein") {
            item2.classList.remove("animation-fadein");
        }
    }
});

button3.forEach(function(button) {
    button.addEventListener("click", function() {
        if (currentItem !== item3) {
            currentItem.classList.add("animation-fadeout");
            currentItem = item3;

            //header.style.background = "url(media/bg-head-3.png) no-repeat bottom center";
            //header.style.backgroundSize = "cover";

            startCooldown();
        }
    });
});

item3.addEventListener("animationend", (event) => {
    if (event.type === "animationend") {
        if (event.animationName === "fadeout") {
            item3.classList.add("hidden");
            item3.classList.remove("animation-fadeout");

            currentItem.classList.remove("hidden");
            currentItem.classList.add("animation-fadein");
        } else if (event.animationName === "fadein") {
            item3.classList.remove("animation-fadein");
        }
    }
});

button4.forEach(function(button) {
    button.addEventListener("click", function() {
        if (currentItem !== item4) {
            currentItem.classList.add("animation-fadeout");
            currentItem = item4;

            //header.style.background = "url(media/bg-head-4.png) no-repeat bottom center";
            //header.style.backgroundSize = "cover";

            startCooldown();
        }
    });
});

item4.addEventListener("animationend", (event) => {
    if (event.type === "animationend") {
        if (event.animationName === "fadeout") {
            item4.classList.add("hidden");
            item4.classList.remove("animation-fadeout");

            currentItem.classList.remove("hidden");
            currentItem.classList.add("animation-fadein");
        } else if (event.animationName === "fadein") {
            item4.classList.remove("animation-fadein");
        }
    }
});

// Automatically go to next page in the carousel
//setInterval(autoSlide, 12000);

function autoSlide() {
    if (!sliderCooldown)
        switch (currentItem) {
            case item1:
                button2[0].click();
                break;
            case item2:
                button3[1].click();
                break;
            case item3:
                button4[2].click();
                break;
            case item4:
                button1[3].click();
                break;
        }
}

// Slider Cooldown
function startCooldown() {
    if (!sliderCooldown) {
        sliderCooldown = true;
        setInterval(endCooldown, 12000);
    }
}

function endCooldown() {
    sliderCooldown = false;
}