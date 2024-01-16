const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  }, //objeto
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



const posts = document.getElementById('posts')

console.log(posts)

posts.style.background = 'blue';

const titulo = document.getElementsByTagName('h2')

console.log(titulo, 
  'esse é o titulo')

titulo[0].style.background = 'red';
titulo[1].style.color = 'blue';


const post01 = document.getElementById('post01')
post01.style.background = 'pink';

const author = document.getElementsByClassName('post-autor')
console.log(author, 'aqui é o autor')
author[0].style.color = 'yellow';





