<template>
    <div>
        <div class="text-center">
            <h3>Contactame</h3>
        </div>
        <div class="mt-3">
            Dejame un mensaje al correo.
        </div> 
        <Form/>
    </div>
</template>

<style scoped>
h3{
    margin: auto;
    font-family: 'Nunito', sans-serif;
    color: var(--600);
    text-align: start;

}

.dark-mode h2{
    color: var(--500)
}
.dark-mode div{
    color: var(--500)
}
</style>

<script lang="ts" setup>

definePageMeta({
    title: 'Pagina de contacto',
    description: 'Contacta a David Muñoz a traves de correo, dejando un mensaje',
    pageTransition: { name: 'page' }
})




</script>
