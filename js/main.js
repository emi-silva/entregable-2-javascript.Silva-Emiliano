console.log("Script cargado"); // Confirmación de carga

// Productos disponibles
const productos = [
    { id: 1, nombre: "Televisor", precio: 1200000, categoria: "Electrónica" },
    { id: 2, nombre: "PC Gamer", precio: 900000, categoria: "Computadoras" },
    { id: 3, nombre: "Celular", precio: 800000, categoria: "Telefonía" }
];

// Inicializar carrito desde localStorage o vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para mostrar los productos en el DOM
function mostrarProductos() {
    const productosContainer = document.getElementById("productos-container");
    productosContainer.innerHTML = ""; // Limpiar el contenedor

    productos.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");
        productoDiv.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Categoría: ${producto.categoria}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        productosContainer.appendChild(productoDiv);
    });
}

// Función para agregar productos al carrito y guardar en localStorage
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert(`${producto.nombre} ha sido agregado al carrito.`);
    }
}

// Función para actualizar el DOM del carrito
function mostrarCarrito() {
    const carritoContainer = document.getElementById("carrito-container");
    carritoContainer.innerHTML = ""; // Limpiar el contenedor

    let total = 0;
    carrito.forEach((producto, index) => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");
        productoDiv.innerHTML = `
            <p>${producto.nombre} - $${producto.precio}</p>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        carritoContainer.appendChild(productoDiv);
        total += producto.precio;
    });

    document.getElementById("total").textContent = `Total: $${total}`;
}

// Función para eliminar productos del carrito y actualizar en localStorage
function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto eliminado del carrito.");
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
    localStorage.removeItem("carrito");
    alert("Carrito vaciado.");
}

// Función para actualizar el carrito en el DOM y localStorage
function actualizarCarrito() {
    mostrarCarrito();
}

// Cargar los productos y el carrito inicial al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos();
    mostrarCarrito();
});
