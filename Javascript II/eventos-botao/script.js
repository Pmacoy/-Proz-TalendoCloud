let keyText = document.querySelector("#key-text");
let codeText = document.querySelector("#code-text");
let quadrado = document.querySelector("#quadrado");
let distanciaDaEsquerda = 0

// document.addEventListener("keyup",(e)=> {
//     keyText.innerText = e.key;
// 	codeText.innerText = e.code;
//     console.log(e);
//     console.log(e.code);
// })

Document.addEventListener("keydown", (e) => {
    if(e.code == "ArrowRight"){
	    console.log("Apertou a seta à direita");
    }
})