<template>
  <div>
    <nav-header></nav-header>
    <banner-part></banner-part>
  </div>  
</template>
<script>
import NavHeader from "@/components/NavHeader.vue"
import BannerPart from "@/components/BannerPart.vue"
export default {
  name: 'Home',
  components: {
    NavHeader,
    BannerPart
  }
}
</script>
<style scoped>
  @import './../assets/scss/reset.scss';
</style>
