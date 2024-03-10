<template>
    <nav class="navbar navbar-expand-sm bg-warning">
        <div class="container">
            <a class="navbar-brand" href="#">Menu</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <NuxtLink class="nav-link active" aria-current="page" to="/">About</NuxtLink>
                    <NuxtLink class="nav-link active" to="/contacto" >Contacto</NuxtLink>
                    <NuxtLink :to="{name: 'works'}" class="nav-link active" >Works</NuxtLink>

                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped>
a{
    color: white;
 
}

.active{
    border-bottom: 2px solid purple;

    
}
</style>
<script lang="ts" setup>

</script>

