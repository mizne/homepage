<template>
  <div class="zhihuishangjiaban page">

    <banner :image="banner"></banner>

    <div class="shangjiaban">
      <div class="header">商家版</div>
      <div class="description">实现商圈/商家从引流到精准营销的闭环管理</div>

      <div class="image">
        <div class="steps">
          <div class="step yinliu">引流</div>
          <div class="step shouji">收集</div>
          <div class="step fenxi">分析</div>
          <div class="step yingxiao">营销</div>
        </div>
        <div class="total-descs">
          <div class="desc">
            <div>吸引更多客户</div>
            <div>抓住行人眼球</div>
          </div>
          <div class="desc">
            <div>精准标记消费</div>
            <div>客户行为记录</div>
          </div>
          <div class="desc">
            <div>行为深度解读</div>
            <div>客户足迹分析</div>
          </div>
          <div class="desc">
            <div>把握客户心理</div>
            <div>精准推荐营销</div>
          </div>
        </div>
      </div>
    </div>

    <div class="gongnengtixi">
      <div class="header">完善的线上商城功能体系</div>
      <div class="content">
        <div class="function-item" v-for="func in funcs" :key="func.id">
          <div class="icon-wrapper" :style="{'background-color': func.bgColor}">
            <i :class="['iconfont', func.icon]"></i>
          </div>
          <div class="header">{{func.header}}</div>
          <div class="description">{{func.description}}</div>
        </div>
      </div>
    </div>

    <div class="xianshangshangcheng">
      <div class="header">线上商城,多端同步</div>
      <div class="description">统一后台管理+数据多端同步+线上和线下双向营销</div>
      <div class="content">
        <div class="content-item" v-for="item in items" :key="item.id">
          <div class="header" :style="{'background-color': item.bgColor}">{{item.header}}</div>
          <div class="icon-wrapper">
            <i :class="['iconfont', item.icon]" :style="{'color': item.bgColor}"></i>
          </div>
          <div class="title">{{item.title}}</div>
          <div class="description">{{item.description}}</div>
        </div>
      </div>
    </div>

    <div class="yingjianzhichi">
      <div class="header">硬件支持</div>
      <div class="content">
        <div class="icon-wrapper">
          <i class="iconfont icon-settings"></i>
        </div>

        <div class="text">
          <div class="title">收银台、POS机</div>
          <div class="description">门店付款、上门交易的线下经济结合</div>
        </div>
      </div>
    </div>

    <div class="guanlipingtai">
      <div class="header">拥有强大的客户软件管理平台</div>
      <div class="description">腾宣威客户管理软件在传统的客户管理软件的基础上进行优化,更安全,更完善</div>
      <div class="content">
        <div class="content-item" v-for="pro in pros" :key="pro.id" :style="{'background-color': pro.bgColor}">
          <div class="icon-container">
            <div class="icon-wrapper" :style="{'background-color': pro.iconBgColor}">
              <i :class="['iconfont', pro.icon]"></i>
            </div>
            <div class="icon-text">{{pro.iconText}}</div>
          </div>
          <div class="text">
            {{pro.text}}
          </div>
        </div>
      </div>
    </div>
    <div class="image-container">
      <img src="../assets/images/zhihuishangjiaban/guanlipingtai.png" alt="">
    </div>

    <div class="guanliruanjian">
      <div class="header">腾宣威客户管理软件</div>
      <div class="description">店铺营销的管家顾问</div>
      <div class="content">
        <div class="content-item" v-for="feature in features" :key="feature.id">
          <div class="title">{{feature.title}}</div>
          <div class="content-desc">{{feature.content}}</div>
        </div>
      </div>
    </div>

    <div class="yonghuanli">
      <div class="header">用户案例</div>

      <div class="content">
        <div class="anli-item" v-for="example in examples" :key="example.id">
          <div class="merchant-name">{{example.merchantName}}</div>
          <div class="anli-description">{{example.description}}</div>
          <div class="anli-effects">{{example.effects}}</div>

          <div class="anli-images">
            <div class="anli-image" v-for="item in example.items" :key="item.id" :style="{'flex': item.flex}">
              <div class="title">{{item.title}}</div>
              <div class="image" :style="{'background-image': 'url('+item.image+')', 'height': item.imageHeight}"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="use-now">
      <div class="header">现在开始使用腾宣威客户管理软件</div>
    </div>

    <use-group></use-group>
  </div>
