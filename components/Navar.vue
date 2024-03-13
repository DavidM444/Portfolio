<template class="template">
    <nav class="navbar navbar-expand-sm">
        <a class="navbar-brand" href="#">WELCOME</a>
        <div class="d-flex ms-auto">


            <!-- expand navbar -->

            <div class="offcanvas offcanvas-end sidebar justify-content-center" tabindex="-1" id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel">

                <!-- toggler buttom -->
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menú</h5>
                    <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <!-- SideBar -->

                <div class="offcanvas-body text-center ">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <NuxtLink class="nav-link active" aria-current="page" to="/">About</NuxtLink>

                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link active" to="/contacto">Contacto</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink :to="{ name: 'works' }" class="nav-link active">Works</NuxtLink>
                        </li>

                    </ul>

                </div>

            </div>
            <div class="mode">
             
                <button  @click="setColor" class="btn btn-primary">
                    <Icon v-if="$colorMode.value=='dark'" name="material-symbols:light-mode"/>
                    <Icon v-else value="light" name="material-symbols:dark-mode"/>
                </button>
            </div>
            <div class="align-self-center ">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                

            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">


function setColor(){

    const { value: currentMode } = useColorMode()
    
    const newMode = currentMode === 'dark' ? 'light' : 'dark'
    
    useColorMode().value = newMode
 /*   if(colorMode.value=='dark'){
        colorMode.value = 'light'
    }else{
    colorMode.value='dark'
    }
*/
}



</script>

<style>
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}

.dark-mode a{
    color: white !important;
}
</style>

<style scoped>


.active{
    border-bottom: 2px solid purple;
}

.sidebar{
    max-width: 80%;
}

@media(max-width:576px) {
    .sidebar{
        background-color: rgb(77, 82, 101);
        backdrop-filter: blur(10px);
    }
}
</style>





