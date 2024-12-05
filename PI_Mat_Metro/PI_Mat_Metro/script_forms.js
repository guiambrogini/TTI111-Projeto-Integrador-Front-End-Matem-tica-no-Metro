document.getElementById('forms-contato').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
   
    document.getElementById('confirmacao-mensagem').style.display = 'block';
    
    document.getElementById('forms-contato').reset();
  });
  
  function mudarTexto3(element) {
    element.innerText = "Faça Parte >>"; 
}

function resetarTexto3(element) {
    element.innerText = "Faça Parte"; 
}