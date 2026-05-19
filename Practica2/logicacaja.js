const productosIniciales = [
    { nombre: "Café Americano", precio: 35, cantidad: 10 },
    { nombre: "Capuccino", precio: 40, cantidad: 8 },
    { nombre: "Chocolate Abuelita", precio: 40, cantidad: 15 },
    { nombre: "Concha de Vainilla", precio: 10, cantidad: 20 },
    { nombre: "Dona de Chocolate", precio: 12, cantidad: 10 }
];

let inventario = JSON.parse(localStorage.getItem("productos_cafeteria")) || productosIniciales;
const listaPedidos = [];
let totalAcumulado = 0;

const divProductos = document.getElementById("contenedor-productos");
const ulPedidos = document.getElementById("contenedor-pedidos");
const totalTexto = document.getElementById("total-texto");
const totalBadge = document.getElementById("total-badge");

function mostrarProductos() {
    inventario = JSON.parse(localStorage.getItem("productos_cafeteria")) || productosIniciales;
    divProductos.innerHTML = "";
    
    inventario.forEach((p, index) => {
        const elemento = document.createElement("button");
        elemento.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center";
        
        if (p.cantidad <= 0) {
            elemento.className += " disabled bg-light text-muted";
            elemento.innerHTML = `
                <span>${p.nombre} <b class="text-danger">(Agotado)</b></span>
                <span class="badge bg-secondary rounded-pill">$${p.precio.toFixed(2)}</span>
            `;
        } else {
            elemento.innerHTML = `
                <span>${p.nombre} <b class="text-muted">($${p.precio.toFixed(2)})</b></span>
                <span class="badge bg-primary rounded-pill">Stock: ${p.cantidad}</span>
            `;
            elemento.onclick = () => agregarPedido(index);
        }
        divProductos.appendChild(elemento);
    });
}

function agregarPedido(indexProducto) {
    inventario = JSON.parse(localStorage.getItem("productos_cafeteria")) || productosIniciales;
    const productoSeleccionado = inventario[indexProducto];
    
    if (productoSeleccionado && productoSeleccionado.cantidad > 0) {
        listaPedidos.push({
            nombre: productoSeleccionado.nombre,
            precio: productoSeleccionado.precio
        });
        
        totalAcumulado += productoSeleccionado.precio;
        productoSeleccionado.cantidad -= 1;
        
        localStorage.setItem("productos_cafeteria", JSON.stringify(inventario));
        
        mostrarProductos();
        mostrarPedidosCliente();
    }
}

function mostrarPedidosCliente() {
    ulPedidos.innerHTML = "";
    
    if (listaPedidos.length === 0) {
        ulPedidos.innerHTML = `<li class="list-group-item text-center text-muted">No hay pedidos en la lista</li>`;
    } else {
        listaPedidos.forEach(p => {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center";
            li.innerHTML = `
                <span>${p.nombre}</span>
                <span class="text-success fw-semibold">$${p.precio.toFixed(2)}</span>
            `;
            ulPedidos.appendChild(li);
        });
    }

    totalTexto.textContent = `$${totalAcumulado.toFixed(2)}`;
    totalBadge.textContent = `$${totalAcumulado.toFixed(2)}`;
}

window.addEventListener('focus', () => {
    mostrarProductos();
});

mostrarProductos();
mostrarPedidosCliente();