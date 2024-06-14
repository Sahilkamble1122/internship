document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById('menu_btn');
    const navLinks = document.getElementById('nav-links');
    let menuOpen = false;

    menuBtn.addEventListener('click', function() {
        if (!menuOpen) {
            navLinks.style.left = '0';
            menuBtn.innerHTML = '<i class="fas fa-times"></i>';
            menuOpen = true;
        } else {
            navLinks.style.left = '-100%';
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            menuOpen = false;
        }
    });
});