let qtdeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
    quantidade: 1,
    valor: 11.66,
}

qtdeSubtotal.innerText = subtotalInfo.quantidade + "itens";
valorSubtotal.innerText = subtotalInfo.valor;

let btnAdicionarProduto01 = document.querySelector('#btn-adicionar-produto-01');
let quantidadeProdutos01 = document.querySelector('#quantidade-produto-01');
let btnSubtrairProduto01 = document.querySelector('#btn-subtrair-produto-01');

function adicionarUm(){
    quantidadeProdutos01.value = Number
    (quantidadeProdutos01.value) + 1;
}

function subtrairUm() {
      if (quantidadeProdutos01.value > 0) {
        quantidadeProdutos01.value = Number
        (quantidadeProdutos01.value) - 1;
    }
}

btnAdicionarProduto01.addEventListener('click',adicionarUm);
btnSubtrairProduto01.addEventListener('click',subtrairUm);
