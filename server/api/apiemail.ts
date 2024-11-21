import nodemailer from 'nodemailer'

import {Post} from '~/types/types'
export default defineEventHandler(async (event) => {
  const body = await readBody<Post>(event);
  console.log("peticion recibida")

  const transporter = nodemailer.createTransport({
    service: "gmail",// O usa otro servicio
    auth: {
      user: process.env.EM_EM, // Configura tu email
      pass: process.env.EM_PAS, // Configura tu contraseña
    },
  });


  const htmlcontent = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Example</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .email-container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
        }
        .email-header {
          background-color: #4CAF50;
          color: white;
          text-align: center;
          padding: 20px;
        }
        .email-body {
          padding: 20px;
          color: #333333;
          line-height: 1.6;
        }
        .email-body p {
          margin-bottom: 15px;
        }
        .email-footer {
          text-align: center;
          padding: 10px;
          font-size: 12px;
          color: #777777;
          border-top: 1px solid #ddd;
        }
        .button {
          display: inline-block;
          background-color: #4CAF50;
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
          margin-top: 20px;
        }
        .button:hover {
          background-color: #45a049;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <h1>¡Bienvenido a Nuestra Empresa!</h1>
        </div>
        <div class="email-body">
          <p>Hola [Nombre],</p>
          <p>Gracias por registrarte en nuestro servicio. Estamos emocionados de tenerte a bordo.</p>
          <p>Haz clic en el botón a continuación para confirmar tu correo electrónico:</p>
          <a href="https://tu-sitio-web.com/confirmar" class="button">Confirmar Email</a>
        </div>
        <div class="email-footer">
          <p>Si no realizaste esta solicitud, por favor ignora este correo.</p>
          <p>&copy; 2024 Nuestra Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </body>
    </html>`

  try {
    console.log("enviando email")
    await transporter.sendMail({
      from: 'ngxdavid050@gmail.com',
      to: body.email, // Tu correo de recepción
      subject: `Mensaje de ${body.nombre}`,
      text: "Hola como estas, gracias por contactarme",
      html: htmlcontent
    });


    return "guardado con exito";
  } catch (error) {
    console.log("Error enviando el email:"+ error);
    throw createError({ statusCode: 500, statusMessage: "Error enviando el correo." });
  }


  
});
