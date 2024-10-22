const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const currentPath = window.location.pathname;

// Gestion de l'affichage du menu mobile
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Vérification des liens actifs
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.pathname;
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const link = item.querySelector('a');
        if (link.href.includes(window.location.origin + currentLocation)) {
            link.classList.add('text-red-500', 'font-bold'); // Classes Tailwind pour l'élément actif
        } else {
            link.classList.add('text-gray-600'); // Classe pour les éléments inactifs
        }
    });
});

