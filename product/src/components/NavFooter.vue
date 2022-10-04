<template>
  <div class="footer-wrapper">
    <div class="footer-content">
      <div class="footer-item">
        <router-link to="/">关于我们</router-link>
        <router-link to="/function">产品功能</router-link>
        <router-link to="/worth">产品价值</router-link>
        <router-link to="/contactUs">联系我们</router-link>
      </div>
      <div class="copy-right">
        <span>&copy; 2022 森云科技 All rights reserved.</span>
        <div class="fr" style="text-align: center">
          <span
            ><a href="https://beian.miit.gov.cn/"> 粤ICP备2022040000号-1</a
            ><br />
            <a
              target="_blank"
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44190002006331"
              style="
                display: inline-block;
                text-decoration: none;
                height: 20px;
                line-height: 20px;
              "
              ><img
                src="https://www.beian.gov.cn/img/ghs.png"
                style="float: left"
              />
              <p
                style="
                  float: left;
                  height: 20px;
                  line-height: 20px;
                  margin: 0px 0px 0px 5px;
                "
              >
                粤公网安备 44190002006331号
              </p></a
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-wrapper {
  background-color: #555555;
  .footer-content {
    width: 1140px;
    font-size: 14px;
    padding: 40px 0;
    margin: 0 auto;
    text-align: left;
    color: #fff;
    .footer-item {
      a {
        display: block;
        line-height: 20px;
        padding-bottom: 8px;
      }
    }
    .copy-right {
      height: 20px;
      line-height: 20px;
      padding: 20px 0;
      color: #c7c7c7;
      .beian-logo {
        padding-top: 10px;
        width: 25px;
        height: 25px;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .footer-wrapper {
    .footer-content {
      width: 50%;
      padding-top: 52px;
      .footer-item {
        a {
          line-height: 18px;
          text-align: center;
        }
      }
      .copy-right {
        display: flex;
        height: auto;
        align-items: center;
        flex-direction: column-reverse;
        padding-top: 10px;
        span {
          display: block;
          line-height: 15px;
          font-size: 12px;
          &:last-of-type {
            margin-bottom: 26px;
          }
          .beian-logo {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
}
</style>
