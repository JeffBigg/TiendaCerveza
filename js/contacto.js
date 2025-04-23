document.getElementById('form-contacto').addEventListener('submit', function (e) {
    e.preventDefault();
    // Validación simple
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const mayor = document.getElementById('mayor').checked;

    if (!nombre || !correo || !mensaje || !mayor) {
        alert('Por favor, completa todos los campos obligatorios y acepta las condiciones legales.');
        return;
    }

    // Aquí puedes enviar los datos por AJAX o mostrar un mensaje de éxito
    alert('¡Gracias por contactarnos! Pronto te responderemos.');
    document.getElementById('form-contacto').reset();
});