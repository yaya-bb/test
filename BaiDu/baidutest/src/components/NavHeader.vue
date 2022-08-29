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
    <div class="right">
      <!-- 天气插件 -->
      <!-- <div id="he-plugin-simple" class="weather"></div> -->
      <div class="settings">
        <span>设置</span>
        <div class="children">
          <ul>
            <li class="setting">搜索设置</li>
            <li class="setting">高级搜索</li>
            <li class="setting">关闭预测</li>
            <li class="setting">隐私设置</li>
            <li class="setting">隐藏资讯</li>
            <li class="setting">关闭播报</li>
            <hr color=#d7d9e0 width="70%"/>
            <li class="setting">更换皮肤</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavHeader'
  // mounted() {
  //   window.WIDGET = {
  //       "CONFIG": {
  //         "modules": "1204",
  //         "background": "5",
  //         "tmpColor": "222222",
  //         "tmpSize": "13",
  //         "cityColor": "222222",
  //         "citySize": "13",
  //         "aqiColor": "222222",
  //         "aqiSize": "13",
  //         "weatherIconSize": "23",
  //         "alertIconSize": "18",
  //         "padding": "10px 10px 10px 10px",
  //         "shadow": "0",
  //         "language": "auto",
  //         "fixed": "false",
  //         "vertical": "top",
  //         "horizontal": "left",
  //         "key": "e95f6ead53c143e4ad359e2c76cc0825"
  //       }
  //     }
  //     let script = document.createElement('script');
  //     script.type = 'text/javascript';
  //     script.src = 'src="https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0';
  //     document.getElementsByName('head')[0].appendChild(script);
  // }
}
</script>
<style lang="scss" scoped>
  .header {
    z-index: 100;
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
    .right {
      position: absolute;
      top: 0;
      right: 50px;
      // padding-left: 200px;
      // padding-right: 24px;
      .settings {
        position: relative;
        right: 0;
        margin-top: 19px;
        span {
          cursor: pointer;
        }
        &:hover {
          .children {
            display: inline-block;
          }
        }
        .children {
          display: none;
          position: absolute;
          width: 75px;
          height: 300px;
          top: 20px;
          right: -25px;
          // 盒子阴影
          ul {
            display: flex;
            // flex-flow同时设置flex-direction和flex-wrap
            // flex-direction设置主轴的方向
            // flex-wrap设置子元素是否换行
            flex-flow: column wrap;
            width: 100%;
            justify-content: space-around;
            border: 1px solid #fff;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            li {
              display: inline-block;
              text-align: center;
              height: 35px;
              line-height: 35px;
            }
          }
        }
      }
    }
  }
</style>