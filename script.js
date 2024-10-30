// esto nos permitiria que el header se mantenga fluido en el scroleo y ademas le podemos dar propiedades al sticky

const header = document.querySelector("header");

window.addEventListener("scroll", function() {header.classList.toggle("sticky", window.scrollY > 130);
});


let menu = document.querySelector('#menu-ico');
let menulist = document.querySelector('.menulist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    menulist.classList.remove('open');
};


var typed = new Typed(".input", {
    strings: [" Desarrollador C#", ".NET"],
    backSpeed: 80,        // La velocidad a la que se borra el texto
    typeSpeed: 120,       // La velocidad a la que se escribe el texto (ajusta este valor para ralentizar la escritura)
    loop: true,
});


//carousel
let currentSlide = 0;
const images = [
    'img/ProyectoFastFood/1.png',
    'img/ProyectoFastFood/2.png',
    'img/ProyectoFastFood/3.png',
    'img/ProyectoFastFood/4.png',
    'img/ProyectoFastFood/5.png',
    'img/ProyectoFastFood/6.png',
    'img/ProyectoFastFood/7.png',
    'img/ProyectoFastFood/8.png',
    'img/ProyectoFastFood/9.png',
    'img/ProyectoFastFood/10.png',
    'img/ProyectoFastFood/11.png',
    'img/ProyectoFastFood/12.png',
    'img/ProyectoFastFood/14.png',
    'img/ProyectoFastFood/15.png',
    'img/ProyectoFastFood/16.png',
    'img/ProyectoFastFood/17.png',
    'img/ProyectoFastFood/18.png',
    'img/ProyectoFastFood/19.png',
    'img/ProyectoFastFood/20.png',
    'img/ProyectoFastFood/21.png',
    'img/ProyectoFastFood/22.png',
    // Agrega más imágenes según sea necesario
];

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = images.length - 1; // Regresa al último slide
    } else if (currentSlide >= images.length) {
        currentSlide = 0; // Regresa al primer slide
    }

    const carouselImage = document.getElementById('carouselImage');
    carouselImage.src = images[currentSlide]; // Cambia la imagen
}