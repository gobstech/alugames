let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");
    let nomeJogo = gameClicado.querySelector(".dashboard__item__name");
    let textoAlugar = "Alugar";
    let textoDevolver = "Devolver";
    
    if (imagem.classList.contains("dashboard__item__img--rented")) {
        if (confirm(`Você tem certeza de que deseja devolver o jogo ${nomeJogo.textContent}?`));
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.innerHTML = textoAlugar;
        jogosAlugados--;
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.innerHTML = textoDevolver;
        jogosAlugados++;
    }

    contarEExibirJogosAlugados();
}

document.addEventListener("DOMContentLoaded", function () {
    jogosAlugados = document.querySelectorAll(".dashboard__item__img--rented").length;
    contarEExibirJogosAlugados();
});

function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x , y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

console.log(ordenarNumeros(3, 10, 7));