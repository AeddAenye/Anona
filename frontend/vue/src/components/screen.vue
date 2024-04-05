<template>
    <div class="wrapper" >
        <DialogScreen v-if="chatName === 'None'"/>
        <ChatScreen v-else-if="chatName !== 'None'"/>
    </div>

</template>
    
<script>
    import DialogScreen from './dialogList/container.vue'
    import ChatScreen from './chatScreen/container.vue'
import { ref } from 'vue';
        
    export default {
    name: 'Screen',
    components: {
        DialogScreen,
        ChatScreen
    }
    }
</script>

<script setup>
import { ref } from 'vue';

let chatName = ref('Non')
console.log(chatName.value);
</script>

<style scoped>
.wrapper{
    background-color: var(--accent-bg-color);
    border-radius: 10px;
    padding: 0% 3svw;

    width: 50%;
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

    .app-container{
        padding: 20px;
    }
}
</style>