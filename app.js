const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

const popUpBg = document.querySelector(".popUpBg");

function showHamburger() {
  hamburger.style.display = "block";
  close.style.display = "none";

  popUpBg.style.visibility = "hidden";
}

hamburger.addEventListener("click", function () {
  hamburger.style.display = "none";
  close.style.display = "block";

  popUpBg.style.visibility = "visible";
});

close.addEventListener("click", function () {
  showHamburger();
});

document.addEventListener("keydown", function (event) {
  if (event.key == "Escape") {
    showHamburger();
  }
});

window.addEventListener("click", function (event) {
  if (event.target == popUpBg) {
    showHamburger();
  }
});
