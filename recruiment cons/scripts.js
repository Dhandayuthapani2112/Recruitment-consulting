let slideIndex = 1;

function showSlides() {
    const slides = document.querySelectorAll('.carousel');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    slides[slideIndex - 1].style.display = 'block';
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

showSlides(); // Initial call to show the first slide

let hamburger = document.querySelector('.hamburger');
let navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('lines-rotate');
    hamburger.classList.toggle('lines-open');
});

window.addEventListener('load', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = 'flex';
});

function onSubmit(token) {
    document.getElementById("myForm").submit();
}
