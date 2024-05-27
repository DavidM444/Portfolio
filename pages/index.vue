<template>
  <div >
    <div>
      <div class="container description">
        <div class="p-3 p-sm-1">Hola! soy desarrollador Back-End, en Colombia.</div>
        <div class="p-3 p-sm-1">Bienvenido a mi Portfolio! 😀</div>
      </div>
      <div class="row">
        <div class="text-left col-md-8">
          <h2>David Muñoz</h2>
          <p>Amante Tecnológico(Desarrollador /jugador de videojuegos), el deporte(fútbol )</p>
        </div>
        <div class="text-center align-self-center col-md-4">
          <img loading="lazy" src="../assets/mylogo.jpg" alt="" class=" card-img-top face">
        </div>
      </div>
    </div>
    <article>
      <div>
        <h3>Sobre mí</h3>
        <p class="about">David, es un freelacer y desarrollador web, entusiasta de la tecnología que busca crear soluciones para procesos y actividades
           que provean servicios de bienestar común. Acostumbra implementar sus ideas a través del código, encontrando múltiples formas de crear soluciones.
          Cuando no codifica suele practicar deportes como el futbol, o realizar actividades laborales del campo, teniendo un contacto con la naturaleza y
          disfrutando de lo que lo rodea. Actualmente estudia la implementación de nuevos conceptos en el área del back end con nuevas tecnologías.

        </p>
      </div>
      <div>
        <h3>Biografía</h3>
        <div>
          <span class="date">2022</span>
          Graduado en Desarrollo Web(UNAL)
        </div>
        <div>
          <span class="date">2023</span>
          Backend Developer JAVA - Oracle
        </div>
        <div>
          <span class="date">2024</span>
          Análisis Y Desarrollo De Software - SENA
        </div>
        <div>
          <span class="date">2024</span>
          Nuxt Developer
        </div>
        <div>
          <span class="date">2024</span>
          Aprendiendo Redis(motor de base de datos en memoria)
        </div>
      </div>
      <div>
        <h3>Me gusta</h3>
        <p>Codear , Jugar, Cultivar, Diseñar</p>
      </div>
      <div>
        <h3>Redes Sociales</h3>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/DavidM444">
              <button class="btn">
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
  width: 14vh;
  padding: 8px;
  border-radius: 50%;
  border: 2px solid white;
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
  text-align: center;
 }


</style>
<script lang="ts" setup>
definePageMeta({
    pageTransition: { name: 'page' },
})

</script>
