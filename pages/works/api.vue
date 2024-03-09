<template>
  <div>
    <Navar />
    <div>
      <h2>Desde pagina API</h2>
    </div>
  </div>

</template>

<script lang="ts" setup>
definePageMeta({
  layout: false,
})

</script>

<!--Transition for pages on works/   -->
<style>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
</style>

