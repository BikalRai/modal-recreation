const modalBtns = document.querySelectorAll("button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
console.log(modalBtns);

modalBtns.forEach(function (ele) {
    ele.addEventListener("click", function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
});

closeBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    }
});

overlay.addEventListener("click", function (e) {
    if (e.button === 0) {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    }
});
