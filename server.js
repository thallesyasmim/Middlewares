/**
 * Middlewares
 * 
 * Nós sabemos que para um cliente se comunicar com o servidor, ele precisa fazer essa
 * comunicação através do protocolo HTTP.
 * Então vamos supor que esse cliente acesse uma rota específica da nossa aplicação.
 * O Middleware seria o que vai ficar intermediando a comunicação cliente e servidor.
 * Do ponto A ao ponto C, o Middleware seria o ponto B.
 * Toda a comunicação que é feita entre cliente e servidor o Middleware estará no meio,
 * e com ele conseguimos manipular todas essas requisições e respostas antes delas chegarem ao seu destino.
 * 
 * Bora codar!
 * 
 */

 const express = require('express');

 const app = express();

 app.use((request, response, next) => {
     console.log('Sou um Middleware!');
     /* Se deixarmos somente este console.log(), mesmo que o cliente acesse o recurso '/hello'
        Não terá a nossa resposta 'Hello World!', porque a requisição irá parar nesse Middleware.
     */
    next() // E aqui entra a utilização do parâmetro next(), ele vai mandar passar, irá para o próximo.
    // Assim temos nosso 'Hello World!'
 })

 // Todas as vezes que fizermos requisições no nosso servidor o Middleware será chamado.


 app.get('/hello', (request, response) => {
     response.send('Hello World!');
 })


 app.listen(3333, () => console.log('Server is running'))