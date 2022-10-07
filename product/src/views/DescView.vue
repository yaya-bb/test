<template>
  <div class="box column center">
    <rotation-chart :showPictureNum="1" />
    <!-- 产品中心 -->
    <img :src="imgCDN + 'product1.jpg'" class="title-img" style="width: 60%"/>
    <!-- 平台介绍 -->
    <div class="platform">
      <img :src="imgCDN + 'product2.png'" class="title-img"/>
      <!-- 选择状态 -->
      <div class="platform-img" v-show="selectOption == 0">
        <div class="left">
          <img :src="imgCDN + 'product3.png'" class="left-img" alt="">
          <div class="select">
            教师端
            <div class="selectBtn" @click="selectOption = 1">←</div>
          </div>
        </div>
        <div class="right">
          <img :src="imgCDN + 'product4.png'" class="right-img" alt="">
          <div class="select">
          家长端
          <div class="selectBtn" @click="selectOption = 2">→</div>
          </div>
        </div>
      </div>
      <!-- 选择：教师端 -->
      <div class="platform-teachers" v-show="selectOption == 1">
        <img :src="imgCDN + 'product3.png'" class="left-img" alt="">
        <div class="teachers-info">
          <span class="blue">教师端</span>
          &nbsp;是面向大学生团队服务的端口，大学生可以通过申请成为好学森平台的老师，在好学森平台上选择求职报名。
          被应聘成功后，老师需每周对学员进行学习情况的反馈。老师也可以在优辅导小程序上查看自己的工作安排。
          <div class="back" @click="selectOption = 2">家长端</div>
        </div>
      </div>
      <!-- 选择：家长端 -->
      <div class="platform-parents" v-show="selectOption == 2">
        <div class="parents-info">
          <span class="blue">家长端</span>
          &nbsp;是面向家长服务的端口，家长可以通过认证身份登录好学森平台，填写所需的订单信息，筛选平台所提供
          的匹配老师，并有助教实时联系，方便面试和签订心仪老师。家长每周会收到教师端发来的一个学生反馈，精准了解孩子情况。
          <div class="back" @click="selectOption = 1">教师端</div>
        </div>
        <img :src="imgCDN + 'product4.png'" class="right-img" alt="">
      </div>
    </div>
    <!-- 功能介绍 -->
    <div class="function">
      <img :src="imgCDN + 'product5.jpg'" class="title-img"/>
      <div class="panel" v-show="panelSwitch == 0">
        <!-- 左侧 -->
        <div class="left">
          <div class="text">
            <div class="left-text1">平台出发点</div>
            <div class="left-text2">&nbsp;&nbsp;&nbsp;&nbsp;—— —— “优质 / 优价 / 优服务”</div>
            <div class="left-text3">
              平台采用五面一体，线上线下结合的模式，来保持优质的教育输出，用来满足每个需要家教的家庭。
            </div>
          </div>
        </div>
        <!-- 右侧 -->
        <div class="right">
          <img :src="imgCDN + 'product6.png'" class="function-img" />
          <div class="function-box">
            <div class="function-btn parents" @click="panelSwitch = 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div class="function-btn teachers" @click="panelSwitch = 2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>
        </div>
      </div>
      <!-- 家长端 -->
      <div class="panel" v-show="panelSwitch == 1">
        <img :src="imagesUrl + 'pic26.png'" class="function-img" />
        <div class="function-btn back" @click="panelSwitch = 0">→</div>
        <div class="function-block" style="left: 35%; top: 9.6vw">
          <div style="width: 30%">
            <div class="function-item">
              <div class="blue-block"></div>
              <div>主动选师系统</div>
            </div>
            <div class="function-item2">
              好学森平台拥有高数量、高水准的教师团队，家长可按需找师，直接向心意老师发出试课邀请。
            </div>
          </div>
          <div style="width: 28%">
            <div class="function-item">
              <div class="blue-block"></div>
              <div>助教系统</div>
            </div>
            <div class="function-item2">
              好学森平台不仅仅提供智能教学功能，还提供“助教跟进模式”，专门为家长提供人工服务。
            </div>
          </div>
          <div style="width: 28%">
            <div class="function-item">
              <div class="blue-block"></div>
              <div>打卡流程</div>
            </div>
            <div class="function-item2">
              为了家长更放心孩子的学习进度，好学森提供记录课程的功能，家长只需点击确认教师的打卡即可。
            </div>
          </div>
        </div>
        <div class="function-block" style="left: 32%; top: 21.6vw">
          <div style="width: 28%;">
            <div class="function-item">
              <div class="blue-block"></div>
              <div>请假管理</div>
            </div>
            <div class="function-item2">
              “请假管理”是好学森平台设计的个性化、人性化功能设计，家长可以在行程不便
              的时候，对课程进行“请假”或者“更改上课时间”协调处理。
            </div>
          </div>
          <div style="width: 28%">
            <div class="function-item">
              <div class="blue-block"></div>
              <div>课程模块</div>
            </div>
            <div class="function-item2">
              这是专门用于展示孩子课程安排情况的，方便家长随时、随地、随心地查看与安排孩子学习流程。
            </div>
          </div>
          <div style="width: 28%">
            <div class="function-item">
              <div class="blue-block"></div>
              <div>备课资料</div>
            </div>
            <div class="function-item2">
              为了家长更省心、孩子的学习更舒心；好学森平台专门为家长提供了“备课资料”下载区。
            </div>
          </div>
        </div>
        <div class="row function-block" style="left: 25%; top: 33.6vw">
          <div style="width: 28%">
            <div class="function-item">
              <div class="blue-block"></div>
              <div>智能选师系统</div>
            </div>
            <div class="function-item2">
              智能选师使家长选师更加便捷，只需填写孩子需求清单，好学森平台即可智能匹配出至少六位优秀教师。
            </div>
          </div>
          <div style="width: 28%">
            <div class="function-item">
              <div class="blue-block"></div>
              <div>反馈系统</div>
            </div>
            <div class="function-item2">
              好学森平台提供实时教学效率保障与进步，家长可以每周一对教师的授课情况进行反馈、按需求协调后续教学安排。
            </div>
          </div>
          <div style="width: 28%">
            <div class="function-item">
              <div class="blue-block"></div>
              <div>消息助手</div>
            </div>
            <div class="function-item2">
              为了提高对家长服务的高效性、便利性；好学森平台针对各项特色功能
              开发了五个ai智能小助手：打卡、评价、查课、请假、家教小助手。
            </div>
          </div>
        </div>
      </div>
      <!-- 老师端 -->
      <div class="panel" v-show="panelSwitch == 2">
        <img :src="imagesUrl + 'pic27.png'" class="function-img" />
        <!-- 返回键 -->
        <div class="function-btn back" @click="panelSwitch = 0">←</div>
        <div class="row function-block" style="left: 35%; top: 9.6vw">
          <div style="width: 28%">
            <div class="function-item">
              <div class="blue-block"></div>
              <div>寻找教师系统</div>
            </div>
            <div class="function-item2">
              该功能是便于老师匹配订单，更快且方便的找到工作。老师可选择订单进行报名，家
              长可选择参加报名的老师。只有报名成功，信息会记录在相应位置。
            </div>
          </div>
          <div style="width: 28%">
            <div class="function-item">
              <div class="blue-block"></div>
              <div>课程模块</div>
            </div>
            <div class="function-item2">
              该功能用于显示老师当天或本周的课程安排与基本工作，是老师的工作台，
              其中包括打卡、备课等功能。有助于老师高效完成工作。
            </div>
          </div>
          <div style="width: 28%">
            <div class="function-item">
              <div class="blue-block"></div>
              <div>打卡流程</div>
            </div>
            <div class="function-item2">
              打卡流程是对老师上课的监督和记录，一次课只能一次打卡。老师可
              以查看打卡信息，如上课时间有变动，可以在时间表提前修改。
            </div>
          </div>
        </div>
        <div class="row function-block" style="left: 32%; top: 21.6vw">
          <div style="width: 28%">
            <div class="function-item">
              <div class="blue-block"></div>
              <div>请假管理</div>
            </div>
            <div class="function-item2">
              请假管理分为请假课程和更改课程上课时间。
              请假管理是根据老师的意愿进行申请，家长端确认是否更改；更改上课时间是在授课前收集老师和学员的时间并安排。
            </div>
          </div>
          <div style="width: 28%">
            <div class="function-item">
              <div class="blue-block"></div>
              <div>备课资料</div>
            </div>
            <div class="function-item2">
              备课是老师课前的工作，系统会收集老师的备课资料和通知老师备课，并上传至家长端，双方均可评价。
            </div>
          </div>
          <div style="width: 28%">
            <div class="function-item">
              <div class="blue-block"></div>
              <div>助教咨询</div>
            </div>
            <div class="function-item2">
              助教咨询是给老师提供疑难解答的平台。若老师想查询订单阶段，发送带有关键词的话语
              ，后台即可根据关键词发送对应内容，并提醒内容解决的时长以及提供人工服务。
            </div>
          </div>
        </div>
        <div class="row function-block" style="left: 25%; top: 33.6vw">
          <div style="width: 28%">
            <div class="function-item">
              <div class="blue-block"></div>
              <div>反馈系统</div>
            </div>
            <div class="function-item2">
              为了让学员能够了解自己的情况，老师能够清晰学员的进程，老师可对学员的学习
              情况进行反馈和评价，家长可查看老师的反馈和进行评价。
            </div>
          </div>
          <div style="width: 28%">
            <div class="function-item">
              <div class="blue-block"></div>
              <div>消息助手</div>
            </div>
            <div class="function-item2">
              消息助手共分为打卡、备课、反馈、新单和请假五个板块
              。打卡和反馈是针对老师未完成的情况反馈并发送消息提醒；备课是老师可快捷传送资料给学生
              。新单是给老师发送已匹配订单以及被预约试课的消息；请假是根据家长端的意愿申请，将信息发送到老师端并更改时间。
            </div>
          </div>
          <div style="width: 28%"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const imagesUrl = ref(
      'https://yq-guangzhou-bucket.oss-cn-guangzhou.aliyuncs.com/website/images/'
    );
    const imgCDN = ref(
      'https://yq-guangzhou-bucket.oss-cn-guangzhou.aliyuncs.com/website/new/images/'
    );
    onMounted(() => {
      document.body.addEventListener('touchstart', function () {}); //解决ipad hover伪类失效问题
    });
    let selectOption = ref(0); // 0选择1老师2家长
    let panelSwitch = ref(0); // 0选择1家长2老师
    return {
      imagesUrl,
      panelSwitch,
      selectOption,
      imgCDN
    };
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
.column {
  @include flex(column);
}
.center {
  align-items: center;
}

