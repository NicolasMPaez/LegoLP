const spider = document.querySelector('#spider');
const robin = document.querySelector('#robin');
const batman = document.querySelector('#batman');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal_content--close');


spider.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible')
});
robin.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible')
});
batman.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible')
});

closeButton.addEventListener('click', () => {
    console.log("hola")
    modal.classList.add('hidden');
    modal.classList.remove('visible')
});



// En JavaScript existe un concepto que es muy importante y se pregunta mucho en las entrevistas y es: Event Delegation , es una tecnica que involucra añadir un Event Listener al padre del elemento en lugar del añadirselo a los elementos descendientes.

// Lo que hice fue añadirle el evento click al padre .footer__content y con el target logro detectar a cual elemento hijo se le esta haciendo click. Esto me permite que ahorrar mucho codigo y por si algun motivo quiero añadir otro personaje no tengo que añadirle un evento a cada hijo.

// // HTML CODE
// <section class="footer__content">
//   <div>
//     <img src="./assets/spiderman.png" alt="spiderman">
//   </div>
//   <div>
//     <img src="./assets/robin.png" alt="robin">
//   </div>
//   <div>
//     <img src="./assets/batman.webp" alt="batman">
//   </div>
// </section>


// // JAVASCRIPT CODE
// const button = document.querySelector('.footer__content');
// const modal = document.querySelector('.modal');

// button.addEventListener('click', handleModal)

// function handleModal(e) {
//     const element = ['DIV', 'IMG'];
//     const target = e.target.tagName;
    
//     if (element.includes(target)) {
//         modal.classList.remove('hidden');
//     }
// } 
