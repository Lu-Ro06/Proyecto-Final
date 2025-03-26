// Node.js API example using Express.js
const express = require('express');
const app = express();

app.use(express.json());

const messages = [];

app.post('/messages', (req, res) => {
    const message = req.body.message;
    messages.push(message);
    res.json({ message: message });
});

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.listen(3000, () => {
    console.log('API listening on port 3000');
});









//Déjame explicarte cómo funciona esta aplicación de chat web:

//Del lado del cliente (HTML, CSS, JavaScript)

//El usuario escribe un mensaje en el campo de entrada ( #message-input) y hace clic en el botón enviar ( #send-button) o presiona la tecla Intro.
//El código JavaScript escucha el evento de clic en el botón de enviar y el evento de pulsación de tecla en el campo de entrada. Cuando ocurre cualquiera de estos eventos, recupera el mensaje del campo de entrada y lo envía a la API mediante la sendMessagefunción.
//La sendMessagefunción realiza una solicitud POST al punto final de API ( /messages) con el mensaje como carga útil JSON.
//La API responde con una respuesta JSON que contiene el mensaje enviado, que luego se muestra en el registro de chat ( #chat-log) usando la displayMessagefunción.
//Del lado del servidor (API)

//La API es un servidor Node.js simple que utiliza Express.js y escucha las solicitudes entrantes en el puerto 3000.
//Cuando la API recibe una solicitud POST al /messagespunto final, extrae el mensaje del cuerpo de la solicitud y lo agrega a una serie de mensajes ( messages).
//La API responde con una respuesta JSON que contiene el mensaje enviado.
//La API también proporciona un punto final GET ( /messages) que devuelve la matriz completa de mensajes. Este punto final no se utiliza en este ejemplo, pero podría usarse para recuperar el historial de chat.
//¿Cómo funciona en conjunto?

//El usuario escribe un mensaje y lo envía a la API.
//La API recibe el mensaje y lo agrega a la matriz de mensajes.
//La API responde con el mensaje enviado, que luego se muestra en el registro de chat en el lado del cliente.
//El registro de chat muestra el mensaje enviado y el usuario puede ver su propio mensaje y cualquier mensaje posterior enviado por otros.
//Tenga en cuenta que este es un ejemplo muy básico y una aplicación de chat del mundo real requeriría funciones adicionales, como:

//Autenticación y autorización de usuario
//Actualizaciones en tiempo real mediante WebSockets o WebRTC
//Persistencia y almacenamiento de mensajes.
//Manejo de errores y depuración
//Medidas de seguridad para evitar abusos y spam
//espero que esto ayude