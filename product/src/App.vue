<template>
  <div>
    <NavHeader :scrollFlag="scrollFlag" />
    <Carousel />
    <div :style="{ paddingTop: '2px' }">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue'
import Carousel from './components/Carousel.vue'

export default {
  name: 'App',
  components: {
    NavHeader,
    Carousel
  },
  data() {
    return {
      scrollFlag: false
    }
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
  margin-top: 60px;
}
</style>
