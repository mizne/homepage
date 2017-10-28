<template>
  <div class="ruanjiangongneng page">

    <banner :image="banner"></banner>

    <div class="youshigongneng">
      <div class="header">软件优势功能</div>
      <div class="content">
        <div class="func-item" v-for="func in funcs" :key="func.id">
          <div class="icon-container">
            <div class="icon-wrapper">
              <i :class="['iconfont', func.icon]"></i>
            </div>
          </div>

          <div class="description">
            <div class="title">{{func.title}}</div>
            <div class="desc">{{func.description}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="tesegongneng">
      <div class="header">
        特色功能
      </div>
    </div>

    <div class="meiyouxiangbudao">
      <div class="header">
        没有我们做不到,只有您想不到
      </div>
    </div>

    <more-function></more-function>

  </div>
</template>

<script>
import Vue from 'vue'
import Banner from '@/components/Banner'
import MoreFunction from '@/components/index/IndexMoreFunction'

export default {
  name: 'Ruanjiangongneng',
  components: {
    banner: Banner,
    'more-function': MoreFunction,
  },
  data() {
    return {
      banner: require('../assets/images/ruanjiangongneng/banner.png'),
      funcs: [
        {
          id: 0,
          icon: 'icon-settings',
          title: '数字化营销CRM系统',
          description: `为企业及商户提供全渠道运营方案，帮助传统客户从线下运营转化到线上的数字化运营服务。
          提供各种有创新性的互动营销、精准分析、客户管理等解决方案。
          对客户服务、运营、销售管理进行各种实时分析，实现客户营收增长和提升运营效率。`
        },
        {
          id: 1,
          icon: 'icon-tongji',
          title: '精准分析系统',
          description: `通过营销获得客户数据，使用精准分析系统获得用户的消费习惯、消费水平等信息。
          通过收集到的支付信息，分析每一位顾客的消费习惯、爱好，以及消费的时间次数。
          通过收集到店未消费的用户信息，分析出用户现阶段的隐性需求。`
        },
        {
          id: 2,
          icon: 'icon-fenxi',
          title: '精准营销系统',
          description: `通过分析客户消费喜好，有针对性地向客户进行商家推送，保证消费;
          同时可获得客户的隐性消费，商家以此向客户推荐消费，增加消费。`
        },
        {
          id: 3,
          icon: 'icon-shop',
          title: '线上商城系统',
          description: `商家建设线上商城，实现线上线下双向营销，以会员为中心开展老客户营销，创新招商模式;
          建立商家口碑营销体系，应用线上延展客户消费;构建全网电商体系。建立会员积分与尊享机制，做好客户管理;
          让会员体验产品质量的同时，尊享产品以外的服务体验增加客户粘性。`
        },
        {
          id: 4,
          icon: 'icon-yingxiao',
          title: '互动营销',
          description: `多种社交营销玩法，让海量用户成为你的粉丝，刮刮乐、大转盘、砸金蛋、红包节、优惠券、促销活动等，
          都是非常有效的营销工具，把功能当成与用户之前的互动游戏，推广效果更好，实现门店的引流。`
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
  .ruanjiangongneng {

    .youshigongneng {
      .content {
        .func-item {
          flex-direction: column;
          .description {
            margin-top: 20px;
          }
        }
      }
    }
  }
}

@media (min-width: 600px) {
}

.ruanjiangongneng {
  .youshigongneng {
    margin-top: 50px;

    .content {
      margin-top: 50px;

      .func-item {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        @include cardHover;
        padding: 20px;
        &:hover .desc {
          color: map-get($colors, primary);
        }

        .description {
          margin: 0;
        }

        .icon-container {
          flex: 1;
          .icon-wrapper {
            background-color: #e95e97;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            i {
              font-size: 4rem;
              color: #fefefe;
            }
          }
        }

        .description {
          flex: 5;
          display: flex;
          flex-direction: column;
          min-height: 200px;
          .title {
            max-width: 400px;
            height: 80px;
            line-height: 80px;
            background-color: #e95e97;
            color: #fefefe;
            font-size: 2rem;
            border-radius: 20px;
          }

          .desc {
            position: relative;
            margin-top: 40px;
            padding: 15px;
            border: 2px solid #e95e97;
            border-radius: 10px;
            font-weight: bold;
            line-height: 30px;
            text-align: left;

            &:before {
              position: absolute;
              content: '';
              width: 0;
              height: 0;
              left: 50px;
              top: -10px;
              border-left: 15px solid transparent;
              border-top: 15px solid transparent;
              border-bottom: 15px solid #e95e97;
              transform: rotate(225deg);
            }

            &:after {
              position: absolute;
              content: '';
              width: 0;
              height: 0;
              left: 50px;
              top: -7px;
              border-left: 15px solid transparent;
              border-top: 15px solid transparent;
              border-bottom: 15px solid #fff;
              transform: rotate(225deg);
            }
          }
        }
      }
    }
  }

  .tesegongneng,
  .meiyouxiangbudao {
    margin-top: 50px;
  }
}
</style>
