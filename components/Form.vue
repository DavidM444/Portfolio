<template>
  <div>
    <form id="sendMessage" method="post" @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Nombre</label>
        <input v-model="emailToSend.nombre" type="text" class="form-control" name="name" id="name"
          aria-describedby="helpId" required />
        <small id="helpId" class="form-text text-muted">Escriba su nombre</small>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Correo Electrónico</label>
        <input v-model="emailToSend.email" type="email" class="form-control" name="email" id="email"
          aria-describedby="emailHelpId" required @blur="emailTouched = true" placeholder="abc@mail.com" />
        <small id="emailHelpId" class="form-text text-muted" :class="{ invalid: !isEmailValid && emailTouched }">
          {{ !isEmailValid && emailTouched ? ' El correo no parece ser válido' : 'Introduzca su correo electrónico ' }}
        </small>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Mensaje</label>
        <textarea v-model="emailToSend.mensage" type="text" class="form-control" name="message" id="message" rows="3"
          aria-describedby="helpId" required />
        <small id="helpId" class="form-text text-muted">Registra el mensaje</small>
      </div>

      <button class="btn btn-success" type="submit" aria-describedby="enviar formulario">Enviar</button>
    </form>
    <div v-if="error" class="alert alert-danger mt-3" role="alert">
      {{ error }}
      <div v-if="error.includes('directamente')">
        <a :href="`mailto:${defaultRecipient}`">{{ defaultRecipient }}</a>
      </div>
    </div>
    <div v-if="success" class="alert alert-success mt-3" role="alert">
      ¡Mensaje enviado con éxito!
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';

import type { Post } from '~/types/types';

const emailTouched = ref<boolean>(false);

const emailToSend = ref<Post>({
  nombre: '',
  email: '',
  mensage: ''
})

const success = ref(false);
const error = ref<string | null>(null);
const defaultRecipient = "ngxdavid050@gmail.com";
const handleSubmit = async () => {
  
  emailTouched.value = true;
  
  if (!isEmailValid.value) {
    error.value = "Por favor, ingrese un correo válido";
    return;
  }

  // Crear el contenido del correo
  const mailContent = `
Nombre: ${emailToSend.value.nombre}
Email: ${emailToSend.value.email}
Mensaje: ${emailToSend.value.mensage}
  `.trim();

  try {
    // Primero intentar con mailto (funciona en la mayoría de dispositivos)
    const mailtoLink = `mailto:${defaultRecipient}?subject=Contacto&body=${encodeURIComponent(mailContent)}`;

    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.location.href = mailtoLink;
    } else {

      if (validUseGmail(emailToSend.value.email)) {
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${defaultRecipient}&su=Contacto&body=${encodeURIComponent(mailContent)}`);
      } else if (validOutlook(emailToSend.value.email)) {
        window.open(`https://outlook.office.com/mail/deeplink/compose?to=${defaultRecipient}&subject=Contacto&body=${encodeURIComponent(mailContent)}`);
      } else {
        window.location.href = mailtoLink;
      }
    }
    
    success.value = true;
    emailToSend.value = {
      nombre: '',
      email: '',
      mensage: ''
    };
    emailTouched.value = false;
  } catch (e) {
    error.value = "No se pudo abrir el cliente de correo. Por favor, envíe un correo directamente a " + defaultRecipient;
  }
};

const isEmailValid = computed(() => {
  return isValidEmail(emailToSend.value.email);
});

function isValidEmail(val: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(val);
}

function validUseGmail(text: string): boolean {
  const regex = /gmail\.com/i;
  const rg = regex.test(text);
  return rg;
}

function validOutlook(text: string): boolean {
  const regex = /outlook\.com/i;
  const rg = regex.test(text);
  return rg;
}


</script>

<style scoped>
.invalid {
  color: red !important;
}

.dark-mode  {
  background-color: red;
}

form {
  margin-top: 1rem;
  background-color: transparent;

}

form input,textarea{
  border-color: var(--300);
  resize: none;

}

.form-control:focus {
  box-shadow: 0 0 8px var(--500);
  border: var(--500);

}

form label, textarea {
  font-family: 'Nunito', sans-serif;
}

.dark-mode .invalid {
  color: var(--warning) !important;
}

.dark-mode label,textarea {
  color: var(--300);
}

.dark-mode form {
  background-color: var(--dark-mode-bg);
  color: var(--100)
}

.dark-mode input,textarea {
  background-color: var(--100);
  color: var(--text);
  border-color: var(--500);
}

.dark-mode small {
  color: var(--100) !important;
}
</style>