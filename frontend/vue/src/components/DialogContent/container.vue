<template>
  <Menu />
  <div class="dialog-container">
    <Dialog v-for="dialog in dialogs" :key="dialog.id"
    :dialogName="dialog.name" :dialogAvatar="dialog.avatar" :lastMessage="dialog.lastMessage"/>
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
import { ref, onMounted, inject } from 'vue'

const store = inject('store')
let dialogs = ref({})

onMounted(async () => {
  await store.dispatch('GET_DIALOGS')
  dialogs.value = store.getters.DIALOGS
})

</script>

<style scoped>
.dialog-container {
  height: 100%;
  overflow-y: scroll;
}
</style>

