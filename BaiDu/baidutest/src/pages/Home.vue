<template>
  <div>
    <nav-header></nav-header>
    <banner-part></banner-part>
    <nav-footer></nav-footer>
  </div>  
</template>
<script>
import NavHeader from "@/components/NavHeader.vue"
import BannerPart from "@/components/BannerPart.vue"
import NavFooter from "@/components/NavFooter.vue"
export default {
  name: 'Home',
  components: {
    NavHeader,
    BannerPart,
    NavFooter
  }
}
</script>
<style scoped>
  @import './../assets/scss/reset.scss';
</style>
