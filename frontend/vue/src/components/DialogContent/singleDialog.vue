<template>
    <div class="single-dialog-container">
        <div class="avatar full-center"><img src="../../../public/assets/profile-simple-svgrepo-com.svg"></div>
        <div class="name align-center">{{ dialogName }}</div>
        <div class="last-message align-center"></div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const { lastMessage } = defineProps(['dialogName'])
</script>
  
  <style scoped>
  .single-dialog-container {
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: 1fr 2fr;
    gap: 1% 2%;
    grid-auto-flow: row;
    grid-template-areas: "avatar name" "avatar name";
    margin: 2% 0px;
    padding: 10px;
    transition: all 0.3s ease;
  }
  
  .single-dialog-container:hover {
    background-color: rgb(50, 50, 50);
  }
  
  .avatar {
    justify-self: center;
    align-self: center;
    grid-area: avatar;
    aspect-ratio: 1;
    position: relative;
  }
  
  .avatar img {
    width: 100%;
    height: 100%;
    border-radius: 2svw;
  }
  
  .notifie {
    width: 20%;
    height: 20%;
    background-color: rgb(12, 228, 12);
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
  }
  
  .name {
    grid-area: name;
    font-size: 1.2vw;
  }
  
  .last-message {
    grid-area: last-message;
    font-size: 1vw;
    height: 100%;
    color: rgb(160, 160, 160);
  }
  
  @media screen and (max-width: 1200px) {
    .last-message {
      font-size: 1.2vw;
    }
  }
  
  @media screen and (max-width: 900px) {
    .name {
      font-size: 2vw;
    }
    .last-message {
      font-size: 1.5vw;
    }
  }
  
  @media screen and (max-width: 700px) {
    .single-dialog-container {
      grid-template-rows: 1fr 1fr;
    }
    .avatar {
      width: 90px;
    }
    .avatar img {
      border-radius: 50%;
      width: 80%;
      height: 80%;
    }
    .name {
      font-size: 4vw;
    }
    .last-message {
      font-size: 2.5vw;
    }
  }
  
  @media screen and (max-width: 500px) {
    .avatar {
      width: 70px;
    }
    .name {
      font-size: 5vw;
    }
    .last-message {
      font-size: 3.5vw;
    }
  }
  </style>
  