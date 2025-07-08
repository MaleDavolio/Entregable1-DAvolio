// Simulador de compra - Lámparas Lunalu

// Variables y constantes
const productos = [
  { id: 1, nombre: "Lámpara Luna Pequeña", precio: 5000 },
  { id: 2, nombre: "Lámpara Luna Mediana", precio: 8000 },
  { id: 3, nombre: "Lámpara Luna Grande", precio: 12000 }
];

let carrito = [];

// Función 1: Mostrar productos disponibles
function mostrarProductos() {
  console.log("Catálogo de productos disponibles:");
  productos.forEach(producto => {
    console.log(`${producto.id}. ${producto.nombre} - $${producto.precio}`);
  });
}

// Función 2: Agregar productos al carrito
function agregarAlCarrito() {
  let continuar = true;
  while (continuar) {
    let seleccion = parseInt(prompt("Ingrese el número del producto que desea comprar:\n" + productos.map(p => `${p.id}. ${p.nombre} - $${p.precio}`).join("\n")));

    let producto = productos.find(p => p.id === seleccion);

    if (producto) {
      let cantidad = parseInt(prompt(`¿Cuántas unidades de ${producto.nombre} desea comprar?`));
      if (!isNaN(cantidad) && cantidad > 0) {
        carrito.push({ ...producto, cantidad });
        alert(`${cantidad} unidad(es) de ${producto.nombre} se agregaron al carrito.`);
      } else {
        alert("Cantidad inválida.");
      }
    } else {
      alert("Producto no encontrado.");
    }

    continuar = confirm("¿Desea agregar otro producto?");
  }
}

// Función 3: Calcular total con posible descuento
function calcularTotal() {
  let total = 0;
  console.log("Detalle del carrito:");
  carrito.forEach(item => {
    let subtotal = item.precio * item.cantidad;
    console.log(`${item.nombre} x${item.cantidad} = $${subtotal}`);
    total += subtotal;
  });

  let aplicarDescuento = confirm("¿Tiene un código de descuento del 10%?");
  if (aplicarDescuento) {
    total *= 0.9;
    alert("Descuento aplicado: 10% off");
  }

  alert(`El total a pagar es: $${total.toFixed(2)}`);
  console.log(`Total final: $${total.toFixed(2)}`);
}

// Llamadas a las funciones
mostrarProductos();
agregarAlCarrito();
calcularTotal();
