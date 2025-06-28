let carrito = [];
let cantidadCarrito = 0;

function agregarAlCarrito(producto) {
    carrito.push(producto);
    cantidadCarrito++;
    document.getElementById('cantidad-carrito').textContent = cantidadCarrito;
}

function mostrarCarrito() {
    let carritoModal = document.getElementById('carrito-modal');
    let carritoLista = document.getElementById('carrito-lista');
    
    carritoLista.innerHTML = ''; // Limpiar la lista
    carrito.forEach((producto, index) => {
        let li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = () => eliminarDelCarrito(index);
        li.appendChild(btnEliminar);
        carritoLista.appendChild(li);
    });

    carritoModal.style.display = 'flex';
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    cantidadCarrito--;
    document.getElementById('cantidad-carrito').textContent = cantidadCarrito;
    mostrarCarrito();
}

function cerrarCarrito() {
    document.getElementById('carrito-modal').style.display = 'none';
}
