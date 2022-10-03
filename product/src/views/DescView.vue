<template>
  <div class="box column center">
    <!-- 产品中心 -->
    <img src="../../public/imgs/product1.jpg"
         class="title-img"
         style="width: 100%"/>
    <!-- 产品介绍 -->
    <img :src="imagesUrl + 'title22.png'" class="title-img" />
    <div class="intro-box">
      <img :src="imagesUrl + 'pic22.png'" class="intro-img" />
      <div class="intro-text-box">
        <span class="intro-text-title">教师端 </span>
        <span
          >是面向大学生团队服务的端口，大学生可以通过申请成为好学森平台的老师，在好学森平台上选择求职报名。
          被应聘成功后，老师需每周对学员进行学习情况的反馈。老师也可以在优辅导小程序上查看自己的工作安排。</span
        >
      </div>
    </div>
    <div class="intro-box">
      <img :src="imagesUrl + 'pic23.png'" class="intro-img pc-intro-img" />
      <div class="intro-text-box pc-intro-text-box">
        <span class="intro-text-title">家长端 </span>
        <span
          >是面向家长服务的端口，家长可以通过认证身份登录好学森平台，填写所需的订单信息，筛选平台所提供的匹配老师，并有助教实时联系，
          方便面试和签订心仪老师。家长每周会收到教师端发来的一个学生反馈，精准了解孩子情况。</span
        >
      </div>
    </div>
    <div class="intro-box">
      <img :src="imagesUrl + 'pic24.png'" class="intro-img" />
      <div class="intro-text-box">
        <span class="intro-text-title">助教端 </span>
        <span
          >是为大学生助教使用的端口，主要为家长和老师服务，负责跟进教学质量和教学反馈。助教是在好学森平台上对订单进行管理，
          接到订单团后到教师端招募筛选老师，促成订单完成后进行一个订单的后续监督管理。</span
        >
      </div>
    </div>
    <!-- 功能介绍 -->
    <img :src="imagesUrl + 'title23.png'" class="title-img" />
    <div class="white-text" style="text-align: center">
      好学森智能家教平台为了充分满足用户需求，<br />
      针对广大家长与大学生教师群体，推出了<span class="blue-text"
        >个性化、精准化</span
      >的智能端口功能。
    </div>
    <div class="panel" v-show="panelSwitch == 0">
      <!-- 左侧 -->
      <div class="left">
        <div class="left-text1">平台出发点</div>
        <div class="left-text2"> — — “优质 / 优价 / 优服务”</div>
        <div class="left-text3">
          平台采用五面一体，线上线下结合的模式，来保持优质的教育输出，用来满足每个需要家教的家庭。
        </div>
      </div>
      <!-- 右侧 -->
      <img src="../../public/imgs/product2.jpg" class="function-img" />
      <!-- 点击 -->
      <div class="function-box">
        <div class="function-btn" @click="panelSwitch = 1"><br />&nbsp;</div>
        <div class="function-btn" @click="panelSwitch = 2"><br />&nbsp;</div>
      </div>
    </div>
    <!-- 切换 -->
    <!-- 家长端 -->
    <div class="panel" v-show="panelSwitch == 1">
      <img :src="imagesUrl + 'pic26.png'" class="function-img" />
      <!-- 返回键 -->
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
            “请假管理”是好学森平台设计的个性化、人性化功能设计，家长可以在行程不便的时候，对课程进行“请假”或者“更改上课时间”协调处理。
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
            为了提高对家长服务的高效性、便利性；好学森平台针对各项特色功能开发了五个ai智能小助手：打卡、评价、查课、请假、家教小助手。
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
            该功能是便于老师匹配订单，更快且方便的找到工作。老师可选择订单进行报名，家长可选择参加报名的老师。只有报名成功，信息会记录在相应位置。
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
            助教咨询是给老师提供疑难解答的平台。若老师想查询订单阶段，发送带有
            关键词的话语，后台即可根据关键词发送对应内容，并提醒内容解决的时长以及
            提供人工服务。
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
            为了让学员能够了解自己的情况，老师能够清晰学员的进程，老师可对学员的学习情况进行反馈和评价，家长可查看老师的反馈和进行评价。
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
</template>
<script>
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const imagesUrl = ref(
      'https://yq-guangzhou-bucket.oss-cn-guangzhou.aliyuncs.com/website/images/'
    );
    onMounted(() => {
      document.body.addEventListener('touchstart', function () {}); //解决ipad hover伪类失效问题
    });
    let panelSwitch = ref(0); // 0选择1家长2老师
    return {
      imagesUrl,
      panelSwitch
    };
  }
};
</script>
<style lang="scss" scoped>
.column {
  display: flex;
  flex-direction: column;
}
.center {
  align-items: center;
}

