<template>
  <div>
    <button>
      <a class="butom" :href="url.link" >{{ url.text }}</a>
    </button>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  url: {
    type: Object,
    required: true
  }

})

</script>

<style>

button{
  padding: 8px 16px;
  border-radius: 10%;
  justify-content: center;
  align-items: center;
  background-color: var(--100);
  border-color: var(--600);
  transition-duration: 500ms;
  transition-property: background, scale;
  transition-timing-function: ease-in;


}
a{
  color: var(--600);
  text-decoration: none;
  font-family: 'Open Sans',sans-serif;
}
button:hover{
  background-color: var(--400);
  border-color: var(--400);
  scale: 1;


}
button:hover a{
  color: var(--100) !important;

}

</style>