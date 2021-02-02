//init carousels
var flktyProjects = new Flickity( '#projects-carousel', {
    wrapAround: true,
});

//contact form submit
var contactForm = document.getElementById('contact-form');

cb_addEventListener(contactForm, 'submit', e => {
    e.preventDefault();
    console.log(e);
})

//animation navbutton and navlist mobile
var navButton = document.getElementById('navButton');

function animNavButton() {
    navButton.classList.toggle('change');
    navButton.nextElementSibling.classList.toggle('navmenu__list--active');
}

//open modal message
let message = [];
message['modaltitle'] = 'Advertencia';
message['modaldescription'] = [
    `Si ves este mensaje significa que aún este portafolio no está listo, ya sea para pulir detalles,
    falta de proyectos a exponer, etc.`,
    `Si bien aún no está listo a medida que se le hacen las modificaciones pertinentes esta página
    está abierta a quien desee ver mi perfil y quiera conocerme un poco más profesionalmente. Desde
    ya muchas gracias por tu tiempo.`
];
modal.open(message);