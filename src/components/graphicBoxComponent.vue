<template>
    <div class="graphicBoxContainer">
        <img :src="img_src" alt="">
        <div class="graphicBoxText">{{img_text}}</div>
    </div>
</template>

<script>
export default {
    name: 'graphicBoxComponent',
    props: ['img_src', 'img_text'],
    data(){
        return {
    
        }
    }
}
</script>

<style scoped>
img {
    height: 70%;
    width: 100%;
    object-fit:inherit;
    border-radius: 15px 15px 0 0;
}
.graphicBoxContainer {
    width: 500px;
    min-width: 430px;
    height: 450px;
    margin: 2% 2%;
    background: rgb(255, 255, 255);
    border: 0.5px black solid;
    border-radius: 15px;

    display: flex;
    justify-content: flex-start;
    align-items: start;
    flex-direction: column;
}

.graphicBoxText {
    /* height: 20%; */
    padding: 5% 10%;
    font-size: 1.5vw;
    font-family: "Raleway", sans-serif;
    align-self: center;
}

@media (max-width: 1000px) {
    .graphicBoxContainer {
        width: 70%;
        height: 70%;
        min-width: 70%;
    }

    .graphicBoxText {
        font-size: 2vw;
    }
}
</style>