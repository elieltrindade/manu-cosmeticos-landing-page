// netlify/functions/get-email.js

exports.handler = async function (event, context) {
    //Acessa a variável de ambiente criada na Netlify

    const formEmail = process.env.FORM_EMAIL;

    //Retorna o e-mail como resposta JSON
    return {
        statusCode,
        body: JSON.stringify({ email: formEmail })
    };
};