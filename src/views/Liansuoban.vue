<template>
  <div class="liansuoban page">

    <banner :image="banner"></banner>

    <div class="jieshao">
      <div class="header">什么是连锁版</div>
      <div class="description description1">
        <ul>
          <li>
            1.腾宣威连锁客户管理系统是一款针对连锁店、连锁商家实行客户制管理营销研发出来的一款BS会员系统,此系统无需安装,可
            无限制扩展店铺数量。
          </li>
          <li>
            2.通过系统功能进行客户管理、商品库存管理,集中分析各店消费数据,更为准确的了解客户消费行为,锁定热卖产品,实现0库存目标,提高自上而下
            的高效协同管理效率。
          </li>
          <li>
            3.其宗旨是帮助商家吸引客户,提高客户忠诚度,提高管理效率,轻松管理各个分店。
          </li>
        </ul>
      </div>
      <div class="image-container">
        <img src="../assets/images/liansuoban/jieshao-1.png" alt="">
      </div>

      <div class="header">
        连锁版客户管理软件运营模式
      </div>
      <div class="description description2">
        <ul>
          <li>
            1.此模式适合相同业务的连锁分店,统一老板集中管理。
          </li>
          <li>
            2.总帐号对各个分店会员数据、商品数据一目了然,可进行分店之间商品调拨。
          </li>
          <li>
            3.各个分店均可办卡,会员到各分店可刷卡消费积分打折。
          </li>
        </ul>
      </div>
      <div class="image-container">
        <img src="../assets/images/liansuoban/jieshao-2.png" alt="">
      </div>
    </div>

    <div class="youshigongneng">
      <div class="header">连锁版客户管理软件的优势功能</div>
      <div class="content">
        <div class="content-item" v-for="youshi in youshis" :key="youshi.id">
          <div class="icon-wrapper" :style="{'background-color': youshi.iconBgColor}">
            <i :class="['iconfont', youshi.icon]"></i>
          </div>
          <div class="text">{{youshi.text}}</div>
        </div>
      </div>
    </div>

    <div class="tesegongneng">
      <div class="header">连锁版客户管理软件的特色功能</div>
      <div class="sub-header description">一铺多店,让企业跨时间、跨地域接单降低运营成本,实现全国连锁</div>
      <div class="description">全国跨时间、地点,实现会员资料共享,不管是统一老板还是不同老板,轻松管理连锁店铺,实现全国一卡通用,降低运营成本。</div>
      <div class="image-container">
        <img src="../assets/images/liansuoban/tesegongneng.png" alt="">
      </div>
    </div>

    <div class="xiaoshoutixi">
      <div class="header">构建O2O综合电商平台融入电商及现代销售体系</div>
      <div class="description">线上对接网上商城、微信。打造最新的O2O模式,实现线上预约,线下体验的全新模式,线上数据与线下数据同步对接,
        融入电商平台,微信在线支付,微商城,微会员,大范围的招募会员,构建品牌化。
      </div>
      <div class="image-container">
        <img src="../assets/images/liansuoban/xiaoshoutixi.png" alt="">
      </div>
    </div>

    <div class="image-container">
      <img src="../assets/images/liansuoban/guanlidianpu.png" alt="">
    </div>

    <div class="image-container">
      <img src="../assets/images/liansuoban/xiaofeijiandan.png" alt="">
    </div>

    <div class="description">
      <ul>
        <li>
          线上手机注册,免费体验微商城,微签到,微游戏,微互动,微官网,微团购
        </li>
        <li>
          线上做生意,轻轻松松拉销量
        </li>
        <li>
          线下会员自助查询,消费积分全知道
        </li>
      </ul>
    </div>

    <div class="use-now">
      <div class="header">
        现在开始使用腾宣威客户管理软件
      </div>
    </div>


    <use-group></use-group>
  </div>
</template>

<script>
import Vue from 'vue'
import Banner from '@/components/Banner'
import UseNowGroup from '@/components/UseNowGroup'

export default {
  name: 'Liansuoban',
  components: {
    banner: Banner,
    'use-group': UseNowGroup
  },
  data() {
    return {
      banner: require('../assets/images/liansuoban/banner.png'),
      youshis: [
        {
          id: 0,
          iconBgColor: '#FB9606',
          icon: 'icon-person',
          text: '会员管理'
        },
        {
          id: 1,
          iconBgColor: '#27C86A',
          icon: 'icon-kuaijie',
          text: '快捷功能'
        },
        {
          id: 2,
          iconBgColor: '#2FA6EA',
          icon: 'icon-pay',
          text: '会员消费'
        },
        {
          id: 3,
          iconBgColor: '#9267D3',
          icon: 'icon-jifen',
          text: '积分兑换'
        },
        {
          id: 4,
          iconBgColor: '#F25550',
          icon: 'icon-tongji',
          text: '统计报表'
        },
        {
          id: 5,
          iconBgColor: '#FD59B2',
          icon: 'icon-zengzhi',
          text: '增值服务'
        },
        {
          id: 6,
          iconBgColor: '#20CABD',
          icon: 'icon-bag',
          text: '商品管理'
        },
        {
          id: 7,
          iconBgColor: '#FC6B34',
          icon: 'icon-settings',
          text: '系统设置'
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
  .liansuoban {
    .youshigongneng {
      .content {
        .content-item {
          width: 100%;
        }
      }
    }
  }
}

@media (min-width: 600px) {
  .liansuoban {
    .youshigongneng {
      .content {
        .content-item {
          width: 20%;
        }
      }
    }
  }
}

.liansuoban {
  .jieshao {
    .header {
      margin-top: 50px;
    }

    .description {
      margin-top: 50px;
      font-size: 1.5rem;
      text-align: left;
      line-height: 40px;
      li {
        margin-top: 10px;
        @include textHover;
      }
    }
  }

  .youshigongneng {
    margin-top: 50px;

    .content {
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: row wrap;

      .content-item {
        padding: 20px;
        margin: 20px;
        @include cardHover;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          i {
            font-size: 3rem;
            color: white;
          }
        }
        .text {
          margin-top: 20px;
          margin-bottom: 50px;
          font-size: 1rem;
        }
      }
    }
  }

  .tesegongneng {
    margin-top: 50px;
    @include cardHover;
    padding: 20px;
    .sub-header {
      margin-top: 20px;
      font-size: 1.5rem;
      text-align: center;
      color: $descColor;
    }
    .description {
      margin-top: 20px;
    }
  }

  .xiaoshoutixi {
    margin-top: 50px;
    @include cardHover;
    padding: 20px;
    .description {
      margin-top: 20px;
      font-size: 1.5rem;
      color: $descColor;
    }
  }

  .description {
    text-align: left;
    line-height: 40px;
    font-size: 1.5rem;

    li {
      color: $blackText;
      @include textHover;
      &:not(:first-child) {
        margin-top: 20px;
      }
    }
  }

  .use-now {
    color: $blackText;
    margin-top: 50px;
  }
}
</style>
