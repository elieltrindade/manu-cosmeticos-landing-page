// Faz a requisição para a função serverless que retorna o e-mail de envio
fetch('/.netlify/functions/get-email')
  .then(response => response.json())
  .then(data => {
    // Define o action do formulário com o e-mail retornado
    document.getElementById('contact-form').action = `https://formsubmit.co/${data.email}`;
  })
  .catch(error => console.error('Erro ao obter o e-mail:', error));