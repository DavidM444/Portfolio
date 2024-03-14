<template>
    <nav class="navbar navbar-expand-sm fixed-top">
        <div>
            <h1 class="fs-3">WELCOME</h1>
        </div>
            <!-- expand navbar -->

            <div class="offcanvas offcanvas-end sidebar  ms-auto" tabindex="-1" id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel">

                <!-- toggler buttom -->
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menú</h5>
                    <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas"
                        aria-label="Close">x</button>
                </div>
                <!-- SideBar -->

                <div class="offcanvas-body  text-start menu ">
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

    
        <div class="d-flex flex-row">
            <button @click="setColor" class="btn btn-primary">
                <Icon v-if="$colorMode.value == 'dark'" name="material-symbols:light-mode" />
                <Icon v-else value="light" name="material-symbols:dark-mode" />
            </button>
    
    
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
                aria-label="Toggle navigation">
                <Icon name="material-symbols:menu" />
            </button>
        
        </div>

    </nav>
</template>
<script lang="ts" setup>

function setColor(){

    const { value: currentMode } = useColorMode()
    
    const newMode = currentMode === 'dark' ? 'light' : 'dark'
    

    useColorMode().value = newMode
    console.log(currentMode);
    
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
.dark-mode .navbar{
    background: #20202380;
    backdrop-filter: blur(10px);
}

</style>

<style scoped>
.navbar{
    position: fixed;
    max-width: 60ch;
    margin: auto;
    backdrop-filter: blur(10px);


}
.navbar-toggler{
    padding: 6px 12px;
    background-color:var(--gossip-200);
}

.active{
    border-bottom: 2px solid purple;
}

.sidebar{
    max-width: 80%;
    display: inline
    }

@media(max-width:576px) {
    .sidebar .menu{
        background-color: rgba(255, 255, 255, 0.5); /* Fondo semi-transparente */
        backdrop-filter: blur(10px);
    }
    .navbar{
        padding-right: 2rem;
        padding-left: 2rem;
    }
    
}
</style>





