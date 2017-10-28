<template>
  <div class="more-function-container">
    <div class="more-function-header header">
      超多特色功能， 让您每天做更多事
    </div>
    <div class="more-function-tabs">
      <div class="more-function-tab" v-for="(tab,index) in tabs" :key="tab.value" @click="activeTab(index)"
      :style="{'border-bottom': tab.active ? '3px solid ' + tab.borderColor : 'none'}">
        <div class="icon-wrapper" :style="{'border-color': tab.borderColor}">
          <i :class="['iconfont', tab.icon]" :style="{'color': tab.borderColor}"></i>
        </div>

        <div class="text">
          {{tab.label}}
        </div>
      </div>
    </div>

    <el-carousel class="more-function-carousel" ref="carousel" :interval="4000" @change="changeCarousel($event)">
      <el-carousel-item v-for="item in tabs" :key="item.value">
        <div class="image" :style="{'background-image': 'url(' + item.image + ')'}">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'IndexMoreFunction',
  data() {
    return {
      tabs: [
        {
          label: '移动POS刷卡',
          value: 'pos',
          icon: 'icon-pos',
          borderColor: '#B33390',
          active: true,
          image: require('../../assets/images/shouye/banner-10.png')
        },
        {
          label: '微信会员',
          value: 'wechatVip',
          icon: 'icon-wechat',
          borderColor: '#4734B2',
          active: false,
          image: require('../../assets/images/shouye/banner-11.jpg')
        },
        {
          label: '手机App',
          value: 'mobileApp',
          icon: 'icon-app',
          borderColor: '#6C34B3',
          active: false,
          image: require('../../assets/images/shouye/banner-12.jpg')
        },
        {
          label: '可视卡会员',
          value: 'vip',
          icon: 'icon-card',
          borderColor: '#3487B3',
          active: false,
          image: require('../../assets/images/shouye/banner-13.jpg')
        },
        {
          label: '开台消费',
          value: 'consumption',
          icon: 'icon-desktop',
          borderColor: '#31B36D',
          active: false,
          image: require('../../assets/images/shouye/banner-14.jpg')
        },
        {
          label: '短信群发',
          value: 'sendSms',
          icon: 'icon-sms',
          borderColor: '#6CB235',
          active: false,
          image: require('../../assets/images/shouye/banner-15.jpg')
        }
      ]
    }
  },
  methods: {
    activeTab(index) {
      this.tabs.forEach((e, i) => {
        if (index === i) {
          e.active = true
        } else {
          e.active = false
        }
      })
      this.$refs.carousel.setActiveItem(index)
    },
    changeCarousel(currentIndex) {
      this.tabs.forEach((e, i) => {
        if (currentIndex === i) {
          e.active = true
        } else {
          e.active = false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/mixins';

@media (max-width: 600px) {
  .image {
    height: 300px;
  }
  .more-function-tabs {
    display: none !important;
  }
  .more-function-carousel {
    margin-top: 40px;
  }
}

@media (min-width: 600px) {
  .image {
    height: 600px;
  }
}

.more-function-container {
  margin-top: 100px;

  .more-function-header {
  }

  .more-function-tabs {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;

    .more-function-tab {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 15px;
      .icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        border-radius: 10px;
        border-width: 2px;
        border-style: solid;
        i {
          font-size: 3.8rem;
        }
      }

      .text {
        margin-top: 10px;
      }
    }
  }

  .more-function-carousel {
    margin-top: 40px;
  }
  .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 0px auto;
  }
}
</style>
