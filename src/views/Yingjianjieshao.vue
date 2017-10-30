<template>
  <div class="yingjianjieshao page">

    <banner :image="banner"></banner>

    <div class="jieshao">
      <div class="header">
        智能硬件介绍
      </div>
      <div class="image">
        <img src="../assets/images/yingjianjieshao/jieshao.png" alt="">
      </div>
    </div>

    <div class="yingjians">
      <hardware v-for="hardware in hardwares" :key="hardware.id" :hardware="hardware"></hardware>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import Banner from '@/components/Banner'
import HardwareItem from '@/components/yingjianjieshao/HardwareItem'

export default {
  name: 'Yingjianjieshao',
  components: {
    banner: Banner,
    hardware: HardwareItem
  },
  data() {
    return {
      banner: require('../assets/images/yingjianjieshao/banner.jpg'),
      hardwares: [
        {
          id: 0,
          title: 'HW2020-01',
          image: require('../assets/images/yingjianjieshao/HW2020-01.png'),
          features: [
            {
              id: 0,
              label: '智能双屏，灵敏触屏，耐戳耐用'
            },
            {
              id: 1,
              label: '高端配置，性能卓越'
            },
            {
              id: 2,
              label: '经久耐用，24h不间断开机'
            },
            {
              id: 3,
              label: '智能高效，运行稳定'
            },
            {
              id: 4,
              label: '广告客显，灵活切换'
            }
          ]
        },
        {
          id: 1,
          title: 'HW2030-01',
          image: require('../assets/images/yingjianjieshao/HW2030-01.png'),
          features: [
            {
              id: 0,
              label: '完美设计，时尚享受'
            },
            {
              id: 1,
              label: '扩充性好，安全性高'
            },
            {
              id: 2,
              label: '独特散热，性能稳定'
            },
            {
              id: 3,
              label: '安装方便，维护简单'
            }
          ]
        },
        {
          id: 2,
          title: 'HW2030-03',
          image: require('../assets/images/yingjianjieshao/HW2030-02.png'),
          features: [
            {
              id: 0,
              label: '工业级多媒体综合显示器'
            },
            {
              id: 1,
              label: '画中画，支持播放商业广告'
            },
            {
              id: 2,
              label: '操作简单，性能优，功耗低'
            }
          ]
        },
        {
          id: 3,
          title: 'i-rdesk智慧展台控制终端',
          image: require('../assets/images/yingjianjieshao/i-rdesk.png'),
          features: [
            {
              id: 0,
              label: '环保ABS/电子原件制造'
            },
            {
              id: 1,
              label: '4G RAM+30G ROM 大容量存储'
            },
            {
              id: 2,
              label: '9英寸视网膜屏'
            },
            {
              id: 3,
              label: '支持多点触控'
            }
          ]
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
}

@media (min-width: 600px) {
}

.yingjianjieshao {
  .jieshao {
    margin-top: 50px;

    .header {
      height: 60px;
      line-height: 60px;
      font-size: 2rem;
      background-color: map-get($colors, primary);
      color: $whiteText;
    }
    .image {
      margin-top: 50px;
    }
  }

  .yingjians {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
  }
}
</style>
