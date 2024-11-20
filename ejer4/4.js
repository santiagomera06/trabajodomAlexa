const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = "Soy un nuevo div";


const vieDiv = document.querySelector('div');


vieDiv.parentNode.replaceChild(nuevoDiv, vieDiv);

console.log('El div antiguo ha sido reemplazado por el nuevo div:', nuevoDiv);