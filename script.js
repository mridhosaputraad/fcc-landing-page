const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const span = document.querySelectorAll('.menu-toggle span');

menuToggle.addEventListener("click", () => {
    nav.classList.toggle('slide');
    span.forEach((s) => {
        s.classList.toggle('slide');
    });
});