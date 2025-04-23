window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        // Oculta el logo grande
        document.getElementById('logo-grande').classList.add('hide-logo');
        // Expande el contenedor y muestra el pack
        document.getElementById('pack-container').classList.add('full');
        document.getElementById('pack-img').classList.add('show-pack');
    }, 4000);
});
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-home');
    toggle.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});