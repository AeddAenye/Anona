<template>
  <div class="app-container">
    <header>
      <HeaderContainer />
    </header>
    <Screen/>
  </div>
</template>

<script>
import HeaderContainer from './components/header/container.vue'
import Screen from './components/screen.vue'
export default {
  name: 'App',
  components: {
    Screen,
    HeaderContainer
  }
  }
</script>

<script setup>
import { provide, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

provide('store', store)
</script>


<style scoped>
.app-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 10px;

}
</style>