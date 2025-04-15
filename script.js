const mode = document.querySelector("#mode");
const body = document.querySelector('#body');
const sun = document.getElementById('mode');

// mode dark-light
let modeValue = 'light';
mode.addEventListener("click", () => {
    if (modeValue === 'light') {
        mode.innerHTML = '<i class="fa-solid fa-cloud-moon"></i>';
        body.style.background = "black"
        body.style.color = "white"
        sun.style.color = 'white';
        modeValue = 'dark' ;

    } else {
        mode.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
        modeValue = 'light'
        body.style.background = "white"
        body.style.color = "black"
        sun.style.color = 'black'
      }
// romove magic background  
    magicbg.classList.remove('magic') ;
})

// -------------------------------------------------------//
const magic = document.getElementById('magic');
const magicbg = document.getElementById('body');
let mew = document.querySelectorAll('.mew');

// magic bg //
let bg = true;
magic.addEventListener( 'click' , () => {
  bg == true ? magicbg.classList.add('magic') : magicbg.classList.remove('magic'); 
  mew.forEach( (m) => {
      m.style.boxShadow = '-3px 3px 10px #000';
  });
});

