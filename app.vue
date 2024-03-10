
<template>
  <main>
    <NuxtLayout>
    
        <NuxtPage/>
    
  </NuxtLayout>
  </main>
  
</template>
<style>


body{
  background-color: rgb(32, 32, 35);
}
.page-enter-active {
  transition: opacity 2s; /* Transición de opacidad durante 2 segundos */
}

.page-enter-from {
  opacity: 0; /* Se establece la opacidad inicial en 0 para ocultar la página */
}



</style>
