<template>
  <ChatMenu />
  <div class="chat__container">
    <Message v-for="(message, index) in messages" :key="index" :message="message" />
  </div>
  <Input />
</template>

<script setup>
import ChatMenu from './menu.vue';
import Message from './message.vue';
import Input from './input.vue';
import { ref, watch } from 'vue';

const messages = ref([]);

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
