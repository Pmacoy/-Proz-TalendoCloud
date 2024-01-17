let titulo = document.createElement("h1");

titulo.id = "titulo";
titulo.innerText = "Loja dos PCs";

let body = document.querySelector("body");

body.appendChild(titulo);

let pcs = document.createElement("div");

pcs.innerHTML = `   
    <div>
        <h2>Laptop Dell</h2>
        <img src="https://s3.chip7.pt/274083/conversions/c7KP9TQj-full.jpg" alt="Dell-Laptop" />
        <p> Intel® Core i5-1135G7 * Ecrã de 35,6 cm (14") Full HD (1920 x 1080) * 8GB RAM DDR4-SDRAM * 256GB SSD </p>
        <p id="precododell">R$ 2.980.00</p>
    </div>
`;

body.appendChild(pcs);
