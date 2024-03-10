const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


document.addEventListener('DOMContentLoaded', () => {
    const glow = document.createElement('div');
    glow.classList.add('glowing-effect');
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        glow.style.left = mouseX + 'px';
        glow.style.top = mouseY + 'px';
    });
});
