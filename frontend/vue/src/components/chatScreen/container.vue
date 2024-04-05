<template>
    <ChatMenu />
    <Chat />
    <Input />
</template>

<script>
import ChatMenu from './menu.vue'
import Chat from './chat.vue'
import Input from './input.vue'

export default{
    name: 'ChatContainer',
    components: {
        ChatMenu,
        Chat,
        Input
    }
}
</script>
