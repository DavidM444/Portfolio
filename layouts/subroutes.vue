<template>
  <div> 
      <div class="page2">
        <Navbar/>
      <slot></slot>

      <Footer/>
      </div>
  </div>
</template>


<style>
.page2{
  max-width: 60ch;
  margin-inline-start: auto;
  margin-inline-end: auto;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;

}
</style>