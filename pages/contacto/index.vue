<template>
    <div>
        <div class="text-center">
            <h2>Contactame</h2>
        </div>
        <div class="mt-3">
            Enviame tus dudas y comentarios.
        </div> 
        <Form/>
    </div>
</template>

<style scoped>
h2{
    margin: auto;
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
    pageTransition: { name: 'page' }
})
</script>
