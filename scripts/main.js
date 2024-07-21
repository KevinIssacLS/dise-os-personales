//CÓDIGO PARA MODALES
function OpenModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.showModal();
    }
}

// Función para cerrar el modal
function CloseModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.close();
    }
}