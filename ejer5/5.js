const btnclickMe = document.getElementById('clickMe');
const removeEventButton = document.getElementById('removeEvent');


function showAlert() {
    alert('Botón clickeado');
}

btnclickMe.addEventListener('click', showAlert);

function removeClickEvent() {
    
    btnclickMe.removeEventListener('click', showAlert);
    alert(' botón clickMe eliminado.');
}

removeEventButton.addEventListener('click', removeClickEvent);