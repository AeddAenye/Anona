<template>
    <div class="menu-container">
        <div class="title">Все чаты</div>
        <div class="dropmenu">
            <button class="new-dialog" type="button" @click="dialogModal = true">+</button>
            <DialogModal v-show="dialogModal" @close="dialogModal = false"/>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
let dialogModal = ref(false)
</script>

<script>
import DialogModal from '../ModalWindows/newDialog.vue'

export default {
  name: 'MenuContainer',
  components: {
    DialogModal
  }
}
</script>

<style scoped>
.menu-container {
  display: grid; 
  grid-template-columns: 1fr 2fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 10px 10px; 
  grid-template-areas: 
    "title search dropmenu"; 

    margin: 3% 0px;

    align-items: center;
}

.title {
    grid-area: title;
    font-size: 1.8vw;
}

.search {
    grid-area: search;
}

.dropmenu {
    grid-area: dropmenu;

    display: flex;
    justify-content: flex-end;
}

.new-dialog {
    height: min-content;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;

    background: none;
    border: none;
    color: white;
    font-size: 3svw;
    cursor: pointer;
}


@media screen and (max-width: 1200px) {
    .title{
    font-size: 2.5vw;
}
}

@media screen and (max-width: 700px) {
    .title{
    font-size: 4vw;
    }
}

@media screen and (max-width: 500px) {
    .menu-container {
  grid-template-columns: 1fr 1fr 1fr; 
  gap: 5px 5px; 
}

    .title{
    font-size: 6vw;
    }
}

</style>