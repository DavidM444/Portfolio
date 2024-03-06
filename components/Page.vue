
<template>
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
          <a target="_blank" href="">
            <span><button></button>Github</span>
          </a>
        </li>
      </ul>
    </div>
  </article>

</template>

<script lang="ts" setup>

</script>

<style scoped>
.fondo{
  background-color: rgb(116, 82, 82);
  margin-top: 1rem;

  min-height: 30vh;
  background-size: cover;

}
h2{
  font-family: 'Open sans', sans-serif;

  font-weight: 600;
  padding-top: 2rem;
}
h3{
  color: brown;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
 
}
.face{
  height: auto;
  width: 15vh;
  border-radius: 50%;
}
.about{
  text-indent: 1rem;
}
.date{
  font-weight: bold;
  margin-right: 1rem;
}


</style>
