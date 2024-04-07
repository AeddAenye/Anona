<template>
    <Header />
    <div class="wrapper dialog_wrapper" v-if="chatName == 'None'">
        <Dialogs />
    </div>
    <div class="wrapper chat-wrapper"   v-else-if="chatName !== 'None'">
        <Chat />
    </div>
</template>

<script>
import Header from './components/HeaderContent/container.vue';
import Dialogs from './components/DialogContent/container.vue';
import Chat from './components/ChatContent/container.vue';
export default {
  name: 'App',
  components: {
    Header,
    Dialogs,
    Chat
  }
  }
</script>

<script setup>
import { provide, ref, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
provide('store', store)

let chatName = ref(store.getters.CHATNAME)
console.log(chatName.value)

watch(() => store.getters.CHATNAME, (newVal) => {
  chatName.value = newVal
  console.log(chatName.value)
})
</script>

<style scoped>
.wrapper{
    background-color: var(--accent-bg-color);
    border-radius: 20px;
    padding: 0% 3svw;

    width: 50%;
    height: 85%;

    display: flex;
    flex-direction: column;

}

@media screen and (max-width: 900px) {
    .wrapper{
        width: 70%;
    }
}

@media screen and (max-width: 700px) {
    .wrapper{
        width: 96%;
        border: none;
        padding: 2%;
    }
}

@media screen and (max-width: 500px) {
    .wrapper{
        height: 90%;
    }
    
}
</style>