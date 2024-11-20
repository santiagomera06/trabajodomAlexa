
const divInfo = document.getElementById('info');
console.log(divInfo.textContent);

const primerDetalle = document.querySelector('.detalle');
primerDetalle.textContent = 'Este es un detalle modificado';

const parrafos = document.querySelectorAll('p');
parrafos.forEach(parrafo => {
    parrafo.style.backgroundColor = 'lightblue';
});