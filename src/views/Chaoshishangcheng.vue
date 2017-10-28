<template>
  <div class="chaoshishangcheng page">
    <banner :image="banner"></banner>

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
  name: 'Chaoshishangcheng',
  components: {
    banner: Banner
  },
  data() {
    return {
      banner: require('../assets/images/chaoshishangcheng/banner.png'),
      steps: [
        {
          id: 0,
          header: '搭建电商 线上商城',
          title1: '部署新零售产品',
          title2: '提升客流',
          image: require('../assets/images/chaoshishangcheng/step-1.png')
        },
        {
          id: 1,
          header: '整合店商 线上营销',
          title1: '消费即会员',
          title2: '提高顾客粘性',
          image: require('../assets/images/chaoshishangcheng/step-2.png')
        },
        {
          id: 2,
          header: 'O2O闭环合流 线上+线下',
          title1: '降低每笔成本',
          title2: '管理客户数据',
          image: require('../assets/images/chaoshishangcheng/step-3.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/mixins';

@media (max-width: 600px) {
  .chaoshishangcheng {
  }
}

@media (min-width: 600px) {
  .chaoshishangcheng {

    .step-item {
      .title {
        margin: 0 20%;
        font-size: 2rem;
      }
    }
  }
}

.chaoshishangcheng {
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
