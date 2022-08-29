<template>
  <div class="footer">
    <a href="https://home.baidu.com/" target="_blank" class="link">关于百度</a>
    <a href="https://ir.baidu.com/" target="_blank" class="link">About Baidu</a>
    <a href="https://www.baidu.com/duty/" target="_blank">使用百度前必读</a>
    <a href="https://help.baidu.com/" target="_blank">帮助中心</a>
    <a href="https://e.baidu.com/?refer=1271" target="_blank">企业推广</a>
    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001" target="_blank">京公网安备11000002000001号</a>
    <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">京ICP证030173号</a>
    <a href="https://www.baidu.com/licence/" target="_blank">信息网络传播视听节目许可证 0110516</a>
  </div>
</template>
<script>
export default {
  name: "NavFooter"
}
</script>
<style lang="scss" scoped>
  .footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    padding-left: 24px;
    text-align: center;
    a {
      color: #bbb;
      display: inline-block;
      position: relative;
      margin-top: 24px;
      margin-right: 19px;
      font-size: 12px;
      line-height: 39px;
      background: #fff;
    }
  }
</style>