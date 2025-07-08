<template>
    <div class="text_graphic_container" id="text_graphic_container">
        <div class="graphic_title">
            <h1>Atrakcje</h1>
            <h3>oraz aktywny wypoczynek</h3>
        </div>
        <div class="graphicBoxRow">
            <graphicBoxComponent :posY="posY" :img_src="img_src1" :img_text="img_text1" photo_id = 'text_graphic_id_1' />
            <graphicBoxComponent :posY="posY" :img_src="img_src2" :img_text="img_text2" photo_id = 'text_graphic_id_2' />
        </div>
        <div class="graphicBoxRow">
            <graphicBoxComponent :posY="posY" :img_src="img_src3" :img_text="img_text3" photo_id = 'text_graphic_id_3' />
            <graphicBoxComponent :posY="posY" :img_src="img_src4" :img_text="img_text4" photo_id = 'text_graphic_id_4' />
        </div>
        <div class="graphicBoxRow">
            <graphicBoxComponent :posY="posY" :img_src="img_src5" :img_text="img_text5" photo_id = 'text_graphic_id_5' />
            <graphicBoxComponent :posY="posY" :img_src="img_src6" :img_text="img_text6" photo_id = 'text_graphic_id_6' />
            
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
    props: ['posY'],
    methods:{
        lazyShowContent() {
            this.content_show = true 
            const photo = document.getElementById('contact_photo')
            console.log(photo)
            photo.src = this.data_src
        }
    },
    data() {
        return {
            content_show: false,

            img_src1: require("../assets/muzeum.jpg"),
            img_src2: require("../assets/kosciol.jpg"),
            img_src3: require("../assets/szlak.jpg"),
            img_src4: require("../assets/jezioro1.jpeg"),
            img_src5: require("../assets/jedzenie.jpg"),
            img_src6: require("../assets/kajaki.jpg"),

            img_text1: 'Odkryj Pracownię Ceramiki Kaszubskiej Neclów w Chmielnie – miejsce, które łączy ponad 100-letnią tradycję z radością tworzenia na własną rękę!  ',
            img_text2: 'Zabytkowy Neoromański Kościół pw. św. Apostołów Piotra i Pawła w Chmielnie, wybudowany w latach 1845–1887.  Wyróżnia się kaszubskim wystrojem wnętrza oraz barokowym ołtarzem z 1700 r',
            img_text3: 'Chmielno i okolice to również cała moc szlaków rowerowych oraz pieszych.',
            img_text4: 'Jeziora w Chmielnie to doskonały wypoczynek zarówno dla miłośników aktywnego wypoczynku, jak i dla typowych plażowiczów.',
            img_text5: 'Tradycyjne kaszubskie jedzenie to prawdziwa uczta dla miłośników regionalnych smaków.',
            img_text6: 'Spływy kajakowe i sporty wodne w Chmielnie to idealna propozycja na aktywny, pełen przyrody dzień.',
        }
    },
    updated() {
        if ( this.content_show == false ){ 
            if ( this.isInAViewPort(this.div_object) ) {
                this.lazyShowContent()
            }
        }
    },
    mounted() {
        this.div_object = document.getElementById(`text_graphic_container`)
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