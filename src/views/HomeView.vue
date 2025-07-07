<template>
  <div class="home_container">

    <mainPhotoComponent />

    <textBoxComponent />

    <PhotoTextComponent :right="true" :img_src="img_src_1" :txt1="txt1_img1" :txt2="txt2_img1" :window_size="window_size" />

    <PhotoTextComponent :right="false" :img_src="img_src_2" :txt1="txt1_img2" :txt2="txt2_img2" :window_size="window_size" />

    <PhotoTextComponent :right="true" :img_src="img_src_3" :txt1="txt1_img3" :txt2="txt2_img3" :window_size="window_size" />

    <ContactComponent 
      :posY="scrollY"
      :data_src="contact_src"
    />

    <videoComponent 
      :mp4="require(`@/assets/video.mp4`)" 
      :posY="scrollY" 
      />

    <textGraphicsComponent />

  </div>
</template>

<script>
// import { defineAsyncComponent } from 'vue';
import PhotoTextComponent from '@/components/PhotoTextComponent.vue';
import textGraphicsComponent from '@/components/textGraphicsComponent.vue';
import videoComponent from '@/components/videoComponent.vue'
import textBoxComponent from '@/components/textBoxComponent.vue';
import MainPhotoComponent from '@/components/MainPhotoComponent.vue';
import ContactComponent from '@/components/ContactComponent.vue';


export default {
  name: 'HomeView',
  components: {
    textBoxComponent,
    videoComponent,
    MainPhotoComponent,
    textGraphicsComponent,
    PhotoTextComponent,
    ContactComponent
    // videoComponent: defineAsyncComponent(() => {
    //   import('@/components/videoComponent.vue')
    // })
  },
  data(){
    return {
      scrollY: 0,
      img_src_1: require('../assets/pensjonat.jpg'),
      img_src_2: require('../assets/patio.jpg'),
      img_src_3: require('../assets/dla_dzieci.jpg'),
      txt1_img1: 'Pensjonat MiraMira w Chmielnie',
      txt2_img1: 'to urokliwe miejsce położone w malowniczej okolicy, zaledwie kilkaset metrów od jeziora.',
      txt1_img2: 'Przepiękny widok!',
      txt2_img2: 'Oraz malownicza sceneria jaką oferuje pobliskie jezioro Białe',
      txt1_img3: 'Strefa zabaw dla dzieci!',
      txt2_img3: 'Wyjątkowe pomieszczenia w pensjonacie, gdzie znajduje się kolorowy pokój zabaw stworzony specjalnie dla najmłodszych gości, zapewniający radość i bezpieczeństwo podczas pobytu!',
      window_size: 0,
      screenWidth: window.innerWidth,
      contact_src: "https://s3-alpha-sig.figma.com/img/dcf3/3c18/e2083b40c6309cef6324224f87231c0c?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BaA04gQRzuOgO9Qa8sY-hIaqIBVK23cPaU-8MBAFqSH6VufYWmd2lSF6cmHYzKQohEbhmVEc~O27i2lNlxjt39qVTl~WmXvlp9Puw4XFTGpqe9I8oYMvyu2aQQimnEzcSGegsDYB2FGeCUngXA0IL2fTELfWsrqk6vgZJgpMHc5eQTW2tQLRp8a0K97V19mlqGZ0n4Lpp~McopKZ~6skALFMCyY9I4nxYzu2z7JPOxxEKWJRoBEhxBmQFHF77Y3kVqg7pIUMxpL7iSsm91UTifIFypXLjtUwXHc8EvswaqY~GxvLoErgyLPzSo~RtG5nDh5nxPYJHkv4dqce0Ob6ZQ__"
    }
  },
  methods: {
        onScroll(){
          window.addEventListener('scroll', ()=>{
              this.updatePosY()
          })
        },
        updatePosY() {
            this.scrollY = window.scrollY
        },
        updateScreenWidth(){
            this.screenWidth = window.innerWidth
            console.log(window.innerWidth)
            if (this.screenWidth >= 1000){
                this.window_size = 0
            } else if (this.screenWidth >= 500 && this.screenWidth < 1000) {
                this.window_size = 1
                console.log(this.window_size)
            } else {
                this.window_size = 2
            }
        },
        onScreenResize() {
          
            window.addEventListener('resize', ()=>{
                this.updateScreenWidth()
            })
        },
  },
  created(){
    this.onScroll()
    this.updatePosY()
    this.updateScreenWidth()
    this.onScreenResize()
  }
}
</script>

<style scoped>



  .home_container {
    /* height: 200vh; */
    padding-top: 75px;
    background-image: url('../assets/background.png');
    background-color: rgba(255,255,255,0.9);
    background-blend-mode: lighten;
    background-repeat: repeat;
  }






  @keyframes test {
    0% {
      visibility: hidden;
      opacity: 0%;
      top: 55%;
    }
    100% {
      visibility: visible;
      opacity: 100%;
      top: 50%;
    }
  }

</style>
