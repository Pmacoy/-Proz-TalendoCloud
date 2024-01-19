const arrayPostagens = [
  {
    titulo: "Outback Steakhouse",
    subtitulo: "Explore o seu #MOMENTOUTBACK",
    data: "10/01/2024",
    texto: "Bom mesmo é curtir um #MOMENTOUTBACK com quem a gente gosta!"
  },
  {
    titulo: "McDonald's ",
    subtitulo: "Peça meu Méqui",
    data: "10/01/2024",
    texto: "Bateu aquela #FomedeMéqui"
  },
  {
    titulo: "Restaurante Sal e Brasa ",
    subtitulo: "A melhor esfiha do Brasil",
    data: "10/01/2024",
    texto: "É assim que a mágica acontece."
  },
  {
    titulo: "Habib´s ",
    subtitulo: "O melhor Self Service",
    data: "10/01/2024",
    texto: "Bateu aquela #FomedeMéqui"
  },
  {
    titulo: "Subway",
    subtitulo: "Tenha uma experiencia incrivel",
    data: "10/01/2024",
    texto: "Subveg está de volta"
  },
  {
    titulo: "Starbucks",
    subtitulo: "Um bom dia começa com um café",
    data: "10/01/2024",
    texto: "Um café com carinho"
  },
  {
    titulo: "Nal Frutos do Mar",
    subtitulo: "Tenha um experiencia incrível",
    data: "10/01/2024",
    texto: "A melhor culinária"
  },
  {
    titulo: "Nal Frutos do Mar",
    subtitulo: "Tenha um experiencia incrível",
    data: "10/01/2024",
    texto: "A melhor culinária"
  },
  {
    titulo: "Pizzaria Piratas",
    subtitulo: "Mais de 100 sabores pra você se deliciar",
    data: "10/06/2024",
    texto: "Sua melhor experiência!"
  },
  {
    titulo: "Pasteko",
    subtitulo: "O pastel que é gigante",
    data: "10/06/2024",
    texto: "Compre seu pastel tamanho familia. Entregamos em Portugal"
  }, 
  {
    titulo: "China in box",
    subtitulo: "A maior variedade de hot roll",
    data: "10/06/2024",
    texto: "Não tem nada igual"
  }, 
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
]

arrayPostagens.forEach(function(post){
    // Etapa 1: Criar um elemento
  const novoPost = document.createElement('article');

  //Etapa 2: Manipular o elemento
  novoPost.innerHTML = `<h3>${post.titulo}</h3>
  <p class="subtitulo">${post.subtitulo}</p>
  <div class="data">${post.data}</div>
  <p>${post.texto}</p>
  `
  // Etapa 3: Adicionar no dom
  const elementoMain = document.querySelector('main');

  elementoMain.appendChild(novoPost);
})



/*for (let i = 0; i < arrayPostagens.length; i++) {
  // Etapa 1: Criar um elemento
const novoPost = document.createElement('article');

//Etapa 2: Manipular o elemento
novoPost.innerHTML = `<h3>${arrayPostagens[i].titulo}</h3>
<p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
<div class="data">${arrayPostagens[i].data}</div>
<p>${arrayPostagens[i].texto}</p>
`
// Etapa 3: Adicionar no dom
const elementoMain = document.querySelector('main');

elementoMain.appendChild(novoPost);

}*/

// Etapa 1: Criar um elemento 2
//const novoPost2 = document.createElement('article');

//Etapa 2: Manipular o elemento 2
//novoPost2.innerHTML = `<h3>Make Hommus. Not War</h3>
//<p class="subtitulo">Só delivery, para curtir em casa!</p>
//<div class="data">18/08/2022</div>
//<p>Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina.</p>
//`
// Etapa 3: Adicionar no dom 2
//const elementoMain2 = document.querySelector('main');

//elementoMain.appendChild(novoPost2);

