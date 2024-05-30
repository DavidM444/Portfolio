<template>
  <div>
    <form id="sendMessage" method="post" @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="" class="form-label">Nombre</label>
        <input type="text" class="form-control" name="" id="" aria-describedby="helpId" v-model="nombre" />
        <small id="helpId" class="form-text text-muted">Escriba su nombre</small>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Correo Electrónico</label>
        <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId"
         @blur="emailTouched = true"
          placeholder="abc@mail.com" v-model="email"/>
        <small id="emailHelpId" class="form-text text-muted" :class="{invalid:!isEmailValid && emailTouched}">
          {{!isEmailValid && emailTouched? ' El correo no parece ser válido':'Introduzca su correo electronico '}}
        </small>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Mensaje</label>
        <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" v-model="message"/>
        <small id="helpId" class="form-text text-muted">Registra el mensaje</small>
      </div>
      <button tyte="submit" form="sendMessage" id="" class="btn btn-primary" href="#" role="button">Enviar</button>
    </form>
  </div>
</template>

<script lang="ts" setup>

const nombre = ref<string>('');
const email = ref<string>('');
const message = ref<string>('');
const emailTouched = ref<boolean>(false);

const handleSubmit = () => {
  emailTouched.value = true;
  if (isEmailValid.value) {
    alert('Formulario enviado con éxito');
  } else {
    alert('Por favor, corrige los errores antes de enviar.');
  }
};

const isEmailValid = computed(() => {
  return isValidEmail(email.value);
});

 function isValidEmail( val:string ):boolean {
    const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    return emailPattern.test(val);
 };


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
button{
  background-color: var(--100);
  color: var(--600);
  border-color: var(--600);
}
button:hover{
  background-color: var(--400);
  border-color: var(--400);
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