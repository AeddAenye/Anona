<template>
    <div class="wrapper">
        <DialogScreen />
    </div>
</template>
    
<script>
    import DialogScreen from './dialogList/container.vue'
        
    export default {
    name: 'Screen',
    components: {
        DialogScreen,
    }
    }
</script>

<style scoped>
.wrapper{
    background-color: var(--accent-bg-color);
    border-radius: 10px;
    padding: 0% 3%;

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