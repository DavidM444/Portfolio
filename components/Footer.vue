<template>
  <div class="col-12 col-sm-8 m-auto pt-2">
    <div class="card colf">
      <div class="card-body">
          <footer>
            <p align="center" class="fs">© <!-- -->{{ time }}<!-- --> David Muñoz. All Rights Reserved.</p>
          </footer>
      </div>
    </div>

  </div>
</template>
<script lang="ts" setup>
const time = new Date().getFullYear()
</script>

<style scoped>

.colf{
  background-color: dodgerblue;
}

.fs{
  font-size: 14px;
  align-self: center;
}

</style>