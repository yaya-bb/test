<template>
  <div class="header">
    <div class="left">
      <a href="http://news.baidu.com/" target="_blank" class="link">新闻</a>
      <a href="https://www.hao123.com/?src=from_pc_logon" target="_blank" class="link">hao123</a>
      <a href="https://map.baidu.com/" target="_blank" class="link">地图</a>
      <a href="https://tieba.baidu.com/index.html" target="_blank" class="link">贴吧</a>
      <a href="https://haokan.baidu.com/?sfrom=baidu-top" target="_blank" class="link">视频</a>
      <a href="https://image.baidu.com/" target="_blank" class="link">图片</a>
      <a href="https://pan.baidu.com/disk/main?from=1026962h#/index?category=all" target="_blank" class="link">网盘</a>
      <a href="https://www.baidu.com/more/" target="_blank" class="link">更多</a>

    </div>
  </div>
</template>
<script>
export default {
  name: 'NavHeader'
}
</script>
<style lang="scss" scoped>
  .left {
    position: absolute;
    left: 0;
    top: 0;
    width: 440px;
    height: 60px;
    padding-left: 24px;
    .link {
      color: #222;
      display: inline-block;
      position: relative;
      margin-top: 24px;
      margin-right: 19px;
      font-size: 13px;
    }
  }
</style>