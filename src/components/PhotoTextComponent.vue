<template>
   <div class="home_text_img_container" :style="{flexDirection: flex_direction}" :class="{active_title: content_show}">
        <div class="home_text" :style="{alignItems: align_items_h1}">
            <h1 :style="{textAlign: text_align, margin: h_margin}">{{ txt1 }}</h1>
            <h3 :style="{textAlign: text_align, margin: h_margin, width: h3_width}">{{ txt2 }}</h3>
            <!-- <ButtonComponent
                :text = "button1"
            /> -->
        </div>
        <div class="img_container">
            <img alt="" :id="photo_id">
        </div>
   </div>
</template>

<script>
// import ButtonComponent from './ButtonComponent.vue'

export default {
    name: 'PhotoTextComponent',
    props: ['right', 'img_src', 'txt1', 'txt2', 'window_size', 'posY', 'photo_id'],
    components: {
        // ButtonComponent
    },
    data(){
        return {
            button1: 'OFERTA',
            flex_direction: 'row',
            text_align: 'right',
            h_margin: '5% 0 0 28%',
            h3_width: '72%',
            align_items_h1: 'flex-end',
            content_show: false,
            div_object: 0,

            // img_src: require('../assets/pensjonat.jpg')
        }
    },
    methods: {
        lazyShowContent() {
            this.content_show = true 
            const picture = document.getElementById(this.photo_id)
            picture.src = this.img_src
        },
        handle_resize(){
            if ( this.right && this.window_size == 0 ){
                this.flex_direction = 'row-reverse'
                this.text_align = 'left'
                this.h_margin = '5% 25% 0 0'
                this.h3_width = '72%'
                this.align_items_h1 = 'flex-start'
            } else if (this.window_size != 0) {
                this.text_align = 'center'
                this.h_margin = '5% 0 0 0'
                this.flex_direction = 'column-reverse'
                this.h3_width = '100%'
                this.align_items_h1 = 'center'
            } else if (!this.right && this.window_size == 0){
                this.flex_direction = 'row'
                this.text_align = 'right'
                this.h_margin = '5% 0 0 25%'
                this.h3_width = '72%'
                this.align_items_h1 = 'flex-end'
            }
        }
    },
    updated(){
        this.handle_resize()
        
        if ( this.content_show == false ){ 
            if ( this.isInAViewPort(this.div_object) ) {
                this.lazyShowContent()
            }
        }
    },
    created(){
        this.handle_resize()
        
    },
    mounted() {
        this.div_object = document.getElementById(this.photo_id)
    }

}
</script>

<style scoped>
img {
    width: 100%;
}

h1 {
    text-align: right;
    width: 75%;
}


.home_text_img_container {
    opacity: 0;
    margin:20% 0 20% 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.home_text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 45%;
    color: #303030;
    font-family: "Raleway", sans-serif;

}

.home_text h1 {
    /* text-align: right; */
    /* margin: 0 0 0 28%; */
    padding-bottom: 10px;
    
    /* width: 53%; */
    border-bottom: 1px rgba(0, 0, 0, 0.393) solid;
    font-size: 3.5vw;

    text-shadow: rgba(0, 0, 0, 0.25) 0px 2px 1px;

    line-height: 5.25vw;
}

.home_text h3 {
    /* width: 72%; */
    /* margin: 5% 0 0 28%; */
    /* text-align: right; */
    font-size:1.5vw;
    font-weight: 400;
    line-height: 3vw;
}

.img_container {
    width: 50%;
}

.active_title {
    opacity: 1;
    transition: opacity 2s;
}


@media (min-width: 500px) and (max-width: 1000px) {
    .img_container {
        height: 400px;
        width: 80%;
        margin: 5% 0 5% 0;
    }
    .img_container img {
        height: 100%;
        object-fit: cover;
    }
}

@media (max-width: 500px){
    .home_text_img_container {
        flex-direction: column-reverse;
    }

    .home_text {
        width: 80%;
        
    }

    .home_text h1 {
        width: 100%;
        font-size: 6vw;
        line-height: 9vw;
        margin-left: 0;
    }

    .home_text h3 {
        font-size: 4vw;
    }

    
    .img_container {
        height: 300px;
        width: 80%;
        margin: 5% 0 5% 0;
    }

    .img_container img {
        height: 100%;
        object-fit: cover;
    }
    
}
</style>