<template>
  <div class="shangjialianmeng page">

    <banner :image="banner"></banner>

    <div class="jieshao">
      <div class="header">商家联盟</div>
      <div class="description description1">
        <ul>
          <li>
            商家联盟是指某一区域通过组织运营商为了达到某种商业目的而组织起来的一个商业联盟体系。
            在这个商家联盟体系之内，实现了会员资源共享、合作共赢为目的，达到会员刷卡消费一卡通，
            走到哪儿，哪里就可以刷卡消费打折积分。
          </li>
          <li>
            对会员来讲，会员享受了一定的折扣和优惠;对商家来讲扩大了商家品牌知名度，提高了客流量，降低了推广成本。
          </li>
          <li>
            通常以运营商为中心，负责发起、运营、管理区域代理商、联盟商家和会员，从而实现自己的商业目的，运营商最终也是为了
            盈利，通过设置一定的积分、打折、消费、结算返利等规则最终实现自己的盈利。
          </li>
          <li>
            商家联盟也叫异业联盟、百业联盟、通用积分联盟、积分联盟、商业联盟、消费联盟、消费一卡通、一卡通会员消费系统等，有多种说法。
          </li>
        </ul>
      </div>
      <div class="jieshao-image1" style="">
        <img src="../assets/images/shangjialianmeng/jieshao-1.png" alt="">
      </div>

      <div class="header">
        商家联盟组织架构
      </div>
      <div class="description description2">
        以运营商为中心，负责发起、运营、管理区域代理商、联盟商家和会员，实现了资源共享，合作为赢!
      </div>
      <div class="jieshao-image2">
        <img src="../assets/images/shangjialianmeng/jieshao-2.png" alt="">
      </div>
    </div>

    <div class="zuzhijiagou">
      <img src="../assets/images/shangjialianmeng/jiagou.png" alt="">
    </div>

    <div class="xuqiufenxi">
      <div class="header">商家联盟需求分析</div>
      <div class="description">
        商家联盟需求分析包括了总部需求、联盟商需求、商家需求、会员需求
      </div>
      <div class="image">
        <img src="../assets/images/shangjialianmeng/xuqiufenxi.png" alt="">
      </div>
    </div>

    <div class="jifenliuxiang">
      <div class="header">商家联盟积分流向图</div>
      <div class="description">会员消费积分比率10，商家返利总比例系统为0.9，开卡商家返利比率0.2，联盟商返利比率0.4
        会员登记注册赠送10积分，推荐会员注册得5积分，一级会员推荐积分提成10%
      </div>

      <div class="steps">
        <div class="step-item" v-for="step in steps" :key="step.id" :style="{'background-color': step.bgColor, 'color': step.fontColor}">
          <div class="title">{{step.title}}</div>
          <div class="content">{{step.content}}</div>
        </div>
      </div>

      <div class="image">
        <img src="../assets/images/shangjialianmeng/jifenliuxiang.png" alt="">
      </div>
    </div>


    <div class="gongnengzongjie">
      <div class="header">
        商家联盟功能介绍
      </div>

      <div class="description">
        商家联盟客户管理系统聚集诸多特色而又使用的强大功能于一身，打造最卓越可入户管理系统，让你更方便、省心！
      </div>

      <div class="image">
        <img src="../assets/images/shangjialianmeng/gongnengzongjie.jpg" alt="">
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import Banner from '@/components/Banner'

export default {
  name: 'Shangjialianmeng',
  components: {
    banner: Banner
  },
  data() {
    return {
      banner: require('../assets/images/shangjialianmeng/banner.png'),
      steps: [
        {
          id: 0,
          title: '总分积分',
          content: '会员消费所得返利积分+会员积分兑换礼品回收的积分-会员积分兑换礼品回收的积分',
          bgColor: '#C8EDFF',
          fontColor: '#0296E0'
        },
        {
          id: 1,
          title: '联盟商积分',
          content: '向总部购买积分-给商家充值积分+联盟商下的会员消费所得返利积分',
          bgColor: '#FFD18D',
          fontColor: '#FD9A01'
        },
        {
          id: 2,
          title: '商家积分',
          content: '向联盟商购买积分-会员注册所得积分-推荐会员注册所得积分-会员消费商家所扣返利积分-商家的会员消费所得返利积分',
          bgColor: '#BFECA7',
          fontColor: '#40BF00'
        },
        {
          id: 3,
          title: '会员积分',
          content: '会员注册所得积分+会员消费所得积分+推荐会员注册所得积分+多级推荐会员消费所得积分-积分兑换礼品所扣积分',
          bgColor: '#C8EDFF',
          fontColor: '#FE4A00'
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
  .shangjialianmeng {
    .zuzhijiagou {
      height: 250px;
    }
    .xuqiufenxi {
      padding: 0 10px;
    }
  }
}

@media (min-width: 600px) {
  .shangjialianmeng {
    .jieshao-image1,
    .jieshao-image2,
    .zuzhijiagou {
      margin: 0 auto;
      width: 60%;
      height: 60%;
    }

    .xuqiufenxi {
      .image {
        margin: 30px auto;
        width: 60%;
        height: 60%;
      }
    }

    .jifenliuxiang {
      .image {
        margin: 30px auto;
        width: 60%;
        height: 60%;
      }
    }

    .gongnengzongjie {
      .image {
        margin: 30px auto;
        width: 60%;
        height: 60%;
      }
    }
  }
}

.shangjialianmeng {
  .jieshao {
    @include cardHover;
    padding: 20px;
    margin-top: 100px;
    .header {
      font-size: 2rem;
      margin-top: 20px;
    }
    .header {
      margin-top: 50px;
    }

    .description {
      margin-top: 50px;
      font-size: 1.5rem;
      line-height: 40px;
      li {
        @include textHover;
        margin-top: 10px;
      }
    }

    .description1 {
      text-align: left;
    }
  }

  .xuqiufenxi {
    @include cardHover;
    padding: 20px;
    margin-top: 50px;
    .description {
      margin-top: 20px;
      font-size: 1.5rem;
    }
  }

  .jifenliuxiang {
    @include cardHover;
    padding: 20px;
    margin-top: 50px;

    .description {
      margin-top: 20px;
      font-size: 1.5rem;
    }

    .steps {
      margin-top: 50px;
      .step-item {
        min-height: 100px;
        padding: 20px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        @include cardHover;
        padding: 20px;

        .title {
          font-size: 1.5rem;
        }
        .content {
          line-height: 30px;
        }
      }
    }
  }

  .gongnengzongjie {
    @include cardHover;
    padding: 20px;
    margin-top: 50px;

    .description {
      margin-top: 20px;
      font-size: 1.5rem;
    }
  }
}
</style>