.box {
  width: 100%;
  position: relative;
  .title-img {
    @include wH(40%, auto);
    padding: 5vw;
  }
  // 平台介绍
  .platform {
    background-color: #f7f9fb;
    text-align: center;
    @include wH(100%, 48vw);
    min-width: 100%;
    .platform-img {
      @include position(relative,0, 0, 100%);
      @include flex(center, center);
      @include platform-margin(-4.1%);
      .left {
        .left-img {
          @include position(absolute, 1vw, 26vw,auto, 25vw);
        }
        .select {
          position: absolute;
          top: 5vw;
          left: 29vw;
        }
      }
      .right {
        .right-img {
          @include position(absolute, 1vw, 51.6vw,auto, 25vw);
        }
        .select {
          position: absolute;
          top: 18.5vw;
          left: 72.5vw;
        }
      }
    }
    .platform-teachers {
      @include position(relative);
      @include flex(center, center);
      @include platform-margin(-10%);
      .left-img {
        @include position(absolute, 1vw, 22%,auto, 25vw);
      }
      .teachers-info {
        @include font(1.5vw, 2em, normal, 0.3vw, #480000);
        @include position(absolute, -6vw, 50vw,42vw, 25vw);
        padding-left: 4vw;
        padding-top: 12vw;
        margin-right: 4vw;
        text-align: start;
        .back {
          @include position(absolute, 29vw, 37vw);
        }
      }
    }
    .platform-parents {
      @include position(relative);
      @include flex(center, center);
      @include platform-margin(2%);
      .parents-info {
        @include font(1.5vw, 2em, normal, 0.3vw, #480000);
        @include position(absolute, -7vw, 5vw,40.5vw, 25vw);
        padding-left: 4vw;
        padding-top: 12vw;
        margin-right: 4vw;
        text-align: start;
        .back {
          @include position(absolute, 30vw, 4vw);
        }
      }
      .right-img {
        @include position(absolute, 1vw, 48vw,auto, 25vw);
      }
    }
    .select {
      @include font(2.5vw, normal, bold, 0.2vw, white);
      font-family: '\6977\4F53';
      text-shadow: #615a4e 0px 1px 2px;
    }
    .selectBtn {
      @include font(2.5vw, normal, 400, 0, #3370ff);
      cursor: pointer;
    }
    .selectBtn:hover {
      z-index: 99;
    }
  }
  //功能介绍
  .function {
    width: 100%;
    text-align: center;
    margin-bottom: -22vw;
    .left {
      @include position(relative,0, 0, 40vw, 42vw);
      padding-top: 20vw;
      margin-top: 2vw;
      letter-spacing: 0.48vw;
      .text {
        @include position(absolute, 26vw, 24vw);
        transform: translate(-50%, -50%);
        .left-text1 {
          @include font(3vw, normal, 600, 0, black);
          position: absolute;
          top: -5vw;
          left: 0;
        }
        .left-text2 {
          @include font(1.8vw, 4vw, bold, -0.01vw, #3370ff);
          margin-top: 1vw;
          width: 37vw;
        }
        .left-text3 {
          @include font(1.2vw, 2.7vw, normal, 0.4vw, #615a4e);
          margin-top: 3vw;
          width: 33vw;
          text-align: start;
        }
      }
    }
    .right {
      position: relative;
      text-align: center;
      margin-top: 2vw;
      .function-box {
        @include flex(space-between, column);
        position: absolute;
        top: 9vw;
        height: 42vw;
        width: auto;
        letter-spacing: 0.3vw;
        .parents {
          @include position(absolute, -1vw, 34vw);
        }
        .teachers {
          @include position(absolute, 21.5vw, 34vw);
        }
      }
      .function-img {
        position: absolute;
        top: 0;
      }
    }   
    .function-img {
      @include wH(auto, 42vw);
    }
    .function-btn {
      @include font(6vw, normal, bold, 0, #fff);
      opacity: 0.8;
      cursor: pointer;
      text-align: center;
      z-index: 99999;
    }
    .function-btn:hover {
      opacity: 0.9;
    }
    .panel {
      margin-top: -4vw;
      @include position(relative, 0, 0, auto, 42vw);
      animation: slideIn 0.3s ease;
      @include flex(flex-start, stretch, row);
    }
    .back {
      position: absolute;
      top: 32vw;
      left: 2vw;
      opacity: 1 !important;
    }
    .function-block {
      z-index: 0;
      @include position(absolute, 0, 0, 62%, 6vw);
      @include flex(space-between, flex-start, row);
    }
    .function-block:hover {
      z-index: 999;
    }
    .function-item {
      @include position(relative, 0, 0, 100%, fit-content);
      @include flex(center, center, row);
      @include font(2vw, normal, bold, 0.2vw, #3370ff);
      background-color: white;
      box-shadow: 1px 2px 4px #8eb0ff;
      padding: 1.2vw;
      border-radius: 0.6vw;
    }
    .function-item:hover {
      background-color: #3370ff;
      color: white;
      transition: all 0.3s;
      -webkit-transition: all 0.3s;
    }
    /* > 改变子元素样式 */
    .function-item:hover > .blue-block {
      opacity: 0.6;
      transition: transform 0.5s, opacity 0.5s;
      -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;
    }
    /* 改变同级元素样式 */
    .function-item:hover + .function-item2 {
      opacity: 1;
      transition: transform 0.5s, opacity 0.5s;
      -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;
    }
    .blue-block {
      @include position(absolute, -0.6vw, -0.6vw,2.4vw, 2.4vw);
      background-color: #3370ff;
      border-top-left-radius: 50%;
    }
    .function-item2 {
      @include font(1vw, 1.5em, bold, 0.2vw, #909399);
      width: 100%;
      padding: 1.2vw 8%;
      background-color: white;
      box-shadow: 1px 2px 4px #dae3fb;
      border-bottom-left-radius: 2vw;
      border-top-left-radius: 1vw;
      border-top-right-radius: 1vw;
      border-bottom-right-radius: 2vw;
      opacity: 0;
      margin-top: 4px;
    }
  }

  // 蓝色字体
  .blue {
    @include font(1.5vw, normal, 800, 0, #3370ff);
    font-family: '黑体';
    font-style: italic;
  }
  // 切换端按钮
  .back {
    @include font(1.8vw, normal, bold, 0, blank);
    font-style: italic;
    font-family: 'Microsoft YaHei';
    cursor: pointer;
  }
}
</style>
