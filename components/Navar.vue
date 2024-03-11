<template>
    <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="#">WELCOME</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- expand navbar -->

            <div class="offcanvas offcanvas-start sidebar" tabindex="-1" id="offcanvasDarkNavbar"
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
        </div>
    </nav>
</template>
<style scoped>
a{
    color: white;
 
}

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

<script lang="ts" setup>

</script>

