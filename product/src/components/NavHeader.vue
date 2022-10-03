<template>
  <div
    class="page-header-wrapper"
    :class="{ 'page-header-wrapper-fixed': scrollFlag }"
  >
    <div class="page-header-content clearfix">
      <img
        class="logo-mc"
        src="https://yq-guangzhou-bucket.oss-cn-guangzhou.aliyuncs.com/website/images/logo.png"
        alt=""
        @click="link('/')"
      />
      <div class="content-r">
        <router-link
          class="content-item"
          :class="{ ative: currentRouter === '/' }"
          to="/"
          >关于我们</router-link
        >
        <router-link
          :class="{ ative: currentRouter === '/function' }"
          class="content-item"
          to="/function"
          >产品功能</router-link
        >
        <router-link
          class="content-item"
          :class="{ ative: currentRouter === '/worth' }"
          to="/worth"
          >产品价值</router-link
        >
        <router-link
          class="content-item"
          to="/contactUs"
          :class="{ ative: currentRouter === '/contactUs' }"
          >联系我们</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    currentRouter() {
      return this.$route.path;
    }
  },
  methods: {
    link(url) {
      this.$router.push(url);
      this.showNavMenu = false;
    },
    showNav() {
      this.showNavMenu = true;
    }
  },

  props: {
    scrollFlag: Boolean
  }
};
</script>
<style lang="scss" scoped>
.page-header-wrapper {
  width: 100%;
  background-color: transparent;
  box-shadow: 0 3px 6px #00000029;
  .page-header-content {
    display: flex;
    align-items: center;
    width: 1140px;
    height: 100px;
    margin: 0 auto;
    .logo-mc {
      width: auto;
      height: 80px;
      cursor: pointer;
    }
    .content-r {
      padding-left: 142px;
      .content-item {
        color: black;
        float: left;
        display: flex;
        line-height: 36px;
        font-size: 16px;
        margin: 0 35px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .ative {
        color: #3370ff !important;
      }
    }
  }
  .page-header-content-mobile {
    display: none;
  }
}
</style>
