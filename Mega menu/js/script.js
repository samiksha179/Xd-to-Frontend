var closeMenu = document.getElementById('close-menu');
var overlay = document.getElementById('overlay');

    document.getElementById('open-menu').addEventListener('click', function() {
        overlay.classList.add('show-menu');
    });

    document.getElementById('close-menu').addEventListener('click', function() {
        overlay.classList.remove('show-menu');
    });