.box {
  width: 100%;
  position: relative;
  .title-img {
    margin-top: 5vw;
    margin-bottom: 3vw;
    width: 35%;
    height: auto;
  }
  .sub-box {
    position: relative;
    display: flex;
    flex-direction: row;
    margin-bottom: 7vw;
    width: 100%;
    .pic-img {
      width: 60%;
      height: auto;
    }
    .describe-box {
      width: 39%;
      position: absolute;
      left: 61%;
      .white-box {
        right: 50px;
        width: 100%;
        height: auto;
        padding-bottom: 1vw;
        background-color: rgba(255, 255, 255, 0.4);
        position: absolute;
      }
    }
  }
  .white-text {
    font-size: 3.5em;
    text-align: start;
    margin-left: 1vw;
    margin-right: 1vw;
    line-height: 1.5em;
    color: #303133;
    font-weight: 300;
  }
  .white-text2 {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    position: absolute;
    bottom: -1vw;
    text-align: center;
    font-size: 5em;
    font-style: italic;
    font-family: '\6977\4F53';
    font-weight: 900;
    color: #3370ff;
  }
  .intro-box {
    display: flex;
    flex-direction: row;
    position: relative;
    .intro-img {
      width: 50%;
      height: auto;
    }
    .pc-intro-img {
      position: absolute;
      left: 50%;
    }
    .pc-intro-text-box {
      transform: translateX(-45%);
    }
    .intro-text-box {
      width: 45%;
      padding: 5vw;
      margin: auto;
      font-size: 3.5em;
      line-height: 2em;
      text-align: start;
      font-weight: 300;
      letter-spacing: 5px;
      .intro-text-title {
        font-size: 1.1em;
        color: #3370ff;
        margin-right: 1vw;
        font-weight: bold;
      }
    }
  }
  //功能介绍
  .left {
    width: 35%;
    position: relative;
    padding-left: 2%;
    padding-top: 12vw;
    letter-spacing: 0.48vw;
    .left-text1 {
      font-size: 4.5em;
      font-weight: 600;
    }

    .left-text2 {
      margin-top: 2vw;
      font-size: 2em;
      font-weight: bold;
      color: #3370ff;
    }

    .left-text3 {
      font-size: 2em;
      line-height: 1.5em;
      margin-top: 4.5vw;
      width: 40vw;
      color: #606266;
      text-align: start;
    }
  }

  .function-img {
    width: auto;
    height: 55vw;
  }
  .function-box {
    position: absolute;
    right: 6vw;
    height: 70%;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    letter-spacing: 0.3vw;
  }
  .function-btn {
    font-size: 4em;
    font-weight: bold;
    color: white;
    opacity: 0.8;
    cursor: pointer;
    text-align: right;
    z-index: 99999;
  }

  .function-btn:hover {
    opacity: 0.9;
  }

  .panel {
    margin-top: 1.2vw;
    margin-bottom: 10vw;
    position: relative;
    width: 100%;
    animation: slideIn 0.3s ease;
    display: flex;
    flex-direction: row;
  }
  .back {
    position: absolute;
    bottom: 4.8vw;
    left: 6vw;
    opacity: 1 !important;
  }
  .function-block {
    position: absolute;
    width: 62%;
    height: 6vw;
    justify-content: space-between;
    z-index: 0;
    display: flex;
    flex-direction: row;
  }
  .function-block:hover {
    z-index: 999;
  }

  .function-item {
    position: relative;
    background-color: white;
    width: 100%;
    box-shadow: 1px 2px 4px #8eb0ff;
    height: fit-content;
    padding: 1.2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    font-weight: bold;
    color: #3370ff;
    letter-spacing: 0.2vw;
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
    position: absolute;
    background-color: #3370ff;
    width: 2.4vw;
    height: 2.4vw;
    left: -0.6vw;
    top: -0.6vw;
    border-top-left-radius: 50%;
  }
  .function-item2 {
    width: 100%;
    font-size: 1em;
    letter-spacing: 0.2vw;
    line-height: 1.5em;
    color: #909399;
    font-weight: bold;
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

.blue-text {
  color: #3370ff;
}

.ptext1-img {
  width: 50%;
  height: auto;
  margin-bottom: 1vw;
}

@media screen and (max-width: 1024px) {
  .box {
    width: 84%;
    margin: auto;
    position: relative;
    .title-img {
      width: 60%;
      margin-bottom: 1vw;
    }
    .sub-box {
      display: flex;
      flex-direction: column;
      .pic-img {
        width: 100%;
        height: auto;
      }
      .describe-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        position: relative;
        left: 0;
        .white-box {
          position: relative;
          right: 0;
          margin-bottom: 3vw;
        }
      }
    }
    .white-text {
      font-size: 4em !important;
      font-weight: 500 !important;
      line-height: 2em !important;
    }
    .white-text2 {
      bottom: 0;
      right: 0;
      padding: 1vw 0;
    }
    .intro-box {
      display: flex;
      flex-direction: column;
      position: relative;
      .intro-img {
        width: 100%;
      }
      .pc-intro-img {
        position: relative;
        left: 0;
      }
      .pc-intro-text-box {
        transform: translateX(0);
      }
      .intro-text-box {
        width: 90%;
        font-size: 4em;
        font-weight: 500;
        line-height: 2em;
      }
    }
    .left-text3 {
      font-size: 4em !important;
      font-weight: 500 !important;
      line-height: 2em !important;
    }
    .function-block {
      width: 87%;
      left: 5% !important;
      .function-item2 {
        line-height: 2em;
      }
    }
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes slideOut {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
