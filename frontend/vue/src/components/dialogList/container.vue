<template>
    <Menu />
      <Dialog v-for="dialog in dialogs" :key="dialog.id"
      :dialogName="dialog.name" :dialogAvatar="dialog.avatar" :lastMessage="dialog.lastMessage"/>
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
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'

const store = useStore()
let dialogs = ref({})

onMounted(async () => {
  console.log('mounted')
  await store.dispatch('GET_DIALOGS')
  dialogs.value = store.getters.DIALOGS
})

</script>

