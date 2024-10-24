const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Gestion de l'affichage du menu mobile
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});

const v1 = document.getElementById("v1").children;
console.log(v1);

for (let i = 0; i < v1.length; i++) {
    v1[i].addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });
}
