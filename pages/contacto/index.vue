<template>
    <div>
        <div class="text-center">
            <h2>Contactame</h2>
        </div>
        <form id="sendMessage" method="post">

            <div class="mb-3">
                <label for="" class="form-label">Name</label>
                <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId"
                    placeholder="abc@mail.com" />
                <small id="emailHelpId" class="form-text text-muted">Introduzca su correo electronico</small>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Asunto</label>
                <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Mensaje</label>
                <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
            <button tyte="submit" form="sendMessage" id="" class="btn btn-primary" href="#" role="button">Enviar</button>


        </form>

    </div>
</template>

<style scoped>
h2{
    margin: auto;
    text-align: center;
    padding: 2rem;
    background-color: var(--gossip-200);
}
</style>
<script setup lang="ts">
definePageMeta({
    pageTransition: { name: 'page'},

})
</script>
