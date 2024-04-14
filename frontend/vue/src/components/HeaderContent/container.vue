<template>
    <header>
        <div class="logo">
            <picture>
                <img src="./Anona.jpg" alt="">
            </picture>
            <div class="title">
                <span>Anona</span>
            </div>
        </div>

        <div class="login-container" v-if=!auth>
                <button type="button" class="action__button" @click="regModal = true">Регистрация</button >
                    <RegModal  v-show="regModal" @close="regModal = false"/>
                <button type="button" class="action__button" @click="loginModal = true">Войти</button >
                    <LoginModal  v-show="loginModal" @close="loginModal = false"/>
                    <span></span>
            </div>

        <div class="account" v-if=auth>

            <div class="name">
                <span>{{ username }}</span>
            </div>

            <div class="avatar">
                <picture>
                    <img src="../../../public/assets/profile-simple-svgrepo-com.svg" alt="">
                </picture>
            </div>
        </div>


    </header>

</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import RegModal from '../ModalWindows/registration.vue';
import LoginModal from '../ModalWindows/login.vue';

let regModal = ref(false);
let loginModal = ref(false);
const store = useStore();

const username = computed(() => store.getters.getUsername)
const auth = computed(() => store.getters.getAuthorized)

</script>   

<script>
import RegModal from '../ModalWindows/registration.vue'
import LoginModal from '../ModalWindows/login.vue'

export default {
  name: 'HeaderContainer',
  components: {
    RegModal,
    LoginModal
  }
}
</script>


<style scoped>
header{
    background-color: var(--accent-bg-color);
    width: calc(100svw - 6svw);


    display: grid;
    grid-auto-columns: 1fr; 
    grid-auto-rows: 1fr; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 10px 10px; 
    grid-template-areas: 
    "logo account"; 
    
    padding: 0.5svw 1svw;
    margin-bottom: 1svw;
    border-radius: 20px;
}



.logo{
    justify-self: start; 
    grid-area: logo; 
    gap: 1svw;

    display: flex;
    justify-content: center;
    align-items: center;
}

picture{
    width: 3svw;
    aspect-ratio: 1;

    display: flex;
    justify-content: center;
    align-items: center;
}

img{
    border-radius: 1svw;
    width: 100%;

}


.logo .title, .account .name{
    font-size: 1.5svw;
    display: flex;
    align-items: center;
}

.account, .login-container {
  justify-self: end; 
  grid-area: account; 

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1svw;
}

.login-container{
    gap: 0.5svw;
}

.login-container .action__button{
    font-size: 1svw;
    padding: 0.5svw;
    border-radius: 0.7svw;
    border: none;
}

.avatar{
    aspect-ratio: 1;
}

.avatar img{
    width: 100%;
}



@media  screen and (max-width: 1200px) {
    picture{
        width: 5svw;
    }

    .logo .title, .account .name{
    font-size: 2.5svw;
}
}

@media screen and (max-width: 900px) {


    picture{
        width: 7svw;
    }

    picture img{
        border-radius: 3svw;
    }

    .logo .title, .account .name{
    font-size: 3svw;
}
    
}

@media screen and (max-width: 700px) {

    header{
        padding: 1svw 2svw;
    }
    picture{
        width: 8svw;
    }

    .logo .title, .account .name{
    font-size: 5svw;
}

    
}

@media screen and (max-width: 500px) {
    .logo picture{
        width: 9svw;
    }

}
</style>