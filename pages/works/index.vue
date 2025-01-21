<template>
  <div class="container">
    <h3>Trabajos</h3>

    <section class="row">
      <a href="/works/api" class=" pt-3 col-12  col-sm-6">
        <div class="card tarjeta">
          <img src="/assets/api.webp"></img>
          <div>
            <h5 class="card-title">API Gestión Textil</h5>
          </div>
          <p class="card-text">API destinada al manejo y gestión de registros de calidad textil.
            Incluye funcionalidades de inicio de sesión y gestión de roles para los usuarios.</p>
        </div>
      </a>

      <a href="/works/quality" class="pt-3  col-12 col-sm-6 ">
        <div class="card tarjeta">
          <img src="/assets/qualitytex.webp" alt="ilustracion web Quality Tex" width="100%" height="100%"></img>
          <div>
            <h5 class="card-title">Quality Tex</h5>
          </div>
          <p class="card-text">Web para la gestión de registros textiles, en una empresa textil.
            Presenta y maneja información de manera eficaz.
          </p>
        </div>
      </a>

      <a href="/works/apprevenue" class="pt-3  col-12 col-sm-6"  width="100%" height="100%">
        <div class="card tarjeta">
          <img src="/assets/revenue.webp" alt="pokedex"></img>
          <div>
            <h5 class="card-title">App revenue</h5>
          </div>
          <p class="card-text">Web para manejar ingresos y gastos monetarios en COP(pesos colombianos).
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
  title: 'Proyectos',
  description: 'Proyectos realizados con tecnolgias como Nuxt.js , Srprig Boot, Postgresql',
  pageTransition: { name: 'page' }
})
</script>
