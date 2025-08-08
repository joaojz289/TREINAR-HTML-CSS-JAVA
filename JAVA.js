const cavalheiro = document.querySelector(".cavalheiro");
const caveira = document.querySelector('.caveira');

const pulo = () =>{

    cavalheiro.classList.add('pulo');

    setTimeout(() => {

    cavalheiro.classList.remove('pulo');
    
    },500);
}

const loop = setInterval(() => {
   const caveiraPosition = caveira.offsetLeft;
   const cavalheiroPosition = +window.getComputedStyle(cavalheiro).bottom.replace('px', '');

   if (caveiraPosition <= 50 && cavalheiroPosition >0 && cavalheiroPosition < 120) {

     caveira.style.animation = 'none';
     caveira.style.left = `${caveiraPosition}px`;

     cavalheiro.style.animation = 'none';
     cavalheiro.style.bottom = `${cavalheiroPosition}px`;
   }
}, 10);


document.addEventListener('keydown',pulo);
