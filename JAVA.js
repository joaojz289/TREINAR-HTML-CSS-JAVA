const machado = document.querySelector(".machado");
const caveira = document.querySelector('.caveira');

const pulo = () =>{

    machado.classList.add('pulo');

    setTimeout(() => {

    machado.classList.remove('pulo');
    
    },500);
}

const loop = setInterval(() => {
   const caveiraPosition = caveira.offsetLeft;
   
   if (caveiraPosition <= 50) {
     caveira.style.animation = 'none';
     caveira.style.left = `${caveiraPosition}px`;
   }
}, 10);


document.addEventListener('keydown',pulo);
