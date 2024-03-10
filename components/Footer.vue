<template>
  <div class="col-12 col-sm-8 m-auto colf pt-3">
  
      
      <footer>
        <p align="center" class="fs">© <!-- -->{{ time }}<!-- --> David Muñoz. All Rights Reserved.</p>
      </footer>
  

  </div>
</template>
<script lang="ts" setup>
const time = new Date().getFullYear()
</script>

<style scoped>

.colf{
  box-sizing: border-box;

}

.fs{
  font-size: 0.875rem;
  align-self: center;
  color: whitesmoke;
}

</style>