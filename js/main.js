const nombreTienda = "Electrónica Rosario"; // Constantes y variables
let totalCarrito = 0;


let productos = [ // Array de productos
  { id: 1, nombre: "Televisor", precio: 1200000, categoria: "Electrónica" },
  { id: 2, nombre: "Laptop", precio: 900000, categoria: "Computadoras" },
  { id: 3, nombre: "Celular", precio: 800000, categoria: "Telefonía" }
];


let carrito = []; // Array del carrito


function agregarAlCarrito() { // Función para agregar producto al carrito
  const idProducto = parseInt(prompt("Ingrese el ID del producto que quiere agregar al carrito:"));
  const producto = productos.find(item => item.id === idProducto);
  
  if (producto) {
    carrito.push(producto);
    totalCarrito += producto.precio;
    console.log(`Producto agregado: ${producto.nombre} - $${producto.precio}`);
    alert(`${producto.nombre} el producto ha sido agregado al carrito.`);
  } else {
    console.log("Intento de agregar producto no encontrado.");
    alert("Producto no encontrado.");
  }
  mostrarCarrito();
}

function eliminarDelCarrito() { // Función para eliminar producto del carrito
  const idProducto = parseInt(prompt("Ingrese el ID del producto que desea eliminar del carrito:"));
  const indiceProducto = carrito.findIndex(item => item.id === idProducto);
  
  if (indiceProducto !== -1) {
    const producto = carrito[indiceProducto];
    const confirmarEliminacion = confirm(`¿Está seguro que desea eliminar ${producto.nombre} del carrito?`);
    
    if (confirmarEliminacion) {
      carrito.splice(indiceProducto, 1); // Eliminar producto del carrito
      totalCarrito -= producto.precio; // Restar precio del total
      console.log(`Producto eliminado: ${producto.nombre} - $${producto.precio}`);
      alert(`${producto.nombre} ha sido eliminado del carrito.`);
    } else {
      alert("El producto no fue eliminado.");
    }
  } else {
    console.log("Intento de eliminar producto no encontrado en el carrito.");
    alert("Producto no encontrado en el carrito.");
  }
  mostrarCarrito();
}


function mostrarCarrito() { // Función para mostrar el carrito
  console.log("=== Carrito ===");
  if (carrito.length === 0) {
    console.log("El carrito esta vacio.");
    alert("El carrito esta vacio.");
  } else {
    let itemsCarrito = "";
    carrito.forEach((item, indice) => {
      itemsCarrito += `${indice + 1}. ${item.nombre} - $${item.precio}\n`;
    });
    console.log(`Productos en el carrito:\n${itemsCarrito}`);
    alert(itemsCarrito + `\nTotal del carrito: $${totalCarrito}`);
  }
  console.log(`Total del carrito: $${totalCarrito}`);
}


function mostrarProductos() { // Función para mostrar productos disponibles
  let listaProductos = "=== Productos Disponibles ===\n";
  productos.forEach((producto) => {
    listaProductos += `${producto.id}. ${producto.nombre} - $${producto.precio} (${producto.categoria})\n`;
  });
  console.log(`Productos disponibles:\n${listaProductos}`);
  alert(listaProductos); // Muestra los productos disponibles en un alert
}


function iniciarCompra() { // Ejemplo de interacción con cuadros de diálogo
  let opcion;
  do {
    opcion = prompt(`Bienvenido a ${nombreTienda}\n1. Ver productos\n2. Agregar al carrito\n3. Eliminar del carrito\n4. Ver carrito\n5. Salir\nElija una opción:`);
    
    switch (opcion) {
      case '1':
        mostrarProductos(); // Mostrar productos disponibles
        break;
      case '2':
        agregarAlCarrito(); // Agregar productos al carrito
        break;
      case '3':
        eliminarDelCarrito(); // Eliminar productos del carrito
        break;
      case '4':
        mostrarCarrito(); // Mostrar carrito
        break;
      case '5':
        alert("Gracias por visitar nuestra tienda.");
        console.log("El usuario ha salido de la tienda.");
        break;
      default:
        alert("Opción no valida.");
        console.log("Opción no valida seleccionada.");
    }
  } while (opcion !== '5');
}

// Iniciar el proceso de compra
iniciarCompra();
