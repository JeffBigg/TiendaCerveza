// Puedes agregar funciones JS aquí si lo necesitas en el futuro.<script>
window.addEventListener('scroll', function () {
    var footer = document.querySelector('.footer-mallki');
    if (window.scrollY > 100) { // Puedes ajustar el valor 100 según cuándo quieras mostrar el footer
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});
