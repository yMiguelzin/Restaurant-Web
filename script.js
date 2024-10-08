$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault(); // Previne o envio do formulário
        alert('Obrigado pela sua mensagem!');
        $(this).trigger('reset'); // Limpa o formulário
    });
});
