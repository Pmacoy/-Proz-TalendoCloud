// Etapa 1: Criar um elemento
const novoPost = document.createElement('article');

//Etapa 2: Manipular o elemento
novoPost.innerHTML = ``

// Etapa 3: Adicionar no dom
const elementoMain = document.querySelector('main');

elementoMain.appendChild(novoPost);