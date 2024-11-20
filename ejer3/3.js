const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'este es un parrafo creado dinamicamente ';
document.body.appendChild(nuevoParrafo);    


const botonEliminar = document.querySelector('#eliminar'); 

botonEliminar.addEventListener('click', function() {
    const primerParrafo = document.querySelector('p'); 
    if (primerParrafo) { 
        primerParrafo.remove(); 
    } else {
        alert("No hay párrafos para eliminar."); 
    }
});