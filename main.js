const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");


for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {


        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }


        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}


const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-04-19T23:59:59");




contadores[0].textContent = calculaTempo(tempoObjetivo1);


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);


    segundos %= 60;
    minutos %= 60;
    horas %= 24;
 
 return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}
const caixaPrincipal = document.querySelector(“.caixa-
principal”);

const caixaPerguntas = document.querySelector(“.caixa-
perguntas”);

const caixaAlternativas = document.querySelector(“.caixa-
alternativas”);

const caixaResultado = document.querySelector(“.caixa-
resultado”);

const textoResultado = document.querySelector(“.texto-
resultado”);

const perguntas = [
{
enunciado: “Pergunta 1”,
alternativas: [“Alternativa 1”, “Alternativa 2”],
},
{
enunciado: “Pergunta 2”,
alternativas: [“Alternativa 1”, “Alternativa 2”],
},
];
