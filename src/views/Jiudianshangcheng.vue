<template>
  <div class="jiudianshangcheng page">
    <banner :image="banner"></banner>

    <div class="saomiaorukou">
      <div class="header">
        酒店房间摆放商城二维码扫描入口
      </div>
    </div>

    <div class="step-item" v-for="step in steps" :key="step.id">
      <div class="header">{{step.header}}</div>
      <div class="title">
        <div class="title1">{{step.title1}}</div>
        <div class="title2">{{step.title2}}</div>
      </div>
      <div class="image-container">
        <img :src="step.image" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Banner from '@/components/Banner'

export default {
  name: 'Jiudianshangcheng',
  components: {
    banner: Banner
  },
  data() {
    return {
      banner: require('../assets/images/jiudianshangcheng/banner.jpg'),
      steps: [
        {
          id: 0,
          header: '',
          title1: '商品丰富',
          title2: '购物快捷',
          image: require('../assets/images/jiudianshangcheng/step-1.png')
        },
        {
          id: 1,
          header: '',
          title1: '客人扫码',
          title2: '客人支付',
          image: require('../assets/images/jiudianshangcheng/step-2.png')
        },
        {
          id: 2,
          header: '',
          title1: '前台送货',
          title2: '客人自取',
          image: require('../assets/images/jiudianshangcheng/step-3.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/mixins';

@media (max-width: 600px) {
  .jiudianshangcheng {
  }
}

@media (min-width: 600px) {
  .jiudianshangcheng {

    .step-item {
      .title {
        margin: 0 20%;
        font-size: 2rem;
      }
    }
  }
}

.jiudianshangcheng {
  .saomiaorukou {
    margin-top: 50px;
  }

  .step-item {
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
