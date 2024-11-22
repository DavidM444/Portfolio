<template>
  <div>
    <form id="sendMessage" method="post" @submit.prevent="handleSubmit" >
      <div class="mb-3">
        <label for="name" class="form-label">Nombre</label>
        <input v-model="emailToSend.nombre" type="text" class="form-control" name="name" id="name" aria-describedby="helpId" required/>
        <small id="helpId" class="form-text text-muted">Escriba su nombre</small>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Correo Electrónico</label>
        <input v-model="emailToSend.email" type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId" required
         @blur="emailTouched = true"
          placeholder="abc@mail.com" />
        <small id="emailHelpId" class="form-text text-muted" :class="{invalid:!isEmailValid && emailTouched}">
          {{!isEmailValid && emailTouched? ' El correo no parece ser válido':'Introduzca su correo electrónico '}}
        </small>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Mensaje</label>
        <input v-model="emailToSend.mensage" type="text" class="form-control" name="message" id="message" aria-describedby="helpId" required/>
        <small id="helpId" class="form-text text-muted">Registra el mensaje</small>
      </div>
      
      <button class="btn btn-success" type="submit" aria-describedby="enviar formulario">Enviar</button>
    </form>
    <p v-if="success">¡Mensaje enviado con éxito!</p>
    <p v-if="error">Ocurrio un error: {{ error }}</p>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';




import type { Post } from '~/types/types';
import { useCreatemail } from '#imports';

const emailTouched = ref<boolean>(false);

const emailToSend = ref<Post>({
  nombre: '',
  email: '',
  mensage: ''
})

const success = ref(false);
const error = ref<string | null>(null);

const handleSubmit = async () => {

  emailTouched.value = true;
  if (isEmailValid.value) {
    try {
        const data = useCreatemail(emailToSend.value);

        success.value = true;
        error.value = null;
      } catch (err: any) {
        success.value = false;
        error.value = err.message|| 'Error al enviar el correo.';
      }

  }
};


const isEmailValid = computed(() => {
  return isValidEmail(emailToSend.value.email);
});

 function isValidEmail( val:string ):boolean {
    const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    return emailPattern.test(val);
 };

const dataButton = {
  link: "#",
  text: "Send"
}

</script>

<style scoped>
.invalid{
 color: red !important;
}
.dark-mode .alert{
  background-color: red;
}

form{
    margin-top: 1rem;
    background-color: transparent;

}
form input{
  border-color: var(--300);
  
}

.form-control:focus{
  box-shadow: 0 0 8px var(--500) ;
  border: var(--500);

}

form label{
  font-family: 'Nunito',sans-serif;
}

.dark-mode .invalid{
  color: var(--warning) !important;
}

.dark-mode label{
  color: var(--300);
}

.dark-mode form{
  background-color: var(--dark-mode-bg);
  color: var(--100)
}
.dark-mode input{
  background-color: var(--100);
  color: var(--text);
  border-color: var(--500);
}
.dark-mode small{
  color: var(--100) !important;
}

</style>