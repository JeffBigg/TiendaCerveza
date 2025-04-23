window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        // Oculta el logo grande
        document.getElementById('logo-grande').classList.add('hide-logo');
        // Expande el contenedor y muestra el pack
        document.getElementById('pack-container').classList.add('full');
        document.getElementById('pack-img').classList.add('show-pack');
    }, 4000);
});