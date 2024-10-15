// navbar 

let texts = Array.from(document.querySelectorAll('.container h3'));
let i = 1; // starting from 1 because 0 already has is-visible, it would cause slight delay otherwise.

setInterval(() => {
  texts.forEach(text => {
    text.classList.remove('info-about');
  });
  texts[i].classList.add('info-about');
  i += 1;
  if (i >= texts.length) {
    i = 0;
  }
}, 2000);





// text animation

let menuListbutton = document.getElementById("menuListbutton")
        menuListbutton.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuListbutton.style.maxHeight == "0px")
            {
                menuListbutton.style.maxHeight = "300px";
            }
            else{
                menuListbutton.style.maxHeight = "0px";
            }
          }



          


          