<template>
    <div class="wrapper">
        <div class="logo">
            <picture>
                <img src="./Anona.jpg" alt="">
            </picture>
            <div class="title">
                <span>Anona</span>
            </div>
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
    border-radius: 20px;
}

.logo{
    display: flex;
    align-items: center;
    gap: 1svw;
}

.logo picture{
    width: 4svw;
    aspect-ratio: 1;
    border-radius: 20px;

}

.logo img{
    width: 100%;
    border-radius: 20px;
}

.logo .title{
    font-size: 2svw;
}

@media  screen and (max-width: 1200px) {
    .logo picture{
        width: 7svw;
    }

    .logo .title{
    font-size: 4svw;
}
}

@media screen and (max-width: 900px) {
    .logo{
        padding: 1%;
    }

    .logo picture{
        width: 9svw;
    }

    .logo .title{
    font-size: 5svw;
}
    
}

@media screen and (max-width: 700px) {
    .logo picture{
        width: 12svw;
    }

    .logo .title{
    font-size: 7svw;
}

    
}

@media screen and (max-width: 500px) {
    .logo picture{
        width: 17svw;
    }

}
</style>