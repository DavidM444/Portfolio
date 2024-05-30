<template>
  <div class="vo">
    <div class="fondo d-flex flex-column text-center justify-content-center">
      <h2 class="view">Rodrigo David Muñoz</h2>
      <h3 class="view">Desarrollador Web</h3>

    </div>
    
  </div>
</template>
<style scoped>
.vo{
  padding-top: 4rem;
}

.fondo {
  min-height: 30vh;
}

.view{
  animation: floatAnimation 2s infinite alternate;
}
h2{
  font-size: 3rem;
  font-family: 'Open sans', sans-serif;
  color: var(--800);
}
h3{
  color: var(--400);
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-display: swap;
}

@keyframes floatAnimation{
  from{
    transform: translateY(-5px);
  }
  to {
    transform: translateY(5px);
  }
}

/**dark mode */
.dark-mode h2{
  color: var(--400);
}
.dark-mode h3{
  color: var(--600);
}

</style>