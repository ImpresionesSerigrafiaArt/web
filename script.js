//navegacion
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.querySelector("nav ul");
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
        }
    });
});


let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const pauseButton = document.getElementById("pauseButton");
let isPaused = false;

// Función para mostrar la siguiente diapositiva
function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

// Iniciar carrusel automático
let carouselInterval = setInterval(showNextSlide, 6000);

// Función para pausar/reanudar el carrusel
pauseButton.addEventListener("click", () => {
    if (isPaused) {
        carouselInterval = setInterval(showNextSlide, 5000);
        pauseButton.textContent = "Pausar";
    } else {
        clearInterval(carouselInterval);
        pauseButton.textContent = "Reanudar";
    }
    isPaused = !isPaused;
});

//cambiar las diapositivas

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll(".section");

    // Inicialmente, mostrar la primera sección
    sections.forEach(section => section.classList.remove("active"));
    sections[0].classList.add("active");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            // Obtener la sección destino
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Remover la clase 'active' de todas las secciones
            sections.forEach(section => section.classList.remove("active"));

            // Agregar la clase 'active' a la sección destino
            targetSection.classList.add("active");
        });
    });
});

//carrucel para imagenes
document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    // Inicializar el primer elemento visible
    images[currentIndex].classList.add('active');
    setInterval(showNextImage, 3000); // Cambiar cada 3 segundos
});

//reinicia la animacion
document.getElementById("linkanimacion").addEventListener("click", function (event) {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace.

    const portada = document.getElementById("portada");
    const texto = document.getElementById('telefono');

    // Reinicia la animación
    portada.classList.remove("animated"); // Asegúrate de que no haya conflictos con otras clases.
    void portada.offsetWidth; // Forzamos el reflujo para reiniciar la animación.
    void texto.offsetWidth;
    portada.style.animation = "none"; // Elimina la animación actual temporalmente.
    texto.style.animation="none";
    setTimeout(() => {
        portada.style.animation = ""; // Reactiva la animación CSS definida en el archivo.
        texto.style.animation= "";
    }, 0);
});


