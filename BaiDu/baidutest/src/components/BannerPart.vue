<template>
  <div class="banner">
    <div class="logo">
      <a class="Hot Bot" href="https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6%E7%83%AD%E6%90%9C&sa=ire_dl_gh_logo_texing&rsv_dl=igh_logo_pc" target="_blank">
        <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="">
      </a>
    </div>
    <div class="Search">
      <div class="searchBox">
        <input type="text" class="searchInput" style="padding-left: 10px;">
        <input type="button" value="搜索" class="searchButton">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BannerPart"
}
</script>
<style lang="scss">
  .banner {
    width: 100%;
    height: 100%;
    // min-height: 768px;
    top: 0;
    .logo {
      height: 60%;
      min-height: 185px;
      max-height: 310px;
      position: relative;
      top: 90px;
      text-align: center;
      img {
        width: 280px;
      }
    }
    .Search{
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 80px;
      height: 42px;
      .searchBox{
        .searchInput{
          display: inline-block;
          width: 512px;
          height: 16px;
          padding: 12px 16px;
          font-size: 16px;
          margin: 0;
          vertical-align: top;
          outline: 0;
          box-shadow: none;
          border-radius: 10px 0 0 10px;
          border: 2px solid #c4c7ce;
          background: #fff;
          color: #222;
          overflow: hidden;
          box-sizing: content-box;
          -webkit-tap-highlight-color: transparent;
          }
        .searchButton{
          display: inline-block;
          cursor: pointer;
          width: 108px;
          height: 44px;
          line-height: 45px;
          line-height: 44px\9;
          padding: 0;
          background: 0 0;
          background-color: #4e6ef2;
          border-radius: 0 10px 10px 0;
          font-size: 17px;
          color: #fff;
          box-shadow: none;
          font-weight: 400;
          border: none;
          outline: 0;
        }
      }
      
    }
    
  }
</style>