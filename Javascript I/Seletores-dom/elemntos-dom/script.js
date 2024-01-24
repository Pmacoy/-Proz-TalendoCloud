// exemplo de classList
//let div = document.querySelector("div");
//let incluiClasse = div.classList.contains("borda-azul");
//div.classList.add("texto-novo");
// div.classList.remove("borda-azul");

// div.classList.toggle("borda-azul");
// div.classList.toggle("borda-azul");

// console.log(incluiClasse); 

//div.style.color = "black";
//div.style.color = "";
//div.style.fontSize = "16px";

// Exemplo de eventos de clicar
// let  numero = document.querySelector("h1");
// let botao = document.querySelector("button");
// let contagem = 0;

// Função normal
// function adicionarUm() {
//     contagem = contagem + 1;
//     numero.innerText = contagem
// }

// botao.addEventListener("click", adicionarUm);

// Usando a funcção dentro do addEventListener
// botao.addEventListener("click", function() {
//     contagem = contagem + 1;
//     numero.innerText = contagem;
// })

// arrow function
// botao.addEventListener("click", () => {
//     contagem = contagem + 1;
//     numero.innerText = contagem;
// })

// Exemplo eventos com botões
// let button = document.querySelector("button");
// let span = document.querySelector("span");
// let section = document.querySelector("section");

// function mostrarSpan(){
//     span.style.opacity = "100"
// }
// button.addEventListener("mouseover", mostrarSpan);

// function ocultarSpan(){
//     span.style.opacity = "0"
// }
// button.addEventListener("mouseout", ocultarSpan);

// function fazerUmClick(){
//     section.innerText = "Fez um click simples!"
// }
// button.addEventListener("click", fazerUmClick);

// function fazerDoisClicks(){
//     section.innerText = "Fez um duplo click!"
// }
// button.addEventListener("dblclick", fazerDoisClicks);

let elementoClicado = document.getElementById("elemento-clicado");
let botaoTempo = document.getElementById("botao-tempo");
let tempo = document.getElementById("tempo");

botaoTempo.addEventListener("click", function(e){
    console.log(e.timeStamp);
    tempo.innerText = e.timeStamp;
    console.log(e.target)
    elementoClicado.innerText = e.target.id
});