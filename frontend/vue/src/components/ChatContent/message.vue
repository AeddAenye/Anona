<template>
    <div class="message">
      <div class="message__name">{{ message.owner_nickname }}</div>
      <div class="message__text">{{ message.text }}</div>
    </div>
  </template>
  
<script>
  export default {
    props: {
      message: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped>
.message {
  width: fit-content;
  max-width: 80%;
  border: 1px solid rgb(80, 80, 80);
  border-radius: 2svw;
  padding: 0.5svw 1svw;

  justify-self: start;
  align-self: stretch;
}

.message__name{
  font-size: 1svw;
  font-weight: 600;
  padding-bottom: 0.5svw;
}

@media screen and (max-width: 1200px) {
  .message__name{
    font-size: 1.5svw;
  }
}

@media screen and (max-width: 900px) {
  .message__name{
    font-size: 2svw;
  }
}

@media screen and (max-width: 700px) { 
  .message__name{
    font-size: 2.5svw;
  }
}

@media screen and (max-width: 500px) {
  .message__name{
    font-size: 3svw;
  }
}
</style>

