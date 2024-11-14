document.getElementById('forms-contato').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
   
    document.getElementById('confirmacao-mensagem').style.display = 'block';
    
    document.getElementById('forms-contato').reset();
  });