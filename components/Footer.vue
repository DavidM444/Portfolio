<template>
  <div class="col-12 col-sm-8 m-auto colf pt-3">     
      <footer>
        <p align="center" class="fs">© <!-- -->{{ time }}<!-- --> David Muñoz. All Rights Reserved.</p>
      </footer>
  

  </div>
</template>
<script lang="ts" setup>
const time = new Date().getFullYear();
</script>

<style scoped>
.colf{
  box-sizing: border-box;
}

.fs{
  font-size: 14px;
  align-self: center;
  font-family: 'Noto' , sans-serif;
  color: var(--text);
}
.dark-mode .fs{
  color: var(--100);
}

</style>