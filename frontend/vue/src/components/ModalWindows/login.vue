<template>
    <div class="background">
      <div class="reg-container">
        <div class="reg-container__exit">
          <button type="button" @click="close()">X</button>
        </div>
        <input type="text" placeholder="Ваш ник" v-model="username" required minlength="4" maxlength="8">
        <input type="password" name="" placeholder="Ваш пароль" v-model="password" required minlength="8">
        <button type="button" @click="login()">Войти</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineEmits, ref, inject } from 'vue'
  import hashPassword from './hashpasswd.js'
  
  const store = inject('store')
  const emits = defineEmits(['close'])
  
  let username = ref('')
  let password = ref('')
  
  const close = () => {
    username.value = ''
    password.value = ''
    emits('close')
  }
  
  const login = async () => {
    const data = {
      username: username.value,
      hashedPassword: hashPassword(password.value)
    }
  
    try {
      await store.dispatch('login', data);
      await store.dispatch('getChats');
      emits('close');
    } catch (error) {
      console.error('Login Error:', error);
    }
  }
  </script>
  
<style scoped>

.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100svw;
    height: 100svh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
}

.reg-container__exit {
    position: absolute;
    top: 1svw;
    right: 1svw;
    
}

.reg-container__exit button {
    background-color: red;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 0.7svw;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
}
.reg-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 50%;
    height: 50%;
    
    background-color:  rgb(30, 30, 30);
    border-radius: 2svw;
    padding: 2svw;
    box-sizing: border-box;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1svw;

}

input{
    width: 70%;
    height: 5vh;
    font-size: 1.5svw;
    border-radius: 2svw;
    padding: 1svw 2svw;
    border: none;
    background-color: rgb(50, 50, 50);
    color: white;

}

button{
    font-size: 1.2svw;
    padding: 0.5svw;
    border-radius: 0.7svw;
    border: none;
}
</style>