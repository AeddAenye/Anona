<template>
  <div class="input-container">
    <input type="text" v-model="inputValue" class="input" placeholder="Сообщение">
    <button type="button" class="send" @click="sendMessage()"><img src="../../../public/assets/send.svg" alt=""></button>
  </div>
</template>
  
<script setup>
  import { ref, inject } from 'vue';
  let inputValue = ref('');

  const store = inject('store');

  const sendMessage = () => {
    store.dispatch('sendMessage', {
      chat_id: store.getters.getChatId,
      text: inputValue.value,
      friendname: store.getters.getFriendname,
      username: store.getters.getUsername,
      sending_time: new Date().getTime()
    })


    inputValue.value = '';
  }

</script>
  
<style scoped>
.input-container {
  width: 100%;
  height: 80px;
  padding: 0.5svw 1svw;
  margin: 1svw 0 0.5svw 0;
  box-sizing: border-box;

  background-color: rgb(50, 50, 50);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.5);
  border-radius: 2svw;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1svw;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
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
  width: 2svw;
}

@media screen and (max-width: 1200px) {
  .input{
    font-size: 1.5svw;
  }
}

@media screen and (max-width: 900px) {
  .input{
    font-size: 2svw;
  }
}

@media screen and (max-width: 700px) { 
  .send img{
    width: 4svw;
  }

  .input{
    font-size: 3svw;
  }
}

@media screen and (max-width: 500px) {
  .send img{
    width: 5svw;
  }

  .input{
    font-size: 4svw;
  }
}
</style>
  