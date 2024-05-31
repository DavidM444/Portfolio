<template>
  <div class="row">
    <div class="col text-start infoTech">
      <h2>Pokedex</h2>
      
      <div class="row p-3">
      <img src="~/assets/oip.jpg" alt="">
    </div>
     <p>Es una web que muestra toda la información acerca de los pokemones que existen en la PokeApi. Esta web
        consume esta api para mostrar de manera dinámica la información y datos que esta API provee.
      </p>
    </div>
    <ButtonLink :url=url />    
    <div class="mt-3">
      <div>
        <h3>Tecnologías y recursos</h3>
      </div>

      <div class="table-responsive-xl">
        <table class="table table-primary">
          <tbody>
            <tr class="recursos">
              <td scope="row">
                <Icon name="devicon:javascript" size="2em" />
              </td>
              <td>JavaScript</td>
              <td>Lenguaje de Programación</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const url = {
  link:"https://davidm444.github.io/Pokedex/",
  text: "Follow"
}
</script>



<style scoped>
@import '~/assets/css/technologies.css';
</style>