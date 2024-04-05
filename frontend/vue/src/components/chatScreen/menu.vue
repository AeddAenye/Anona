<template>
  <div class="container">
    <div class="backward">
      <button type="button">
      <img src="../../../public/assets/arrow-left.svg" alt="">
      </button>
    </div>
    <div class="friend">
      <div class="avatar">
        <img src="../../../public/assets/avatar.png" alt="">
      </div>
      <div class="name">
        <span>Адада</span>
      </div>
    </div>
    <div class="dots">
      <button class="dropbutton" type="button">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
      </button>
    </div>
  </div>
</template>

<style scoped>
    .container {  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 80px;
  gap: 10px 10px;
  grid-auto-flow: row;
  grid-template-areas:
    "back friend dots";

}

.friend {
  justify-self: center;
  grid-area: friend;
  width: 100%;
  height: 80px;
  aspect-ratio: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1svw;
}

.avatar{
  height: 80px;
  display: flex;
  align-items: center;
}

.avatar img{
  height: 80%;
  border-radius: 50%;
}

.friend .name{
  font-size: 1.3svw;
}

.backward {
  justify-self: start; 
  align-self: center; 
  grid-area: back; 
}

button{
  background-color: rgba(0, 0, 0, 0);
  border: none;
}


.dots {
  justify-self: end; 
  align-self: center; 
  grid-area: dots; 
}

.dropbutton {
    height: min-content;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;

    background: none;
    border: none;
}

.dot{
    width: 7px;
    height: 7px;
    background-color: white;
    margin: 3px;

    border-radius: 50%;

    cursor: pointer;
}
</style>