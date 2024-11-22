import nodemailer from 'nodemailer'

import {Post} from '~/types/types'
export default defineEventHandler(async (event) => {
  const body = await readBody<Post>(event);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EM_EM,
      pass: process.env.EM_PAS, 
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
       
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <h1>¡Gracias por contactarme!</h1>
<<<<<<< HEAD
=======
        </div>
        <div class="email-body">
          <p>Hola ${body.nombre},</p>
          <p>¿En que puedo ayudarte?. Responde a este correo para saber cómo coloborarte.</p>
          <p>Atentamente: David Muñoz.</p>
        </div>
        <div class="email-footer">
          <p>Si no realizaste esta solicitud, por favor ignora este correo.</p>
          <p> 2024 - Informacion de contacto</p>
        </div>
      </div>
    </body>
      <div class="email-container">
        <div class="email-header">
          <h1>¡Bienvenido a Nuestra Empresa!</h1>
>>>>>>> dd169114751d538f394388ed48246e6d64b730ac
        </div>
        <div class="email-body">
          <p>Hola ${body.nombre},</p>
          <p>¿En que puedo ayudarte?. Responde a este correo para saber cómo coloborarte.</p>
          <p>Atentamente: David Muñoz.</p>
        </div>
        <div class="email-footer">
          <p>Si no realizaste esta solicitud, por favor ignora este correo.</p>
          <p> 2024 - Informacion de contacto</p>
        </div>
      </div>
    </body>
    </html>`

  try {
    console.log("enviando email")
    await transporter.sendMail({
      from: 'ngxdavid050@gmail.com',
      to: body.email, // Tu correo de recepción
      subject: `Mensaje de David Muñoz`,
      text: "Hola como estas, gracias por contactarme",
      html: htmlcontent
    });


    return "guardado con exito";
  } catch (error) {
    console.log("Error enviando el email:"+ error);
    throw createError({ statusCode: 500, statusMessage: "Error enviando el correo." });
  }


  
});
