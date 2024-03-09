
<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
  background-color: rgb(62, 223, 22);
}
.page-enter-from,
.page-leave-to {
  background-color: rgb(55, 31, 162);
  opacity: 2;
  filter: blur(1rem);
}

</style>