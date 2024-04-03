<template>
    <div class="container">
        <div class="avatar full-center"><img src="../assets/1.png" alt="">
            <div class="notifie"></div>
        </div>
        <div class="name align-center">ADAE</div>
        <div class="last-message align-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum recusandae voluptatem dignissimos blanditiis eveniet adipisci quae obcaecati id suscipit sunt!</div>
    </div>
</template>

<style scoped>

.container {
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: 1fr 2fr;
    gap: 10px 10px;
    grid-auto-flow: row;

    

    grid-template-areas:
        "avatar name"
        "avatar last-message";

    margin: 5% 0px;
    padding: 10px;

    
}

.avatar {
    justify-self: center;
    grid-area: avatar;
    aspect-ratio: 1;

    position: relative;
}

.avatar img{
    width: 100%;
    height: 100%;
    border-radius: 30px;
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
    font-size: 1.3vw;
}

.last-message {
    grid-area: last-message;
    font-size: 1vw;
    height: 100%;
    color: rgb(160, 160, 160);
}

</style>