<template>
  <div class="jiaoyupeixun page">
    <banner :image="banner"></banner>

    <div class="zhaosheng">
      <div class="header">线上线下融合 广宣传广招生</div>
      <div class="content">
        <div class="image-container">
          <img src="../assets/images/jiaoyupeixun/qrcode.png" alt="">
        </div>
        <div class="text">通过发送优惠券，让顾客扫码关注，同时获取到顾客信息，基于数据分析功能，针对性的向顾客进行信息推送。</div>
      </div>
    </div>

    <div class="hudongfangan">
      <div class="header">
        为您量身定做互动方案 使您从中获得最大效益
      </div>
    </div>

    <div class="fangan-item" v-for="fangan in fangans" :key="fangan.id">
      <div class="header">{{fangan.header}}</div>
      <div class="title">
        <div class="title1">{{fangan.title1}}</div>
        <div class="title2">{{fangan.title2}}</div>
      </div>
      <div class="image-container">
        <img :src="fangan.image" alt="">
      </div>
    </div>

    <div class="image-container">
      <img src="../assets/images/jiaoyupeixun/bot.png" alt="">
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import Banner from '@/components/Banner'

export default {
  name: 'Jiaoyupeixun',
  components: {
    banner: Banner
  },
  data() {
    return {
      banner: require('../assets/images/jiaoyupeixun/banner.png'),
      fangans: [
        {
          id: 0,
          header: '活动通知',
          title1: '关注参与活动',
          title2: '方便交流',
          image: require('../assets/images/jiaoyupeixun/canyuhuodong.png')
        },
        {
          id: 1,
          header: '智能签到',
          title1: '获得用户数据',
          title2: '建立精准营销',
          image: require('../assets/images/jiaoyupeixun/yonghushuju.png')
        },
        {
          id: 2,
          header: '树立形象',
          title1: '树立品牌形象',
          title2: '展现领先优势',
          image: require('../assets/images/jiaoyupeixun/pinpaixingxiang.png')
        },
        {
          id: 3,
          header: '培训互动',
          title1: '让学员满意',
          title2: '增强培训效果',
          image: require('../assets/images/jiaoyupeixun/hongbao.png')
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@import '../assets/scss/mixins';

@media (max-width: 600px) {
  .jiaoyupeixun {
  }
}

@media (min-width: 600px) {
  .jiaoyupeixun {
    .zhaosheng {
      .text {
        margin-left: -10%;
        margin-right: 10%;
        font-size: 1.5rem;
        line-height: 40px;
      }
    }

    .fangan-item {
      .title {
        margin: 0 20%;
        font-size: 2rem;
      }
    }

    .bot {
      margin: 0 20%;
    }
  }
}

.jiaoyupeixun {
  .zhaosheng {
    margin-top: 50px;
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        text-align: left;
        @include textHover;
      }
    }
  }

  .hudongfangan {
    margin-top: 50px;
  }

  .fangan-item {
    margin-top: 50px;
    padding: 20px;
    @include cardHover;

    .title {
      margin-top: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 60px;

      color: white;
      background-color: map-get($colors, primary);
    }
  }
}
</style>
