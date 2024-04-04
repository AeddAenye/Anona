<template>
    <div class="container">
        <div class="avatar full-center"><img :src="dialogAvatar">
            <div class="notifie"></div>
        </div>
        <div class="name align-center">{{ dialogName }}</div>
        <div class="last-message align-center">{{ lastMessage }}</div>
    </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'

const { dialogName, dialogAvatar, lastMessage } = defineProps(['dialogName', 'dialogAvatar', 'lastMessage'])
</script>

<style scoped>
.container {
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: 1fr 2fr;
    gap: 1% 2%;
    grid-auto-flow: row;

    grid-template-areas:
        "avatar name"
        "avatar last-message";

    margin: 2% 0px;
    padding: 10px;

    transition: all 0.3s ease;
}

.container:hover {
    background-color: rgb(50, 50, 50);
}


.avatar {
    justify-self: center;
    align-self: center;
    grid-area: avatar;
    aspect-ratio: 1;

    position: relative;
}

.avatar img{
    width: 100%;
    height: 100%;
    border-radius: 20px;
}

.notifie{
    width: 20%;
    height: 20%;
    background-color: rgb(12, 228, 12);
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
}

.name {
    grid-area: name;
    font-size: 1.2vw;
}

.last-message {
    grid-area: last-message;
    font-size: 1vw;
    height: 100%;
    color: rgb(160, 160, 160);
}


@media screen and (max-width: 1200px) {
    .last-message{
        font-size: 1.2vw;
    }
}


@media screen and (max-width: 900px) {
    .name{
        font-size: 2vw;
    }
    .last-message{
        font-size: 1.5vw;
    }
}

@media screen and (max-width: 700px) {
    .avatar {
        width: 90px;
    }

    .avatar img{
        border-radius: 50%;
    }

    .name{
        font-size: 4vw;
    }
    .last-message{
        font-size: 2.5vw;
    }
}

@media screen and (max-width: 500px) {
    .avatar{
        width: 70px;
    }
    .name{
        font-size: 5vw;
    }
    .last-message{
        font-size: 3.5vw;
    }
    
}

</style>