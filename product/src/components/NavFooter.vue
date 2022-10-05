<template>
  <div class="container">
    <div class="wrapper">
      <div class="text">
        <router-link to="/" class="title" >关于我们</router-link>
        <router-link to="/function" class="title">产品功能</router-link>
        <router-link to="/worth" class="title">产品价值</router-link>
        <router-link to="/contactUs" class="title">联系我们</router-link>
      </div>
      <div class="footer">
        <div class="senyun">© 2022 森云科技 All rights reserved.</div>
        <div class="beian">
          <div class="icp">
          <img src="https://www.beian.gov.cn/img/ghs.png" /><a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44190002006331"
            > 粤公网安备 44190002006331号</a
          ></div>
          <span>丨</span><div>
          <a
            href="https://beian.miit.gov.cn/"
          >
             粤ICP备2022040000号-1</a
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  min-height: 18vw;
  background-color: #555555;
  .wrapper {
    margin: 0 auto;
    width: 69vw;
    padding: 2.3vw 0;
    .text {
      display: flex;
      flex-direction: column;
      padding-bottom: 2.8vw;
      .title {
        font-size: 16px;
        color: #f8f8f8;
        line-height: 32px;
      }
    }
    .footer {
      display: flex;
      justify-content: space-between;
      .senyun {
        font-size: 16px;
        color: #bebebe;
      }
      .beian {
        @extend .senyun;
        display: flex;
        align-items: center;
        .icp {
        display: flex;
        align-items: center;
      }
      }
    }
  }
}
@media screen and (max-width: 968px) {
  .container {
  .wrapper {
    .text{
      align-items: center;
      .title{
        font-size: 14px;
      }
    }
    .footer{
      flex-direction: column;
      align-items: center;
      padding-bottom: 20px;
      .senyun{
        font-size: 14px;
      } 
      .beian{
        flex-direction: column;
        .icp{
          padding: 15px 0;
          font-size: 14px;
        }
        span{
          display: none;
        }
        a {
          font-size: 14px;
        }
      }
    }
  }
}
}
</style>
