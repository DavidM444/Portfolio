<template>
  <main>
    <section>
      <div class="container text-center mb-3">
        <div class="p-3 p-sm-1">Hola! soy David, desarrollador de software con énfasis en Backend.</div>
        <div class="p-3 p-sm-1">Bienvenido a mi Portfolio! 😀</div>
      </div>
      <div class="row pt-2">
        <div class="text-left col-md-8 desc">
          <h2>David Muñoz</h2>
          <p>Desarrollador Back-End con conociento en ecosistema Java y Bases de datos SQL - PostgreSQl.</p>
        </div>
        <div class="text-center align-self-center col-md-4 desc1">
          <img loading="lazy" src="../assets/perfweb.webp" alt="David Muñoz, desarrollador backend, ilustratión perfil"
            class="card-img-top face" width="200" height="200">
        </div>
      </div>
    </section>
    <article>
      <section>
        <h3>Sobre mí</h3>
        <p class="about">David es un freelancer y desarrollador backend, entusiasta de la tecnología, que busca crear
          soluciones para procesos y actividades que provean servicios de bienestar común.
          Implementa ideas a través del código, buscando alcanzar una mejora significativa que contribuya en el desarrollo
          del proyecto propuesto.
        </p>
        <p class="about">Actualmente, está estudiando la implementación de nuevos conceptos en el área del <span class="tec">Backend</span>, en
          el cual maneja tecnologías como <span class="tec">Java - SpringBoot, PostgreSQL, Supabase, Redis Db, Docker</span>, entre otras.
          También ha realizado proyectos fronted, usando tecnologías como Nuxt.js, Vue.js, y herramientas de este
          ecosistema.
        </p>
      </section>
      <section>
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
      </section>
      <section class="pt-3">
        <h3>Me gusta</h3>
        <p>Codear, practicar ciclismo, cultivar, conocer y probar nuevas tecnolgias.</p>
      </section>
      <div>
        <h3>Redes Sociales</h3>
        <ul role="list">
          <li>
            <a target="_blank" href="https://github.com/DavidM444">
              <button class="btn" aria-label="Ver perfil de GitHub">
                <Icon name="bxl:github" class="icon" size="1.5em" aria-hidden="true"/>
                @davidm444
              </button>
            </a>
          </li>
        </ul>
      </div>
    </article>
  </main>
</template>


<style scoped>
h2 {
  font-family: 'Open sans', sans-serif;
  font-weight: 600;
  color: var(--800);
}

h3 {
  font-family: "Nunito", sans-serif;
  color: var(--600);

}
.tec{
  font-weight: 600;
}

.desc {
  width: 60%;
}

.desc1 {
  width: auto;
}

span,
p,
div {
  color: var(--text-black);
  font-family: "Nunito", sans-serif;
}

.btn:hover {
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

li {
  list-style-type: none;
}

ul {
  padding: 0;

}

/** Decription
 */

.description {
  border-radius: 1rem;
  padding: 10px;
  text-align: center;
}

.icon {
  margin-right: 1rem;
}

/*darrk Mode colores */

.dark-mode p {
  color: var(--100);
}

.dark-mode h2 {
  color: var(--600);
}

.dark-mode h3 {
  color: var(--400);
}

.dark-mode p {
  color: var(--100);
}

.dark-mode span {
  color: var(--700);
}

.dark-mode div {
  color: var(--100);
}

.dark-mode button {
  color: var(--100);
}
</style>
<script lang="ts" setup>
definePageMeta({
  title: 'David Muñoz | Desarrollador Back-End en Colombia',
  meta: [
    {
      name: 'description',
      content: 'Conoce el portafolio de David Muñoz, desarrollador especializado en backend, tecnología, y soluciones digitales.',
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: `
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Sobre mí",
          "description": "Conoce más sobre David Muñoz, desarrollador backend en Colombia.",
        }
      `,
    },
  ],

  ogTitle: 'David Muñoz - Portfolio Back-End Developer',
  ogDescription: 'Descubre más sobre mi experiencia como desarrollador back-end y mis proyectos recientes.',
  pageTransition: { name: 'page' },
})

</script>
