<template>
  <div class="container">
    <div class="backward">
      <button type="button" @click="returnToDialogsList()">
      <img src="../../../public/assets/arrow-left.svg" alt="">
      </button>
    </div>
    <div class="friend">
      <div class="avatar">
        <img src="../../../public/assets/profile-simple-svgrepo-com.svg" alt="">
      </div>
      <div class="name">
        <span>{{ friendname }}</span>
      </div>
    </div>
    <div class="dots">
      <button class="dropbutton" type="button">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'

const store = inject('store')

let friendname = computed(() => store.getters.getFriendname)

const returnToDialogsList = () => {
  console.log('click');
  store.commit('setFriendname', '')
  console.log(store.getters.getFriendname);
}
</script>

<style scoped>
    .container {  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 80px;
  gap: 10px 10px;
  grid-auto-flow: row;
  grid-template-areas:
    "back friend dots";

}

.friend {
  justify-self: center;
  grid-area: friend;
  width: 100%;
  height: 80px;
  aspect-ratio: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1svw;
}

.avatar{
  height: 80px;
  display: flex;
  align-items: center;
}

.avatar img{
  height: 80%;
  border-radius: 50%;
}

.friend .name{
  font-size: 2svw;
}

.backward {
  justify-self: start; 
  align-self: center; 
  grid-area: back; 
}

button{
  background-color: rgba(0, 0, 0, 0);
  border: none;
}


.dots {
  justify-self: end; 
  align-self: center; 
  grid-area: dots; 
}

.dropbutton {
    height: min-content;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;

    background: none;
    border: none;
}

.dot{
    width: 7px;
    height: 7px;
    background-color: white;
    margin: 3px;

    border-radius: 50%;

    cursor: pointer;
}


@media screen and (max-width: 1200px) {
    .friend .name{
    font-size: 3svw;
  }  
}

@media screen and (max-width: 900px) {
    .friend .name{
    font-size: 4svw;
  }
}

@media screen and (max-width: 700px) {
    .friend .name{
    font-size: 5svw;
  }
}

@media screen and (max-width: 500px) {
    .friend .name{
    font-size: 6svw;
  }
}
</style>