<template>
  <div class="row">
    <div class="col mt-3 text-start infoTech">
      <h2>Quality Tex - WEB</h2>
      <p>La plataforma web que implementa esta API de gestión de calidad textil ofrece a los usuarios una interfaz intuitiva y fácil de usar para gestionar todas 
        las actividades relacionadas con las muestras textiles. Los usuarios pueden registrarse de manera segura y autenticarse para acceder a las funciones de la plataforma.
         Una vez dentro, podrán cargar datos detallados de muestras textiles, incluyendo información sobre pruebas específicas y resultados obtenidos.
      </p>
      <p>
        La web proporciona herramientas de visualización y análisis de datos que permiten a los usuarios realizar un seguimiento detallado de la calidad de las telas a lo largo del tiempo.
         Además, ofrece funciones de búsqueda avanzada para encontrar rápidamente información específica sobre muestras o pruebas textiles.
      </p>
   
    </div>
    <ButtonLink :url=urlData />

    <div>
      <div class="mt-3">
        <h3>Tecnologías y recursos</h3>
      </div>
      <div class="table-responsive-xl">
        <table class="table table-primary">
          <tbody>
            <tr class="recursos">
              <td scope="row">
                <Icon name="devicon:javascript" size="2em"/>
              </td>
              <td>JavaScript</td>
              <td>Lenguaje de Programación</td>
            </tr>
            <tr class="recursos">
              <td scope="row">
                <Icon name="devicon:vuejs" size="2em"/>
              </td>
              <td>Vue JS</td>
              <td>Framework de desarrollo de JavaScript</td>
            </tr>
            <tr class="recursos">
              <td scope="row">
                <Icon name="devicon:bootstrap-wordmark" size="2em" />
              </td>
              <td>Boostrap</td>
              <td>Herramienta para diseño y desarrollo de sitios web</td>
            </tr>
            <tr class="recursos">
              <td scope="row">
                <Icon name="material-symbols:notifications-unread" size="2em"/>
              </td>
              <td>SweetAlert2</td>
              <td>Biblioteca para cración de mensajes de alerta.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const urlData = {
  link:"https://github.com/DavidM444/Textil-Fronted",
  text:"Visitar"
}

</script>
<style scoped>
@import '~/assets/css/technologies.css';
</style>
