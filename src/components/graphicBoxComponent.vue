<template>
    <div class="graphicBoxContainer" :class="{active_title: content_show}">
        <img alt="" :id="photo_id">
        <div class="graphicBoxText">{{img_text}}</div>
    </div>
</template>

<script>
export default {
    name: 'graphicBoxComponent',
    props: ['img_src', 'img_text', 'photo_id'],
    data(){
        return {
            content_show: false,
            div_object: 0,
        }
    },
    methods: {
        lazyShowContent() {
            this.content_show = true 
            const picture = document.getElementById(this.photo_id)
            picture.src = this.img_src
        },
    },
    updated(){      
        if ( this.content_show == false ){ 
            if ( this.isInAViewPort(this.div_object) ) {
                this.lazyShowContent()
            }
        }
    },
    mounted() {
        this.div_object = document.getElementById(this.photo_id)
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
    opacity: 0;
    width: 500px;
    width: 40vw;
    /* min-width: 430px; */
    height: 450px;
    height: 40vw;
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

.active_title {
    opacity: 1;
    transition: opacity 3s;
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