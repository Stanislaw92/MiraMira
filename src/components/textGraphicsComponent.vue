<template>
    <div class="text_graphic_container">
        <div class="graphic_title">
            <h1>Atrakcje</h1>
            <h3>oraz aktywny wypoczynek</h3>
        </div>
        <div class="graphicBoxRow">
            <graphicBoxComponent :img_src="img_src1" :img_text="img_text1" />
            <graphicBoxComponent :img_src="img_src2" :img_text="img_text2" />
        </div>
        <div class="graphicBoxRow">
            <graphicBoxComponent :img_src="img_src3" :img_text="img_text3" />
            <graphicBoxComponent :img_src="img_src4" :img_text="img_text4" />
        </div>
        <div class="graphicBoxRow">
            <graphicBoxComponent :img_src="img_src5" :img_text="img_text5" />
            
        </div>
    </div>
</template>

<script>
import graphicBoxComponent from './graphicBoxComponent.vue';
export default {
    name: 'textGrapicsComponent',
    components: {
        graphicBoxComponent
    },
    data() {
        return {
            img_src1: require("../assets/muzeum.jpg"),
            img_src2: require("../assets/kosciol.jpg"),
            img_src3: require("../assets/szlak.jpg"),
            img_src4: require("../assets/jezioro1.jpeg"),
            img_src5: require("../assets/jedzenie.jpg"),

            img_text1: 'Pracownia ceramiki Kaszubskiej. ',
            img_text2: 'Zabytkowy Kościół pw. św. Apostołów Piotra i Pawła.',
            img_text3: 'Chmielno i okolice to również cała moc szlaków rowerowych oraz pieszych.',
            img_text4: 'Jeziora w Chmielnie to doskonały wypoczynek zarówno dla miłośników aktywnego wypoczynku, jak i dla typowych plażowiczów.',
            img_text5: 'Tradycyjne kaszubskie jedzenie.',
        }
    }
}
</script>

<style scoped>
    .graphic_title {
        padding: 3% 6%;
        align-self: center;
        margin-bottom: 5%;
        color: #303030;
        font-family: "Raleway", sans-serif;
        text-shadow: rgba(0, 0, 0, 0.25) 0px 2px 1px;
        background: white;
        border-radius: 15px;
    }

    .text_graphic_container {
        /* width: 30%; */
        margin: 10vh auto 0 auto;
        padding-bottom: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .graphic_row {
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .graphicBoxRow {
        width: 80vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    @media (max-width: 1000px) {
        .graphicBoxRow {
            flex-direction: column;
        }
    }
</style>