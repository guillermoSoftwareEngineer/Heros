document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide-unique');
    let currentSlide = 0;

    // Establecer posiciones iniciales
    slides.forEach((slide, index) => {
        if (index !== 0) {
            slide.style.transform = 'translateX(100%)';
        }
    });

    // Mostrar primer slide
    slides[0].classList.add('active');

    function showNextSlide() {
        // Obtener el índice del siguiente slide
        const nextSlide = (currentSlide + 1) % slides.length;

        // Mover el slide actual a la izquierda
        slides[currentSlide].style.transform = 'translateX(-100%)';
        slides[currentSlide].classList.remove('active');

        // Mover el siguiente slide al centro
        slides[nextSlide].style.transform = 'translateX(0)';
        slides[nextSlide].classList.add('active');

        // Actualizar el índice del slide actual
        currentSlide = nextSlide;

        // Preparar el siguiente slide
        const afterNextSlide = (nextSlide + 1) % slides.length;
        slides[afterNextSlide].style.transform = 'translateX(100%)';
    }

    // Cambiar diapositiva cada 5 segundos
    setInterval(showNextSlide, 10000);
});