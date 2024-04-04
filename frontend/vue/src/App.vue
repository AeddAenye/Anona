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


<style scoped>
.app-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 10px;

}
</style>