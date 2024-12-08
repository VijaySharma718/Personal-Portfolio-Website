// navbar

let texts = Array.from(document.querySelectorAll(".container h3"));
let i = 1; // starting from 1 because 0 already has is-visible, it would cause slight delay otherwise.

setInterval(() => {
  texts.forEach((text) => {
    text.classList.remove("info-about");
  });
  texts[i].classList.add("info-about");
  i += 1;
  if (i >= texts.length) {
    i = 0;
  }
}, 2000);

// text animation

const menuIcon = document.querySelector(".menuicon");
const menu = document.querySelector(".menu-container-responsive");
const closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener("click", () => {
  menu.style.display = "block";
});

closeIcon.addEventListener('click', () => {
  menu.style.display = 'none';
});

// scroll bar

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
