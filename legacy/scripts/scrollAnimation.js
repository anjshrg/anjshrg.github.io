// scrollAnimation.js
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;

    // Adjust background position or effect based on scroll position
    if (scrollPosition > 50) {
        header.style.backgroundColor = 'rgba(62, 78, 94, 0.9)'; // Darker background on scroll
        header.style.transition = 'background-color 0.3s';
    } else {
        header.style.backgroundColor = '#3e4e5e'; // Original color
    }
});
