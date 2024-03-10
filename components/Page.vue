<template>
  <!--Esta es una pagina, por lo tanto no se esta utilizando. Debo eliminar este supuesto componente-->
  <div>
    <div class="fondo img-fluid container text-center">
      <h2>Rodrigo David Muñoz</h2>
      <h3>Desarrollador Web</h3>

    </div>
    <div class="container bg-warning">
      <div class="text-center p-3 p-sm-1">Hi! i am Backend Developer from Colombia.</div>

    </div>
    <div class="container-fluid">
      <div class="text-left">
        <h2>David Muñoz</h2>
        <p>Amante Tecnologico(Developer /Deportist /Gamer)</p>
      </div>
      <div class="text-center">
        <img src="../assets/mylogo.jpg" alt="" class="image-fluid card-img-top face">
      </div>
    </div>
  </div>
  <article>
    <div>
      <h3>About</h3>
      <p class="about">David, es un freelacer y desarrollador web, entusiasta de la
        tecnologia que busca crear soluciones para procesos y actividades
        que provean servicios de bienestar comun. Acostumbra implementar sus
        ideas a traves del codigo, encontrando multiples formas
        de crear soluciones. Cuando no codifica suele practicar deportes como
        el futbol, o realizar actividades laborales del campo, teniendo un
        contacto con la naturaleza y disfrutando de lo que lo redea.
        Actualemente estudia la implementacion de nuevos conceptos en el area
        del backend con nuevas tecnologias.

      </p>
    </div>
    <div>
      <h3>Bio</h3>
      <div>
        <span class="date">2022</span>
        Grduado de Desarrollador Web(UNAL)
      </div>
      <div>
        <span class="date">2023</span>
        Backend Developer JAVA - Oracle
      </div>
      <div>
        <span class="date">2024</span>
        Analisis Y Desarrollo De Software - SENA
      </div>
      <div>
        <span class="date">2024</span>
        Nuxt Developer
      </div>
    </div>
    <div>
      <h3>Me gusta</h3>
      <p>Codear , Jugar, Cultivar, Diseñar</p>
    </div>
    <div>
      <h3>On media</h3>
      <ul class="">
        <li>
          <a target="_blank" href="https://github.com/DavidM444">
            <button>
              <span>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" aria-hidden="true"
                  focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z">
                  </path>
                </svg>
                "@davim444"</span>
            </button>

          </a>
        </li>
      </ul>
    </div>
  </article>

</template>

<script lang="ts" setup>

</script>

<style scoped>








.face {
  height: auto;
  width: 15vh;
  border-radius: 50%;
}

.about {
  text-indent: 1rem;
}

.date {
  font-weight: bold;
  margin-right: 1rem;
}
</style>
