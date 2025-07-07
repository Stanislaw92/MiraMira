<template>
  <div 
    id="video_container"
    class="video-wrap" 
    :class="{active_title: content_show}"
  >
    <video class="video_box" preload="none" controls="true" id="video">
      <source 
        type='video/mp4'
        :src="this.video_src"
        >
    </video>

  </div>
</template>
<script>
export default {
  name: "videoComponent",
  props: [
    // 'scrollY'
  ],
  data(){
    return {
      mp4: String,
      content_show: false,
      div_object: 0,
      src: require('../assets/img_for_video.jpg'),
      video_src: require('../assets/video.mp4')
    }
  },
  methods:{
    lazyShowContent() {
      // console.log('lazycontent')
        this.content_show = true 
        const video = document.getElementById('video')
        video.poster = this.src
    }
  },
  updated() {

        if ( this.content_show == false && window.innerWidth < 1000){ 
            if ( this.isInAViewPort(this.div_object, -200) ) {
                this.lazyShowContent()
            }
        } else if (this.content_show == false && window.innerWidth > 1000) {
            if ( this.isInAViewPort(this.div_object, -100) ) {
                this.lazyShowContent()    
            } 
        }
  },
  mounted() {
      this.div_object = document.getElementById(`video_container`)
  }
}
</script>

<style>
  video {
    width: 80%;
    /* border: 5px white solid; */
    border-radius: 15px;
  }

  .video-wrap {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5% 2% 5% 2%;
    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  }

  .video_box {
    -webkit-box-shadow: 0px 0px 26px 6px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 0px 26px 6px rgba(66, 68, 90, 1);
    box-shadow: 0px 0px 26px 6px rgba(66, 68, 90, 1);
  }

  .active_title {
      opacity: 1;
      transition: opacity 2s ease-in 0.5s;
  }
</style>