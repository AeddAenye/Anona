<template>
  <div class="container">
    <div v-for="(message, index) in messages" class="message" :key="index">

      <div class="message__name">
        {{ message.owner }}
      </div>
      <div class="message__text">
        {{ message.text }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useStore } from 'vuex'

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
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px 10px;
  grid-auto-flow: row;
  --grid-rows: auto;

  padding: 10px 0px 140px 0px;

  overflow-y: scroll;
}

.container > div {
  grid-row-end: span 1;
}


.message {
  width: fit-content;
  max-width: 80%;
  border: 1px solid rgb(80, 80, 80);
  border-radius: 0.5svw;
  padding: 0.7svw;

  justify-self: start;
  align-self: stretch;
}

.message__name{
  font-size: 1svw;
  font-weight: 600;
  padding-bottom: 0.5svw;
}

/* Устанавливаем количество строк в grid */
.container {
  grid-template-rows: repeat(var(--grid-rows), auto);
}

</style>
