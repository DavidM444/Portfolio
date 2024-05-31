<template>
    <nav class="navbar navbar-expand-sm fixed-top">
        <div class="d-flex align-items-center justify-content-center">
            <h1 class="fs-3">Bienvenido</h1>
        </div>
            <!-- expand navbar -->

            <div class="offcanvas offcanvas-end sidebar  ms-auto" tabindex="-1" id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel">

                <!-- toggler buttom -->
                <div class="offcanvas-header header-can">
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menú</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <!-- SideBar -->

                <div class="offcanvas-body text-start nav-small">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <NuxtLink class="nav-link" exact-active-class="active" aria-current="page" to="/">About</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" exact-active-class="active" to="/contacto">Contacto</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" exact-active-class="active" :to="{ name: 'works' }">Works</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
    
        <div class="d-flex flex-row">
            <button @click="setColor" class="btn">
                <Icon v-if="$colorMode.value == 'dark'" class="icon" name="material-symbols:dark-mode" size="1.25em"/>
                <Icon v-else value="light" class="icon" name="material-symbols:light-mode" size="1.25em"/>
            </button>
    
    
            <button class="navbar-toggler button-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
                aria-label="Toggle navigation">
                <Icon name="material-symbols:menu"/>
            </button>
        
        </div>

    </nav>
</template>
<script lang="ts" setup>

//change the system color mode
function setColor(){
    const { value: currentMode } = useColorMode()
    
    const newMode = currentMode === 'dark' ? 'light' : 'dark'
    const mode = currentMode ==='system'

    useColorMode().preference = newMode
    console.log(currentMode);
}



</script>

<style>
.dark-mode body {
  background-color: var(--dark-mode-bg);
  color: #ebf4f1;
}

.dark-mode a{
    color: var(--500) !important;
}


/*
Esto es para cuando sea el navbar pequeño
    
.dark-mode .navbar{
   background: #20202380 !important;
       backdrop-filter: blur(10px);
}
    */


</style>

<style scoped>
h1{
    color: var(--500);
}
.btn{
    color: var(--600);
    background-color: var(--100);
    margin-right: 8px;
    padding: 6px 12px;
   
}
.icon{
    vertical-align: text-top;
}

.navbar{
    position: fixed;
    max-width: 75ch;
    margin: auto;
    backdrop-filter: blur(10px);
}
.nav-link{
     font-family: 'Nunito', sans-serif;
     color: var(--text);
     
}
.nav-link:hover{
    background-color:var(--100);
    border-radius: 7%;
    
}
.navbar-toggler{
    padding: 6px 12px;

}

.active{
    border-bottom: 3px solid var(--300);
    
}

.sidebar{
    max-width: 80%;
    display: inline;
    }

@media(max-width:576px) {
    .navbar{
        padding-right: 1rem;
        padding-left: 1rem;

    }
    .header-can{
        background-color: var(--200);
    }
  
    .offcanvas{
        background-color: transparent;
        border-left: none;
        max-width: 50%;

    }
    .button-toggler{
        background-color: var(--100);
        border: none;
    }

    .nav-small{
        background-color: var(--50);
        border-radius: 0px 0px 0px 10px;
    }  
}
</style>





