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

    // Cambiar diapositiva cada 4 segundos
    setInterval(showNextSlide, 4000);
});



// inicio de script para hero 3 reveal 

// Inicio de script para hero 3 reveal
document.addEventListener('DOMContentLoaded', function () {
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }
  
    function handleScrollReveal() {
      const heroContainer = document.querySelector('.hero-container-reveal');
      const heroTitle = document.querySelector('.hero-title-reveal');
      const heroSubtitle = document.querySelector('.hero-subtitle-reveal');
      const heroButton = document.querySelector('.hero-button-reveal');
  
      if (heroContainer && isInViewport(heroContainer)) {
        // Activa la animación de máquina de escribir si no está activa
        if (!heroTitle.classList.contains('typing-active')) {
          heroTitle.classList.add('typing-active');
        }
  
        // Asegura que el subtítulo y el botón estén visibles
        heroSubtitle.classList.add('fade-in');
        heroButton.classList.add('fade-in');
  
        // Agrega la clase active al contenedor
        heroContainer.classList.add('active');
      } else if (heroContainer) {
        // Elimina las clases activas al salir del viewport
        heroContainer.classList.remove('active');
        heroTitle.classList.remove('typing-active');
        heroSubtitle.classList.remove('fade-in');
        heroButton.classList.remove('fade-in');
      }
    }
  
    // Asignar el evento de scroll, para disparar la funcion
    window.addEventListener('scroll', handleScrollReveal);
  
    // Comprobar inmediatamente en caso de que el usuario ya esté en la sección
    handleScrollReveal();
  });

  // Final de script para hero 3 reveal
  
// Inicio de logica de hero 4

document.addEventListener('DOMContentLoaded', () => {
  const hero4Container = document.querySelector('.hero-4-container-unique');
  const leftImages = document.querySelectorAll('.hero-4-img-unique');
  const rightContent = document.querySelector('.hero-4-right-unique');
  const dynamicWord = document.querySelector('.dynamic-word-unique');
  const words = ['Tecnología', 'Electricidad', 'Software'];
  let wordIndex = 0;

  // Animación dinámica de palabras
  function changeWord() {
      dynamicWord.textContent = words[wordIndex];
      wordIndex = (wordIndex + 1) % words.length;
  }
  setInterval(changeWord, 2000);

  // Detectar el viewport
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  leftImages.forEach(img => img.classList.add('visible-unique'));
                  rightContent.classList.add('visible-unique');
              } else {
                  leftImages.forEach(img => img.classList.remove('visible-unique'));
                  rightContent.classList.remove('visible-unique');
              }
          });
      },
      { threshold: 0.5 }
  );

  observer.observe(hero4Container);
});

// final de logica hero 4

// inicio logica de hero 5 3d laptop

document.addEventListener('DOMContentLoaded', function () {
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function handleScrollAnimations() {
    const heroContainer = document.querySelector('.hero-container-3d');

    if (heroContainer && isInViewport(heroContainer)) {
      // Agrega la clase para activar la animación si entra al viewport
      heroContainer.classList.add('scrolled');
    } else if (heroContainer) {
      // Elimina la clase para reiniciar la animación si sale del viewport
      heroContainer.classList.remove('scrolled');
    }
  }

  // Asignar el evento de scroll para disparar la función
  window.addEventListener('scroll', handleScrollAnimations);

  // Comprobar inmediatamente en caso de que el usuario ya esté en la sección
  handleScrollAnimations();
});




// final logica de hero 5 3d laptop
