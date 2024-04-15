<template>
  <Menu />
  <div class="dialog-container">
    <Dialog v-for="chat in chats" :key="chat.id"
    :dialogName="chat.friendname" @click="gotoChat(chat)"/>
  </div>
</template>


<script>
import Dialog from './singleDialog.vue'
import Menu from './menu.vue'

export default {
    name: 'DialogContainer',
  components: {
    Dialog,
    Menu
  }
}
</script>
<script setup>
import { ref, onMounted, inject, computed } from 'vue'

const store = inject('store')
let dialogs = ref({})

const chats = computed(() => store.getters.getChats)

const gotoChat = (chat) => {
  store.commit('setFriendname', chat.friendname)
  store.commit('setChatId', chat.id)
}

</script>

<style scoped>
.dialog-container {
  height: 100%;
  overflow-y: auto;
}
</style>

