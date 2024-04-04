<template>
    <div class="wrapper">
        <div class="logo">
            <picture>
                <img src="./Anona.jpg" alt="">
            </picture>
        </div>
        <div class="profile">
        </div>
    </div>

</template>


<style scoped>
.wrapper{
    background-color: var(--accent-bg-color);
    width: calc(100svw - 6svw);


    display: flex;
    align-items: center;

    padding: 1svw;
    margin: 1svw 2svw 3svw 2svw;
    border-radius: 10px;
}

.logo{
    display: flex;
    align-items: center;
    border-radius: 20px;
}

.logo picture{
    width: 6svw;
    aspect-ratio: 1;

}

.logo img{
    width: 100%;
    border-radius: 20px;
}

@media  screen and (max-width: 1200px) {
    .logo picture{
        width: 7svw;
    }
}

@media screen and (max-width: 900px) {
    .logo{
        padding: 2%;
    }

    .logo picture{
        width: 9svw;
    }

    
}

@media screen and (max-width: 700px) {
    .logo picture{
        width: 12svw;
    }

    
}

@media screen and (max-width: 500px) {
    .logo picture{
        width: 17svw;
    }

}
</style>