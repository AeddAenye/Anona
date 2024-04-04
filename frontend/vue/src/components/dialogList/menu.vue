<template>
    <div class="container">
        <div class="title">Все чаты</div>
        <div class="dropmenu">
            <button class="dropbutton" type="button">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </button>

        </div>
    </div>
</template>

<style scoped>
.container {
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
    width: 10px;
    height: 10px;
    background-color: white;
    margin: 3px;

    border-radius: 50%;

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
    .container {
  grid-template-columns: 1fr 1fr 1fr; 
  gap: 5px 5px; 
}

    .title{
    font-size: 6vw;
    }
}

</style>