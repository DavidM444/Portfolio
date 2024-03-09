<template>
    <div class="container">
      <h3>Works</h3>
      <section class="row">
        <a href="/works/api" class="pt-md-0 pt-3 col-12 col-sm-4 ">
          <div class="card tarjeta" >
            <img src="~/assets/api.jpg" class="card-img-top " alt="...">
            <div hre class="card-body">
              <h5  class="card-title">Api </h5>
            </div>
            <p class="card-text">Api destinada al manejo y gestion de registros de calidad textil.
                Dispone de Login y gestion de roles para los usuarios. </p>
            </div>
        </a>
        <a href="/works/quality" class="pt-3 pt-sm-0 col-12 col-sm-4 ">
          <div class="card tarjeta">
            <img src="~/assets/qualitytex.jpg" class="card-img-top " alt="...">
            <div class="card-body">
              <h5 class="card-title">Quality Tex</h5>
            
            </div>
            <p class="card-text">Web para la gestion de registros textiles, en una empresa textil.
                Presenta y maneja informacion de manera eficaz.
                </p>
          </div>
        </a>
        <a href="/works/pokedex" class="pt-3 pt-sm-0 col-12 col-sm-4 ">
          <div class="card tarjeta">
            <img src="~/assets/oip.jpg" class="card-img-top " alt="...">
            <div class="card-body">
              <h5 class="card-title">Pokedex</h5>
             
              
            </div>
            <p class="card-text">Toda la informacion de tus pokemon que deses conocer, con una interfaz atractiva.
                </p>
          </div>
        </a>
      </section>

    </div>
</template>

<style scoped>

.tarjeta > div > h5{
  color: #0f9faf;
}

.tarjeta > p{
  color: rgb(0, 0, 0);
}

a{
  text-decoration: none;
}


</style>
<script lang="ts" setup>
definePageMeta({
    pageTransition: { name: 'page'}
})
</script>




