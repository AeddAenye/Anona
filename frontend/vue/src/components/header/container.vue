<template>
    <div class="wrapper">
        <div class="logo">
            <picture>
                <img src="Anona.jpg" alt="">
            </picture>
        </div>
        <div class="profile">
            ТУТ БУДЕТ ПРОФИЛЬ
        </div>
    </div>

</template>

<script>
export default {
    name: 'headerContainer',
  components: {
  }
}
</script>
<script setup>

</script>

<style scoped>
.wrapper{
    background-color: var(--accent-bg-color);
    width: 100svw;


    display: flex;
    align-items: center;

    padding: 10px;
    margin-bottom: 3%;
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


.profile {
  justify-self: end; 
  align-self: center; 
  grid-area: profile; 
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