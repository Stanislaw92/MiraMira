<template>
    <div class="text_box" id="about"> 
      <h2>O nas!</h2><br/>
Lorem Lorem Ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It originated from a work by Cicero in 45 BC and has been used since the 15th century as a standard filler text in the printing industry.
    </div>
</template>
<script>
    export default {
        name: 'textBoxComponent'
    }
</script>
<style scoped>

    .text_box {
        background-color: white;
        border-radius: 20px;
        margin: 10% auto 10% auto;
        /* margin-top: 10%; */
        padding: 2% 2%;
        font-family: S-regular, Helvetica, Arial, sans-serif;
        font-size: 18px;
        line-height: 36px;
        text-align:left;
        width: 60%;
    }

    .text_box h2 {
        font-size: 40px;
        line-height: 50px;
        
    }
  @media (min-width: 700px ) and (max-width: 1200px) {
    .text_box {
      font-size: 1.5vw;
      line-height: 3vw;
    }
    .text_box h2{
      font-size: 3.3vw;
      line-height: 5vw;
    }
  }

  @media (max-width:700px) {
    .text_box {
      padding: 5% 10%;
      width: 80%;
      font-size: 15px;
      line-height: 30px;
    }
    .text_box h2{
      font-size: 30px;
      line-height: 45px;
    }
  }
</style>