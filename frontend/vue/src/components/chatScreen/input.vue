<template>
    <div class="container">
      <input type="text" v-model="inputValue" class="input" placeholder="Сообщение">
      <button type="button" class="send"><img src="../../../public/assets/send.svg" alt=""></button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  let inputValue = ref('');
  </script>
  
  <style scoped>
  .container {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    width: 50%;
    height: 80px;
    padding: 0.5svw 1svw;

    background-color: rgb(50, 50, 50);
    border-radius: 2svw;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1svw;
  }
  
  .input {
    flex: 1;
    padding: 0.5svw 0.8svw;
    font-size: 1.3svw;
    border-radius: 1svw;
    border: none;
    color: white;
    background-color: rgba(0, 0, 0, 0);
    outline:none;
  }
  
  .input::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  .input:active{
    border: none;
  }

  .send{
    padding: 0.5svw;
    display: flex;
    justify-content: center;
    align-self: center;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    outline: none;
  }
  .send img {
    width: 40px;
  }
  </style>
  