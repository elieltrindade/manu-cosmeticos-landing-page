// Faz a requisição para a função serverless que retorna o e-mail de envio
fetch('/.netlify/functions/get-email')
  .then(response => response.json())
  .then(data => {
    // Define o action do formulário com o e-mail retornado
    document.getElementById('contact-form').action = `https://formsubmit.co/${data.email}`;
  })
  .catch(error => console.error('Erro ao obter o e-mail:', error));


  //validaçao email

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    const emailField = document.getElementById('email');
    const email = emailField.value;

    // Expressão regular simples para validar e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        event.preventDefault();  // Impede o envio do formulário
    }
});