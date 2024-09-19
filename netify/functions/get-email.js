// netlify/functions/get-email.js

exports.handler = async function (event, context) {
    //Acessa a variável de ambiente criada na Netlify

    const formEmail = process.env.FORM_EMAIL;

    //Retorna o e-mail como resposta JSON
    return {
        statusCode: 200,    // Set status code to indicate success
        headers: {
            "Access-Control-Allow-Origin": "*", // Allow requests from any origin (adjust as needed)
            "Content-Type": "application/json"
          },
        body: JSON.stringify({ email: formEmail })
    };
};