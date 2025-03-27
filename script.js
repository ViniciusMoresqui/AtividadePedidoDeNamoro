function sim(){
 window.location.href='vaidarnamoro.html';
}

function desvia(){
    let btn = document.getElementById("btn");
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 100) + 'vh';
    btn.style.left = geraPosicao(10, 100) + 'vh';
    console.log(btn)
    console.log("Opa desvie :D");
}

function geraPosicao(min, max){
    return Math.random() * (max - min) + min;
}