<template>
  <div class="vo">
    <div class="fondo d-flex flex-column text-center justify-content-center">
      <h2 class="view">Rodrigo David Muñoz</h2>
      <h3 class="view">Desarrollador Web</h3>

    </div>
    
  </div>
</template>
<style>
.vo{
  padding-top: 4rem;
}

.fondo {
  min-height: 30vh;
}

h2 {
  font-family: 'Open sans', sans-serif;
  color: rgb(245, 185, 96);

}

h3 {
  color: brown;
  font-family: "Nunito", sans-serif;


}

.view{
  animation: floatAnimation 2s infinite alternate;
}
.fondo > h2{
  font-size: 3rem;
}
.fondo > h3{
  font-size: 2rem;
}

@keyframes floatAnimation{
  from{
    transform: translateY(-5px);
  }
  to {
    transform: translateY(5px);
  }
}

</style>