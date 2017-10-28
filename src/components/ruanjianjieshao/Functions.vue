<template>
  <div class="ruanjianjieshao-functions-container">
    <div class="header">
      软件功能介绍
    </div>

    <div class="description">
      拥有众多强大功能，为您创造最大效益
    </div>
    <div class="ruanjianjieshao-functions">
      <div class="ruanjianjieshao-left-functions">
      <left-function v-for="func in leftFunctions" :key="func.id" :func="func"></left-function>
    </div>
    <div class="ruanjianjieshao-right-functions">
      <right-function v-for="func in rightFunctions" :key="func.id" :func="func"></right-function>
    </div></div>

  </div>
</template>

<script>
import LeftFunction from '@/components/ruanjianjieshao/LeftFunction'
import RightFunction from '@/components/ruanjianjieshao/RightFunction'

export default {
  name: 'Softwares',
  components: {
    'left-function': LeftFunction,
    'right-function': RightFunction
  },
  data() {
    return {
      leftFunctions: [
        {
          id: 0,
          title: '微会员',
          description: '帮助商家快速招募会员，实现免费微营销。',
          icon: 'icon-wechat',
          'icon-color': '#5F4F9A'
        },
        {
          id: 1,
          title: '微支付',
          description: '二维码扫描支付，方面快捷。',
          icon: 'icon-pay',
          'icon-color': '#EFBACC'
        },
        {
          id: 2,
          title: '积分商城',
          description: '每日签到、领券消费可获取积分。',
          icon: 'icon-jifen',
          'icon-color': '#26B9EF'
        },
        {
          id: 3,
          title: '商家管理',
          description: '全国连锁店/加盟商统一管理，可分配不同权限。',
          icon: 'icon-shop',
          'icon-color': '#7CC559'
        }
      ],
      rightFunctions: [
        {
          id: 0,
          title: '基础功能',
          description: '办卡充值、消费打折、积分升级、会员自助查询。',
          icon: 'icon-gongneng',
          'icon-color': '#EFB718'
        },
        {
          id: 1,
          title: '会员卡管理',
          description: '批量办卡、充值、积分清零等。',
          icon: 'icon-card',
          'icon-color': '#01A0E1'
        },
        {
          id: 2,
          title: '优惠活动',
          description: '设置生日优惠、纪念日优惠、满就送等不同的优惠方式。',
          icon: 'icon-hui',
          'icon-color': '#E77D87'
        },
        {
          id: 3,
          title: '营销优势',
          description: '鼓励老会员带来新会员，实现口碑营销。',
          icon: 'icon-yingxiao',
          'icon-color': '#95CA62'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@media (max-width: 600px) {
  .ruanjianjieshao-functions {
    flex-direction: column;
  }
}

@media (min-width: 600px) {
  .ruanjianjieshao-functions {
    .ruanjianjieshao-right-functions {
      margin-left: 20px;
    }
  }
}

.ruanjianjieshao-functions-container {
  margin-top: 50px;

  .ruanjianjieshao-functions {
    margin-top: 40px;
    display: flex;

    .ruanjianjieshao-left-functions,
    .ruanjianjieshao-right-functions {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
