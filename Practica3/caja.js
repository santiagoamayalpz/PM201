// 1. Cargar tickets desde el LocalStorage
const tickets = JSON.parse(localStorage.getItem("tickets_caja")) || [];

function mostrarCaja() {
    const contenedor = document.getElementById("contenedor-pedidos");
    contenedor.innerHTML = "";

    // --- INVESTIGACIÓN: REDUCE Y DESTRUCTURING ---
    // Sumamos el total de todos los tickets usando reduce y desestructurando { total }
    const totalGeneral = tickets.reduce((suma, { total }) => suma + total, 0);
    
    // Cálculos matemáticos del IVA (Desglose del total)
    const subtotal = totalGeneral / 1.16;
    const iva = totalGeneral - subtotal;

    // --- MOSTRAR TOTALES ---
    document.getElementById("caja-subtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("caja-iva").textContent = `$${iva.toFixed(2)}`;
    document.getElementById("caja-total").textContent = `$${totalGeneral.toFixed(2)}`;

    // --- MOSTRAR LISTA DE TICKETS ---
    tickets.forEach(({ hora, total }, index) => {
        contenedor.innerHTML += `
            <div class="alert alert-secondary d-flex justify-content-between align-items-center">
                <div>
                    <strong>Ticket #${index + 1}</strong> <small class="text-muted">(${hora})</small>
                </div>
                <span class="badge bg-primary fs-6">$${total.toFixed(2)}</span>
            </div>
        `;
    });
}

// Ejecutar la función al abrir la página
window.addEventListener('DOMContentLoaded', mostrarCaja);