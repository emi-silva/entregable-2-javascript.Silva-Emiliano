// Carga Correcta del JavaScript
console.log("JavaScript se esta ejecutando correctamente");

// CONSTANTES Y VARIABLES:
const nombreTienda = "Electronica Rosario"; 
let totalCarrito = 0;
let carrito = []; 

// ARRAY DE PRODUCTOS
const productos = [ 
  { id: 1, nombre: "Televisor", precio: 1200000, categoria: "Electrónica" },
  { id: 2, nombre: "PC Gamer", precio: 900000, categoria: "Computadoras" },
  { id: 3, nombre: "Celular", precio: 800000, categoria: "Telefonía" }
];

// Referencias al DOM
const listaCarrito = document.getElementById("lista-carrito");
const totalCarritoElemento = document.getElementById("total-carrito");

// FUNCION PARA AGREGAR PRODUCTOS AL CARRITO
function agregarAlCarrito(idProducto) { 
  const producto = productos.find(item => item.id === idProducto);
  
  if (producto) {
    carrito.push(producto);
    totalCarrito += producto.precio;
    actualizarCarritoDOM();
  }
}

// FUNCION PARA ELIMINAR PRODUCTOS DEL CARRITO
function eliminarDelCarrito(indice) { 
  const producto = carrito[indice];
  
  if (producto) {
    totalCarrito -= producto.precio;
    carrito.splice(indice, 1); // Eliminar producto del carrito
    actualizarCarritoDOM();
  }
}

// FUNCION PARA ACTUALIZAR EL CARRITO EN EL DOM
function actualizarCarritoDOM() { 
  // Limpiar contenido previo del carrito
  listaCarrito.innerHTML = "";

  carrito.forEach((item, indice) => {
    const itemElemento = document.createElement("div");
    itemElemento.className = "item-carrito";
    itemElemento.innerHTML = `
      ${item.nombre} - $${item.precio}
      <button onclick="eliminarDelCarrito(${indice})">Eliminar</button>
    `;
    listaCarrito.appendChild(itemElemento);
  });

  // Actualizar el total en el DOM
  totalCarritoElemento.textContent = totalCarrito;
}

// AGREGAR EVENTOS A BOTONES DE PRODUCTOS
document.querySelectorAll(".btn-agregar").forEach(boton => {
  boton.addEventListener("click", (e) => {
    const idProducto = parseInt(e.target.getAttribute("data-id"));
    agregarAlCarrito(idProducto);
  });
});
