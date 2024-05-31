<template>
  <article>
    <div>
      <div class="container text-center mb-3">
        <div class="p-3 p-sm-1">Hola! soy desarrollador Back-End, en Colombia.</div>
        <div class="p-3 p-sm-1">Bienvenido a mi Portfolio! 😀</div>
      </div>
      <div class="row pt-2">
        <div class="text-left col-md-8 desc">
          <h2>David Muñoz</h2>
          <p>Amante Tecnológico (Desarrollador / Jugador de videojuegos), también del deporte (fútbol).</p>
        </div>
        <div class="text-center align-self-center col-md-4 desc1">
          <img loading="lazy" src="../assets/perfweb.webp" alt="" class=" card-img-top face">
        </div>
      </div>
    </div>
    <article>
      <div>
        <h3>Sobre mí</h3>
        <p class="about">David es un freelancer y desarrollador web, entusiasta de la tecnología, que busca crear soluciones para procesos y actividades que provean servicios de bienestar común.
          Acostumbra a implementar sus ideas a través del código, encontrando múltiples formas de crear soluciones.
          Cuando no está codificando, suele practicar deportes como el fútbol o realizar actividades laborales en el campo, disfrutando del contacto con la naturaleza y lo que lo rodea.
          Actualmente, está estudiando la implementación de nuevos conceptos en el área del backend con nuevas tecnologías.
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
                <Icon name="bxl:github" class="icon" size="1.5em" />
                @davidm444
              </button>
            </a>
          </li>
        </ul>
      </div>
    </article>
  </article>
</template>


<style scoped>
h2 {
  font-family: 'Open sans', sans-serif;
  font-weight: 600;
  color: var(--800);
}

h3 {
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  color: var(--600);

}

.desc {
  width: 60%;
}

.desc1{
  width: auto;
}

span,p,div{
    color: var(--text-black);
    font-family: "Nunito", sans-serif;
}
.btn:hover{
  color: var(--500);
}

.face {
  position: relative;
  height: auto;
  width: 14vh;
  border-radius: 100%;
  
}

.about {
  text-indent: 1rem;
  text-align: start;
}

.date {
  font-weight: bold;
  margin-right: 1rem;
}
li{
  list-style-type: none;
}
ul{
  padding: 0;

}

/** Decription
 */

 .description{
  border-radius: 1rem;
  padding: 10px;
  text-align: center;
 }

 .icon{
  margin-right: 1rem;
 }

 /*darrk Mode colores */

 .dark-mode p{
  color: var(--100);
 }
 .dark-mode h2{
  color: var(--600);
 }
 .dark-mode h3{
  color: var(--400);
 }
.dark-mode p{
  color: var(--100);
}
.dark-mode span{
  color: var(--700);
}
.dark-mode div{
  color: var(--100);
}
.dark-mode button{
  color: var(--100);
}
</style>
<script lang="ts" setup>
definePageMeta({
    pageTransition: { name: 'page' },
})

</script>
