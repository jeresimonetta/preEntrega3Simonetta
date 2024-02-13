let contenedorRemeras = document.getElementById("contenedorRemeras")
let remeras = [
    {
        id: 1,
        nombre: "Remera Asuka",
        precio: 10000,
        img: "./img/remeraAsuka.png",
    },
    {
        id: 2,
        nombre: "Remera Crisis",
        precio: 10000,
        img: "./img/remeraCrisisBlanca.png",
    },
    {
        id: 3,
        nombre: "Remera Miau",
        precio: 12000,
        img: "./img/remeraMiau.png",
    },
    {
        id: 4,
        nombre: "Remera Michu",
        precio: 13000,
        img: "./img/remeraMichu.png",
    },
    {
        id: 5,
        nombre: "Remera Moonstick",
        precio: 9000,
        img: "./img/remeraMoonstick.png",
    },
    {
        id: 6,
        nombre: "Remera Roll",
        precio: 11000,
        img: "./img/remeraRoll.png",
    },
];

let carrito = []

remeras.forEach((remera)=> {
    let content = document.createElement("div");
    content.innerHTML = `
    <img src="${remera.img}">
    <p>${remera.nombre}</p>
    <p>$${remera.precio}</p>
    `;
    contenedorRemeras.append(content);
});