const player = document.getElementById("machado")
let posicaoX = 0

addEventListener('keydown', ad)
function ad(event) {
    if(event.key === 'd'){
        posicaoX += 10
        player.style.left = posicaoX + 'px'
    }
}


