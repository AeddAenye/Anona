<template>
    <div class="container">
        <div class="avatar full-center"><img src="../assets/1.png" alt=""></div>
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
}

.avatar img{
    width: 100%;
    height: 100%;
    border-radius: 30px;
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