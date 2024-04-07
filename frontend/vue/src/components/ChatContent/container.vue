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
import { ref, watch } from 'vue';

const messages = ref([]);

const json = {
  "Messages": [
    {
      "owner": "ADAE",
      "recipient": "John",
      "text": "Привет, Джон! Как у тебя дела?"
    },
    {
      "owner": "John",
      "recipient": "ADAE",
      "text": "Привет! У меня все отлично, спасибо. Как у тебя?"
    },
    {
      "owner": "ADAE",
      "recipient": "John",
      "text": "Тоже все хорошо, благодарю! Чем занимаешься в эти дни?"
    },
    {
      "owner": "John",
      "recipient": "ADAE",
      "text": "Рад слышать! Я занимаюсь работой и изучением новых технологий. А у тебя какие планы на выходные?"
    },
    {
      "owner": "John",
      "recipient": "ADAE",
      "text": "Привет! У меня все отлично, спасибо. Как у тебя?"
    },
    {
      "owner": "ADAE",
      "recipient": "John",
      "text": "Тоже все хорошо, благодарю! Чем занимаешься в эти дни?"
    },
    {
      "owner": "John",
      "recipient": "ADAE",
      "text": "Рад слышать! Я занимаюсь работой и изучением новых технологий. А у тебя какие планы на выходные?"
    },
    {
      "owner": "John",
      "recipient": "ADAE",
      "text": "Привет! У меня все отлично, спасибо. Как у тебя?"
    },
    {
      "owner": "ADAE",
      "recipient": "John",
      "text": "Тоже все хорошо, благодарю! Чем занимаешься в эти дни?"
    },
    {
      "owner": "John",
      "recipient": "ADAE",
      "text": "Рад слышать! Я занимаюсь работой и изучением новых технологий. А у тебя какие планы на выходные?"
    },
    {
      "owner": "John",
      "recipient": "ADAE",
      "text": "Привет! У меня все отлично, спасибо. Как у тебя?"
    },
    {
      "owner": "ADAE",
      "recipient": "John",
      "text": "Тоже все хорошо, благодарю! Чем занимаешься в эти дни?"
    },
    {
      "owner": "John",
      "recipient": "ADAE",
      "text": "Рад слышать! Я занимаюсь работой и изучением новых технологий. А у тебя какие планы на выходные?"
    },
    {
      "owner": "ADAE",
      "recipient": "John",
      "text": "Понимаю. У меня тоже работа и планы на время выходных. Надеюсь, успею все сделать!"
    }
  ]
};

messages.value = json.Messages;

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

