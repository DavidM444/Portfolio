<template>
    <div>
        <h2>Menu Normal</h2>
        <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#Id1"
            aria-controls="Id1"
        >
            Enable both scrolling & backdrop
        </button>
        
        <div
            class="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabindex="-1"
            id="Id1"
            aria-labelledby="Enable both scrolling & backdrop"
        >
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="Enable both scrolling & backdrop">
                    Backdrop with scrolling
                </h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div class="offcanvas-body">
                <p>
                    Try scrolling the rest of the page to see this option in
                    action.
                </p>
            </div>
        </div>
        
    </div>
</template>