</template>

<script>
import Vue from 'vue'
import Banner from '@/components/Banner'
import UseNowGroup from '@/components/UseNowGroup'

export default {
  name: 'Zhihuishangjiaban',
  components: {
    banner: Banner,
    'use-group': UseNowGroup
  },
  data() {
    return {
      banner: require('../assets/images/zhihuishangjiaban/banner.png'),
      funcs: [
        {
          id: 0,
          header: '二维码扫描',
          description: '客户可以时刻关注商城新动态，与商城紧密相连',
          icon: 'icon-qrcode',
          bgColor: '#E98375'
        },
        {
          id: 1,
          header: '订单评价',
          description: '可以实时展示其他用户的真实评价，让用户更放心',
          icon: 'icon-pingjia',
          bgColor: '#EDB27A'
        },
        {
          id: 2,
          header: '积分换购',
          description: '用户购买商品可获得积分福利，以此为商家吸引更多顾客',
          icon: 'icon-xiaolian',
          bgColor: '#F1EA82'
        },
        {
          id: 3,
          header: '我的分享',
          description: '用户可以分享喜欢的商品给朋友，达到商品宣传的效果，增加客流量',
          icon: 'icon-fenxiang',
          bgColor: '#B6D97B'
        },
        {
          id: 4,
          header: '品牌街',
          description: '适用于各行业，瞬间提升店铺内涵，领先一大步',
          icon: 'icon-bag',
          bgColor: '#EA8AB0'
        },
        {
          id: 5,
          header: '商品相册',
          description: '轮播相册，全方位展示您的产品',
          icon: 'icon-picture',
          bgColor: '#728FC7'
        }
      ],
      items: [
        {
          id: 0,
          header: 'PC端',
          icon: 'icon-desktop',
          title: '购物商城',
          description: '完整购物体验和企业信息展示、商家入驻等',
          bgColor: '#E35E5F'
        },
        {
          id: 1,
          header: 'APP',
          icon: 'icon-app1',
          title: 'iPhone/Android',
          description: '搭建原生APP，聚拢用户购物、交流',
          bgColor: '#5FDEE4'
        },
        {
          id: 2,
          header: '微信',
          icon: 'icon-wechat',
          title: '微商城、广分销',
          description: '打入微信市场，抢占海量用户做推广',
          bgColor: '#3ECA9D'
        },
        {
          id: 3,
          header: '后台管理',
          icon: 'icon-notebook',
          title: '平台后台、商家后台',
          description: '平台管理整体运营商家、管理入驻店铺',
          bgColor: '#665FE3'
        }
      ],
      pros: [
        {
          id: 0,
          bgColor: '#606FE4',
          icon: 'icon-person',
          iconBgColor: '#4D60E3',
          iconText: '客户管理',
          text: '采用更科学化的客户管理方式，为商家赢得更多利润、更大的客流量'
        },
        {
          id: 1,
          bgColor: '#7E5EE3',
          icon: 'icon-yinliu',
          iconBgColor: '#704EE3',
          iconText: '综合引流',
          text: '通过服务平台进行用户精准推荐，为商家吸引顾客'
        },
        {
          id: 2,
          bgColor: '#A15FE3',
          icon: 'icon-fenxi',
          iconBgColor: '#984EE3',
          iconText: '精准分析',
          text: '通过收集到的个人信息，分析收入能力，消费能力，以此获得顾客的显性消费、隐性消费'
        },
        {
          id: 3,
          bgColor: '#C05FE4',
          icon: 'icon-yingxiao',
          iconBgColor: '#BB4DE2',
          iconText: '精准营销',
          text:
            `通过数据分析准确获得顾客的消费喜好及消费需求，为商家创造更多的销售机会，
            商家据此能够对店铺营销情况进行很好的把控，保证商家营销量`
        }
      ],
      features: [
        {
          id: 0,
          title: '更近',
          content: '在线的客服售后及技术支持'
        },
        {
          id: 1,
          title: '更新',
          content: '在线升级 令使用者能够第一时间使用最新版本和最新功能'
        },
        {
          id: 2,
          title: '更安全',
          content: '多重加密以及双重备份让您的信息更安全'
        }
      ],
      examples: [
        {
          id: 0,
          merchantName: '雪花冰餐饮商家营销',
          description: '通过线上和线下融合，通过促销活动引流和二次精准营销，提升营收和利润',
          effects: '效果: 营收提升50%，利润提升30%，月收集客户信息600多条',
          items: [
            {
              id: 0,
              title: '发送优惠券及红包节',
              image: require('../assets/images/zhihuishangjiaban/xuehuabing-1.png'),
              imageHeight: '600px',
              flex: 1
            },
            {
              id: 1,
              title: '门店摆放优惠券,扫码领券',
              image: require('../assets/images/zhihuishangjiaban/xuehuabing-2.png'),
              imageHeight: '600px',
              flex: 1
            },
            {
              id: 2,
              title: '多种促销活动及二次精准营销',
              image: require('../assets/images/zhihuishangjiaban/xuehuabing-3.png'),
              imageHeight: '600px',
              flex: 1
            }
          ]
        },
        {
          id: 1,
          merchantName: '七田真英语培训',
          description: '通过线上和线下融合，通过互动营销和二次精准营销，提升营收和利润',
          effects: '效果: 营收提升40%，利润提升40%，月收集客户信息1000多条',
          items: [
            {
              id: 0,
              title: '发送优惠券及红包节',
              image: require('../assets/images/zhihuishangjiaban/qitianzhen-1.png'),
              imageHeight: '600px',
              flex: 1
            },
            {
              id: 1,
              title: '多种促销活动及二次精准营销',
              image: require('../assets/images/zhihuishangjiaban/qitianzhen-2.png'),
              imageHeight: '300px',
              flex: 2
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
  .zhihuishangjiaban {
    .shangjiaban {
      .image {
        font-size: 1.5rem;
        .steps {
          flex-direction: column;
          .step {
            width: 80%;
            height: 50px;
            margin-top: 20px;
          }
        }
        .total-descs {
          flex-direction: column;
          .desc {
            width: 80%;
            height: 50px;
            margin-top: 20px;
          }
        }
      }
    }

    .gongnengtixi {
      .content {
        .function-item {
          width: 100%;
          margin-top: 50px;
        }
      }
    }

    .xianshangshangcheng {
      .content {
        .content-item {
          width: 100%;
          margin-top: 20px;
        }
      }
    }

    .yingjianzhichi {
      .content {
        flex-direction: column;
      }
    }
    .guanlipingtai-image {
      height: 900px;
    }

    .guanliruanjian {
      .content {
        height: 300px;
        flex-direction: column;
        .content-item {
          padding: 20px;

          .text {
            padding: 0px;
            line-height: 25px;
            font-size: 1rem;
          }
        }
      }
    }

    .yonghuanli {
      .content {
        .anli-item {
          .anli-images {
            flex-direction: column;

            .anli-image {
              width: 100%;
              margin-top: 50px;
              .image {
                height: 400px;
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width: 600px) {
  .zhihuishangjiaban {
    .shangjiaban {
      .image {
        font-size: 2rem;
        .steps {
          .step {
            width: 100px;
            height: 100px;
            margin-left: 40px;
          }
        }

        .total-descs {
          .desc {
            margin-left: 40px;
          }
        }
      }
    }

    .gongnengtixi {
      .content {
        padding: 0 50px 50px 50px;
        .function-item {
          width: 28%;
          margin-top: 50px;
        }
      }
    }

    .xianshangshangcheng {
      .content {
        .content-item {
          width: 45%;
          margin-top: 50px;
          margin-left: 20px;
        }
      }
    }

    .guanlipingtai {
      .content {
        .content-item {
          padding: 0 100px;
          .text {
            padding: 0 100px;
            padding: 0 20px;
            line-height: 35px;
            font-size: 1.5rem;
          }
        }
      }
    }

    .guanlipingtai-image {
      height: 3400px;
    }

    .guanliruanjian {
      margin: 0 20%;
      .content {
        height: 600px;
      }
    }

    .yonghuanli {
      .content {
        .anli-item {
          .anli-images {
            padding: 0 200px;
            .anli-image {
              &:not(:first-child) {
                margin-left: 100px;
              }

              .image {
                height: 600px;
              }
            }
          }
        }
      }
    }
  }
}

.zhihuishangjiaban {
  .shangjiaban {
    margin-top: 50px;

    .description {
      margin-top: 20px;
    }

    .image {
      margin-top: 20px;
      .steps {
        display: flex;
        justify-content: center;
        align-items: center;
        .step {
          position: relative;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #fb9606;
          border-radius: 10px;
          color: #fb9606;
          @include cardHover;
          padding: 20px;

          &:after {
            content: '';
            position: absolute;
            width: 4px;
            height: 38px;
            top: 105%;
            left: 50%;
            background-color: map-get($colors, danger);
            transform: translateX(-50%);
          }
        }
      }
      .total-descs {
        margin-top: 50px;

        display: flex;
        justify-content: center;
        align-items: center;
        .desc {
          flex: 1;
          height: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          border: 1px solid #fb9606;
          border-radius: 10px;
          color: #fb9606;
          @include cardHover;
          padding: 20px;
        }
      }
    }
  }

  .gongnengtixi {
    margin-top: 50px;

    .content {
      margin-top: 50px;

      border: 1px solid #cdcdcd;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: row wrap;
      .function-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        margin: 20px;
        @include cardHover;
        .icon-wrapper {
          width: 200px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            color: white;
            font-size: 8rem;
          }
        }
        .header {
          font-size: 1.5rem;
          margin-top: 20px;
        }
        .description {
          margin-top: 20px;
          width: 200px;
          min-height: 100px;
        }
      }
    }
  }

  .xianshangshangcheng {
    margin-top: 50px;

    .description {
      margin-top: 30px;
    }
    .content {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: row wrap;
      .content-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        @include cardHover;
        padding: 20px;
        box-sizing: border-box;
        .header {
          width: 100%;
          height: 50px;
          line-height: 50px;
          color: white;
          font-size: 1.5rem;
        }
        .icon-wrapper {
          width: 200px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            font-size: 8rem;
          }
        }
        .title {
          font-size: 1.5rem;
          font-weight: 500;
        }
        .description {
          width: 200px;
          font-weight: 500;
        }
      }
    }
  }

  .yingjianzhichi {
    margin-top: 50px;
    .header {
      height: 50px;
      line-height: 50px;
      font-size: 2rem;
      background-color: #5f92e3;
      color: white;
    }
    .content {
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon-wrapper {
        flex: 1;
        i {
          font-size: 8rem;
          color: #6f9de7;
        }
      }
      .text {
        flex: 1;
        .title {
          font-size: 1.5rem;
        }
        .description {
          margin-top: 20px;
        }
      }
    }
  }

  .guanlipingtai {
    margin-top: 50px;

    .description {
      margin-top: 30px;
    }
    .content {
      margin-top: 30px;
      .content-item {
        padding: 0 20px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        @include cardHover;
        .icon-container {
          flex: 1;
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
              color: $whiteText;
              font-size: 4rem;
            }
          }
          .icon-text {
            color: $whiteText;
          }
        }
        .text {
          padding: 0px;
          line-height: 25px;
          font-size: 1rem;
          text-align: left;
          flex: 6;
          color: $whiteText;
        }
      }
    }
  }

  .guanliruanjian {
    margin-top: 50px;


    .description {
      margin-top: 30px;
    }
    .content {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url(../assets/images/zhihuishangjiaban/guanliruanjian.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .content-item {
        color: $whiteText;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        .title {
          width: 100px;
          height: 100px;
          font-size: 1.5rem;
        }
        .content-desc {
        }
      }
    }
  }

  .yonghuanli {
    margin-top: 50px;

    .content {
      margin-top: 50px;
      .anli-item {
        @include cardHover;

        &:not(:first-child) {
          margin-top: 100px;
        }

        .merchant-name {
          font-size: 2rem;
        }
        .anli-description {
          margin-top: 20px;
        }
        .anli-effects {
          font-size: 1.5rem;
          margin-top: 20px;
        }
        .anli-images {
          margin-top: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          .anli-image {
            padding: 20px;
            transition: color 0.3s;
            &:hover {
              color: map-get($colors, primary);
            }

            .title {
              font-size: 1.5rem;
            }
            .image {
              margin-top: 50px;
              background-position: center;
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
          }
        }
      }
    }
  }

  .use-now {
    margin-top: 50px;
    font-size: 2rem;
  }
}
</style>
