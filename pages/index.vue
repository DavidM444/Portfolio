<template>
  <div>
    <div>
      <div class="container description">
        <div class="text-center p-3 p-sm-1">Hi! i am Backend Developer from Colombia.</div>

      </div>
      <div class="row">
        <div class="text-left col-md-8 ">
          <h2>David Muñoz</h2>
          <p>Amante Tecnologico(Developer /Deportist /Gamer)</p>
        </div>
        <div class="text-center align-self-center col-md-4">
          <img loading="lazy" src="../assets/mylogo.jpg" alt="" class=" card-img-top face">
        </div>
      </div>
    </div>
    <article>
      <div>
        <h3>Work</h3>
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
                <Icon name="bxl:github" size="1.5em" />
                @davidm444
              </button>
            </a>
          </li>
        </ul>
      </div>
    </article>
  </div>


</template>


<style scoped>
h2 {
  font-family: 'Open sans', sans-serif;

  font-weight: 600;
  padding-top: 2rem;
}

h3 {

  font-family: "Nunito", sans-serif;
  font-weight: 700;

}
h3,h2,span,p,div{
    color: ''
}

.face {
  position: relative;
  height: auto;
  width: 16vh;
  padding: 8px;
  border-radius: 50%;
}

.about {
  text-indent: 1rem;
  text-align: justify;
  hyphens: auto;
  font-family: 'Nunito', sans-serif;
 
}

.date {
  font-weight: bold;
  margin-right: 1rem;
}

/** Decription
 */

 .description{
  border-radius: 1rem;
  padding: 10px;
 }

/* ... */
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
<script lang="ts" setup>
definePageMeta({
    pageTransition: { name: 'rotate' }
})

</script>
