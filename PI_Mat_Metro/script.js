function mudarTexto(element) {
    element.innerText = "Faça Parte >>"; 
}

function resetarTexto(element) {
    element.innerText = "Faça Parte"; 
}
function mudarTexto2(element) {
    element.innerText = "Entre em contato >>"; 
}

function resetarTexto2(element) {
    element.innerText = "Entre em contato"; 
}
const telefoneInput = document.getElementById('cel');

telefoneInput.addEventListener('input', function() {
  this.value = this.value.replace(/[^0-9]/g, ''); 
});

document.getElementById('forms-faca-parte').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    document.getElementById('confirmacao-mensagem').style.display = 'block';
    
    document.getElementById('forms-faca-parte').reset();
  });
