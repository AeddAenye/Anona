<template>
  <ChatMenu />
  <div class="chat__container">
    <Message v-for="(message, index) in messages" :key="index" :message="message" />
  </div>
  <Input />
</template>

<script>
import ChatMenu from './menu.vue'
import Message from './message.vue'
import Input from './input.vue'

export default {
  name: 'ChatContainer',
  components: {
    ChatMenu,
    Message,
    Input
  }
}
</script>

<script setup>
import { ref, watch, onUnmounted, inject } from 'vue';

const messages = ref([]);
const store = inject('store');

const getNewMessages = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/NewMessages/${store.getters.getChatId}`);
    const data = await response.json();
    messages.value = data;
    console.log(data);
  } catch (error) {
    console.error('Error fetching new messages:', error);
  }
}

const updateMessages = () => {
  getNewMessages();
}

updateMessages();

const interval = setInterval(updateMessages, 5000); // 5000 миллисекунд = 5 секунд

onUnmounted(() => {
  clearInterval(interval);
});

// Следите за изменениями messages и обновляйте стили
watch(messages, () => {
  const gridRows = messages.value.length + 1; // +1 для нового сообщения
  document.documentElement.style.setProperty('--grid-rows', gridRows);
});
</script>

<style scoped>
.chat__container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px 10px;
  grid-auto-flow: row;
  --grid-rows: auto;
  grid-template-rows: repeat(var(--grid-rows), auto);
  overflow-y: scroll;
}

.chat__container>div {
  grid-row-end: span 1;
}


</style>

