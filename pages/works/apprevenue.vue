<template>
  <div class="row">
    <div class="col text-start infoTech">
      <h2>Gestor de gastos e ingresos</h2>
      
      <div class="row p-3">
      <img src="~/assets/revenue.webp" alt="">
    </div>
     <p>Es una web que permite llevar una gestion de tus gastos e ingresos monetarios. El monto manejado por la app, esta definido
      en pesos colombianos(COP).
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
                <Icon name="vscode-icons:file-type-java" size="2em"/>
              </td>
              <td>Java</td>
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
  link:"https://github.com/DavidM444/Account",
  text: "Visitar"
}
</script>



<style scoped>
@import '~/assets/css/technologies.css';
</style>