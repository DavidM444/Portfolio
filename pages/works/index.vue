<template>
  <div class="container">
    <h3>Works</h3>

    <section class="row">
      <a href="/works/api" class=" pt-3 col-12  col-sm-6">
        <div class="card tarjeta">
          <img src="~/assets/api.jpg" class=" " alt="...">
          <div>
            <h5 class="card-title">Api</h5>
          </div>
          <p class="card-text">API destinada al manejo y gestión de registros de calidad textil.
            Incluye funcionalidades de inicio de sesión y gestión de roles para los usuarios.</p>
        </div>
      </a>

      <a href="/works/quality" class="pt-3  col-12 col-sm-6 ">
        <div class="card tarjeta">
          <img src="~/assets/qualitytex.jpg" alt="...">
          <div>
            <h5 class="card-title">Quality Tex</h5>
          </div>
          
          <p class="card-text">Web para la gestión de registros textiles, en una empresa textil.
            Presenta y maneja información de manera eficaz.
          </p>
        </div>
      </a>

      <a href="/works/pokedex" class="pt-3  col-12 col-sm-6">
        <div class="card tarjeta">
          <img src="~/assets/oip.jpg" alt="...">
          <div>
            <h5 class="card-title">Pokedex</h5>
          </div>
          <p class="card-text">Toda la información de tus pokemón que deses conocer, con una interfaz atractiva.
          </p>
        </div>
      </a>
    </section>
  </div>
</template>

<style scoped>

h3{
  font-weight: 700;
  color: var(--500);
  font-family: 'Noto', sans-serif;
}
.tarjeta>div>h5 {
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  margin-top: 8px;
  text-align: center;
}

.tarjeta>p {
  color:var(--text);
  text-align: center;
  word-wrap: break-word;
  font-family: 'Nunito', sans-serif;

}
.tarjeta{
  background-color: transparent;
  border: none;

}

.tarjeta h5 {
  color: var(--400) ;
}

a {
  text-decoration: none;
}

.row {
  row-gap: 1.5rem;
  grid-template-columns: repeat(1, minmax(0px, 1fr));

}

/**darik mode */
.dark-mode .tarjeta>p {
  color: var(--100);
}
.dark-mode h5{
  color: var(--400);
}
</style>

<script lang="ts" setup>
definePageMeta({
  pageTransition: { name: 'page' }
})
</script>
