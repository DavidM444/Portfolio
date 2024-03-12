<template>
    <nav class="navbar navbar-expand-sm navbar-light">
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
                <button class="btn btn-primary h-1 ">
                    <svg viewBox="0 0 32 32" width="30" height="34">
                        <path
                            d="M26.668 14.668h4v2.664h-4v-2.664m-25.336 0h4v2.664h-4v-2.664m16-13.336v4h-2.664v-4h2.664M6.559 4.668l2.84 2.852-1.891 1.878-2.84-2.824 1.89-1.906m16.044 2.84 2.824-2.84 1.906 1.906-2.84 2.824-1.89-1.89M16 8a8 8 0 0 1 8 8 8.017 8.017 0 0 1-4 6.934v2.398c0 .738-.598 1.336-1.332 1.336h-5.336A1.335 1.335 0 0 1 12 25.332v-2.398A8.017 8.017 0 0 1 8 16a8 8 0 0 1 8-8m2.668 20v1.332c0 .738-.598 1.336-1.336 1.336h-2.664a1.335 1.335 0 0 1-1.336-1.336V28h5.336m-4-4h2.664v-2.84A5.331 5.331 0 0 0 16 10.668a5.331 5.331 0 0 0-1.332 10.492Zm0 0" />
                    </svg>

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

<script lang="ts" setup>

</script>

