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

// let menuListbutton = document.getElementById("menuListbutton")
//         menuListbutton.style.maxHeight = "0px";

//         function toggleMenu(){
//             if(menuListbutton.style.maxHeight == "0px")
//             {
//                 menuListbutton.style.maxHeight = "300px";
//             }
//             else{
//                 menuListbutton.style.maxHeight = "0px";
//             }
//           }

// const menuButton = document.getElementById('menubutton');
// const menuList = document.getElementById('menuListbutton');

// menubutton.addEventListener('click', () => {
//   menuListbutton.classList.toggle('active');
// });







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
