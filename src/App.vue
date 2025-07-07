<template>
  <NavbarComponent />
  <router-view/>
  <FooterComponent />
</template>

<script>
import NavbarComponent from './components/navbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

</style>
