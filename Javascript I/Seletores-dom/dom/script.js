let elementoH1 = document.querySelector("h1");
let elementoMain = document.querySelector("main");
elementoH1.innerHTML = `
<h2>Novo Subtitulo</h2>
<ul>
    <li>Elemento em lista Js 01</li>
    <li>Elemento em lista Js 02</li>
    <li>Elemento em lista Js 03</li>
</ul>
`
console.log(elementoH1);
console.log(elementoH1.innerText);
console.log(elementoMain);
console.log(elementoMain.innerText);
console.log(elementoMain.innerHTML);