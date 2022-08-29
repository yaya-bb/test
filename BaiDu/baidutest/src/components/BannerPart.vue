<template>
  <div class="banner">
    <div class="logo">
      <a class="Hot Bot" href="https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6%E7%83%AD%E6%90%9C&sa=ire_dl_gh_logo_texing&rsv_dl=igh_logo_pc" target="_blank">
        <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="">
      </a>
    </div>
    <div class="Search">
      <div class="searchBox">
        <input
          class="searchInput"
          v-model="search.keywords"
          @focus="showhistory"
          @blur="hidehistory"
          @keyup.enter="submit"
          />
        <input
          type="button"
          value="搜索"
          class="searchButton"
          >
      </div>
    </div>
    <div class="allHislist" v-show="search.allHislistShow">
    <!-- 历史记录 -->
      <ul>
        <li v-for="(item, index) in search.allHislist" :key="index" @click="selecthistory($event)">{{ item }}</li>
        <li class="eliminatehistory" @click="eliminatehistory">清空历史记录</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "BannerPart",
  data() {
    return {
      search: {
        // 显示历史记录
        allHislistShow: '',
        // 搜索关键字
        keywords: '',
        // 最近搜索列表
        allHislist: [],
      }
    }
  },
  methods: {
    // 展示历史记录
    showhistory() {
      this.search.allHislistShow = true
    },
    // 隐藏历史记录
    hidehistory() {
      // this.search.allHislistShow = false
      let self = this
      this.searchBoxTimeout = setTimeout(function () {
        self.search.allHislistShow = false;
      }, 300);
    },
    // 将搜索存在本地浏览器中
    submit() {
      //判断是否有重复
      var index = this.search.allHislist.findIndex((ele) => {
        return ele == this.search.keywords;
      });
      //如果有的话就删除重复
      if (index != -1) {
        this.search.allHislist.splice(index, 1);
      }
      //向数组第一位添加
      this.search.allHislist.unshift(this.search.keywords);
      //如果数组长度大于4 就删除最后一项
      if (this.search.allHislist.length > 4) {
        this.search.allHislist.splice(5, 1);
      }
      // 本地存储历史记录数组
      localStorage.allHislist = JSON.stringify(this.search.allHislist);
      this.search.keywords = ''
    },
    // 清空历史记录
    eliminatehistory() {
      this.hidehistory()
      localStorage.removeItem('allHislist');
      //取消timeout
      clearTimeout(this.searchBoxTimeout);
      this.search.allHislist = []
    },
    // 获取浏览记录
    getallHislist() {
      let all = localStorage.allHislist;
      if (all) {
        // 将数组转字符串
        this.search.allHislist = JSON.parse(all);
      }
    },
    // 选中历史记录
    selecthistory(e) {
      let word = e.currentTarget.innerHTML
      this.search.keywords = word
      this.hidehistory()
      clearTimeout(this.searchBoxTimeout);
    },
    // 获取浏览记录
    created() {
      this.getallHislist()
    }
}
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
    .allHislist {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      ul li {
        width: 620px;
        height: 30px;
        line-height: 30px;
        padding: 5px 15px;
      }
    }
    .eliminatehistory {
      border: 1px solid #ccc;
      text-align: center;
    }
  }
</style>