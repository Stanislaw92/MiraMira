<template>
    <div class="home_photo_container">
      <img src="../assets/main_photo.jpeg" alt="A picturesque view of the white lake in the Kashubian town of Chmielno" />
      <div class="text_in_image">PENSJONAT MIRAMIRA W SERCU KASZUB</div>
    </div>
</template>

<script>
export default {
    name: 'mainPhotoComponent'
}
</script>

<style scoped>


img {
    width: 100%;
    height: 60vh;
    object-fit:cover;
    object-position: 50% 0%;
    -webkit-box-shadow: 0px -1px 19px 13px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px -1px 19px 13px rgba(66, 68, 90, 1);
    box-shadow: 0px -1px 19px 13px rgba(66, 68, 90, 1);
}


.home_photo_container {
    width: 100%;
    position: relative;
  }

.text_in_image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Sriracha", serif;
    font-size: 4vw;
    line-height: 5vw;
    color: white;

    animation-name: test;
    animation-duration: 2s;
    animation-iteration-count: 1;
  }

@media screen and ( max-width: 500px) {
    .text_in_image {
      font-size: 7vw;
      line-height: 10vw;
      /* height: 50%;
      width: 50%; */
    }
  }

</style>