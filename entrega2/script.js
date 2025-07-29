const productos = [
    {
    id: "Difusor de Pared",
    titulo: "Difusor de Pared",
    imagen: "./img/difusor1.jpeg",
    precio: 30000

},
 {
    id: "Espejo Saturno",
    titulo: "Espejo Saturno",
    imagen: "./img/espejosaturno.jpeg",
    precio: 30000},
 {

    id: "Velador Neptuno",
    titulo: "Velador Neptuno",
    imagen: "./img/veladorneptuno.jpeg",
    precio: 30000
},
 {
    id: "Velador Nordico",
    titulo: "Velador Nordico",
    imagen: "./img/veladornodico.jpg",
    precio: 30000}


];
const botonesAgregar = document.querySelectorAll(".producto-agregar");

botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
});
let carrito = [];

function agregarAlCarrito(e) {
    const boton = e.currentTarget;
    const producto = boton.closest(".producto");

    const titulo = producto.querySelector(".producto-titulo").textContent;
    const precio = producto.querySelector(".producto-precio").textContent;
    const imagen = producto.querySelector(".producto-imagen").src;

    const itemCarrito = {
        titulo,
        precio,
        imagen,
        cantidad: 1
    };

    // Buscar si ya está
    const existe = carrito.find(p => p.titulo === titulo);
    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push(itemCarrito);
    }

    actualizarNumerito();
    guardarEnLocalStorage();
}
function actualizarNumerito() {
    const numerito = document.querySelector(".numerito");
    const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    numerito.textContent = total;
}
function guardarEnLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarritoDesdeLocalStorage() {
    const data = localStorage.getItem("carrito");
    if (data) {
        carrito = JSON.parse(data);
        actualizarNumerito();
    }
}
cargarCarritoDesdeLocalStorage();
document.addEventListener("DOMContentLoaded", () => {
  const productosDOM = document.querySelectorAll(".producto");

  productosDOM.forEach(producto => {
    producto.addEventListener("click", () => {
      productosDOM.forEach(p => p.classList.remove("seleccionado")); // Quita selección previa
      producto.classList.add("seleccionado"); // Aplica selección al clickeado
    });
  });
});

