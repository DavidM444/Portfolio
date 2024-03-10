<template>
    <div class="container">
      <h3>Works</h3>
      <section class="row">
        <a href="/works/api" class=" pt-3 col-12  col-sm-6">
          <div class="card tarjeta" >
            <img src="~/assets/api.jpg" class=" " alt="...">
            <div>
              <h5  class="card-title">Api </h5>
            </div>
            <p class="card-text">Api destinada al manejo y gestion de registros de calidad textil.
                Dispone de Login y gestion de roles para los usuarios. </p>
            </div>
        </a>
        <a href="/works/quality" class="pt-3  col-12 col-sm-6 ">
          <div class="card tarjeta">
            <img src="~/assets/qualitytex.jpg" alt="...">
            <div>
              <h5 class="card-title">Quality Tex</h5>
            
            </div>
            <p class="card-text">Web para la gestion de registros textiles, en una empresa textil.
                Presenta y maneja informacion de manera eficaz.
                </p>
          </div>
        </a>
        <a href="/works/pokedex" class="pt-3  col-12 col-sm-6">
          <div class="card tarjeta">
            <img src="~/assets/oip.jpg" alt="...">
            <div>
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
  color: white;
  font-size: 20px;
  margin-top: 0.6rem;
  text-align: center;
}

.tarjeta > p{
  color: rgb(0, 0, 0);
  text-align: center;
  word-wrap: break-word;
  font-size: 14px;
  color: white;
}
.card{
  background-color: transparent;
}

a{
  text-decoration: none;
}

.row{
  row-gap: 1.5rem;
  grid-template-columns: repeat(1, minmax(0px, 1fr));

}


</style>
<script lang="ts" setup>
definePageMeta({
    pageTransition: { name: 'page'}
})
</script>




