<template>
  <div>
    <!-- 轮播图 -->
    <el-carousel :height="bannerHeight + 'px'">
      <el-carousel-item v-for="(item, index) in carouselList" :key="index">
        <img
          :src="item.imgurl"
          style="width: 100%; height: auto"
          ref="imgHeight"
          @load="imgLoad"
        />
        <!-- <div :class="item.style" class="carousel-describe">
          <img :src="item.txtUrl" class="carousel-txtimg" />
          <img :src="item.txtUrl2" class="carousel-txtimg2" />
        </div> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue';
export default {
  data() {
      return {
        carouselList: [
          {
            imgurl: require('../../public/imgs/carousel1.jpg')
          },
          {
            imgurl: require('../../public/imgs/carousel2.jpg')
          },
          {
            imgurl: require('../../public/imgs/carousel3.png')
          }
        ]
      }
  },
  setup() {
    let bannerHeight = ref('620');
    // 使轮播框大小随图片大小变化
    let imgHeight = ref(null);
    // 页面渲染时加载方法，页面加载第一次获取图片高度，并渲染
    const imgLoad = () => {
      nextTick(() => {
        bannerHeight.value = imgHeight.value[0].height;
      });
    };
    onMounted(() => {
      bannerHeight.value = imgHeight.value[0].height;
      //添加监听事件,监听图片的高度，当图片高度发生变化时，赋值给bannerHeight
      window.addEventListener(
        'resize',
        () => {
          bannerHeight.value = imgHeight.value[0].height;
        },
        false
      );
    });
    return {
      bannerHeight,
      imgHeight,
      imgLoad
    };
  }
};
</script>
