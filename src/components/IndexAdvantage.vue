<template>
  <div class="advantage">
    <div class="abstract">
      <div class="header">
        选择我们的
        <span class="big-font">6</span>大优势
      </div>
      <div class="flag">
      </div>
      <div class="content">
        我们将互联网技术与传统餐饮行业优势充分融合，打造出“门店+互联网”O2O的商业模式，为客户实现资源共享，实现新商业模式与经营管理行为。
      </div>
    </div>
    <div class="advantage-area" v-for="advantage in advantages" :key="advantage.$index">
      <div class="content-area">
        <div class="header">{{advantage.header}}</div>
        <div class="text">{{advantage.content}}</div>
      </div>
      <div class="logo-area">
        <img :src="advantage.src">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IndexAdvantage',
  data() {
    return {
      advantages: [{
        header: '技术创新优势',
        content: `8项软件著作权
        2项国家级技术专利技术`,
        src: require('../assets/images/cpjs1.png')
      }, {
        header: '营销优势',
        content: '技术支持与营销服务网络',
        src: require('../assets/images/cpjs2.png')
      }, {
        header: '先发优势',
        content: '代售点客户接近100个    SaaS用户发展快速',
        src: require('../assets/images/cpjs3.png')
      }, {
        header: '产品线优势',
        content: '满足中国中小企业客户信息化不同阶段的各种需要，具有专业的品牌推广和营销能力。',
        src: require('../assets/images/cpjs5.png')
      }, {
        header: '产品推广模式优势',
        content: '门店+互联网',
        src: require('../assets/images/cpjs6.png')
      }, {
        header: 'O2O商业模式',
        content: '专业、优质、诚信的企业形象',
        src: require('../assets/images/cpjs4.png')
      }]
    }
  }
}
</script>
<style scoped lang="scss">
@media (min-width: 600px) {
  .advantage {
    margin: 0 5rem;
    .abstract {
      height: 330px;
      padding-top: 100px;
      .header {
        font-size: 2rem;
        .big-font {
          margin: 0 10px;
          font-style: italic;
          color: red;
          font-size: 4rem;
        }
      }
      .flag {
        width: 100px;
        margin: 40px auto;
        border-top: 2px solid red;
      }
      .content {
        color: #666;
        line-height: 2.5rem;
      }
    }
    .advantage-area {
      height: 250px;
      width: 500px;
      margin: 0 auto;
      display: flex;
      .content-area {
        flex: 1;
        color: #666;
        .header {
          font-size: 1.5rem;
        }
        .text {
          margin-top: 20px;
          line-height: 2rem;
        }
      }

      .logo-area {
        flex: 1;
        margin-left: 4rem;
      }
    }
  }
}

@media (max-width: 600px) {
  .advantage {
    margin: 0 5rem;
    .abstract {
      height: 500px;
      padding-top: 100px;
      .header {
        font-size: 2rem;
        .big-font {
          margin: 0 10px;
          font-style: italic;
          color: red;
          font-size: 4rem;
        }
      }
      .flag {
        width: 100px;
        margin: 40px auto;
        border-top: 2px solid red;
      }
      .content {
        color: #666;
        line-height: 2.5rem;
      }
    }
    .advantage-area {
      height: 350px;
      margin: 0 auto;
      .content-area {
        color: #666;
        .header {
          font-size: 1.5rem;
        }
        .text {
          margin-top: 20px;
          line-height: 2rem;
        }
      }
    }
  }
}
</style>
