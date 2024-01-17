let h2elem = document.querySelector("h2");
h2elem.style.color = "red ";

let botao = document.querySelector("button");
botao.style.color = "green ";
botao.style.backgroundColor = "black ";
botao.style.borderRadius = "10px";

let user = document.querySelector("label");
user.style.color = "blue";

let login = document.querySelector("#login-usuario");
let errorMessage = document.querySelector(".error-text");
login.classList.add('error')
errorMessage.classList.add('visible');
//errorMessage.classList.remove('visible');

let errorSenha = document.querySelector("#login-senha");
let senhaMessage = document.querySelector(".error-text2");
errorSenha.classList.add('error');
senhaMessage.classList.add('visible');
//senhaMessage.classList.remove('visible');










