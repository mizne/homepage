<template>
  <div class="gongsijianjie page">
    <banner :image="banner"></banner>

    <div class="guanyuwomen">
      <div class="header">关于我们</div>
      <div class="sub-header">为客户提供新零售全渠道客户营销CRM解决方案</div>

      <div class="description">
        腾宣威软件科技专注新零售品牌事业，建立以南京基地为服务中心，分别在苏南、苏北、深圳、
        上海等地设立分支机构和网络服务中心，业务涉及国内大部分地区。目前已拥有超过千万级的
        应用服务流量，涵盖国内各类客户，为他们提供两大类综合解决方案：智慧商圈、智慧会展。
        通过技术和商业模式的创新，使中国中小型企业及商户的信息化进程得到全面推进，也让我们
        成为移动互联网乃至互联网行业迅速崛起的龙头CRM企业。聚焦以数字化营销为核心的CRM系统
        打造，为企业及商户提供线上运营方案，帮助客户从线下运营转化到线上的数字化运营服务。
      </div>

      <div class="content">
        <div class="content-item" v-for="item in items" :key="item.id">
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.description}}</div>
        </div>
      </div>
    </div>

    <div class="shichang">
      <div class="header">
        我们的市场
      </div>

      <div class="image-container">
        <img src="../assets/images/gongsijianjie/womendeshichang.png" alt="">
      </div>
    </div>

    <div class="zuzhi">
      <div class="header">我们的组织</div>
      <div class="desc">用心经营 客户至上</div>
    </div>
    <div class="image-container">
      <img src="../assets/images/gongsijianjie/zuzhi.png" alt="">
    </div>

    <div class="youshi">
      <div class="header">我们的优势</div>
      <div class="youshis">
        <div class="jishuchuangxin youshi-item">
          <div class="title">技术创新优势</div>
          <div class="item">
            <div class="item-header">
              技术创新成果
            </div>
            <div class="item-content">8项软件著作权，200项专利</div>
          </div>
          <div class="item">
            <div class="item-header">
              E代售
            </div>
            <div class="item-content">
              实时分账技术国内领先；
              国内第一套e代售系统；
              国内第一套具备为商家提供100%营收的互联网O2O系统。
            </div>
          </div>
          <div class="item">
            <div class="item-header">CRM</div>
            <div class="item-content">国内第一套全配置SaaS系统，技术比肩Salesforce，2016
            年，通过国际软件成熟度三级阶段性评估(CMMI3)，从制度上保证公司的研发按照
            国际标准部署和管理
            </div>
          </div>
          <div class="item">2017年。顺利完成ISO9001：2008认证。</div>
        </div>
        <div class="yingxiao youshi-item">
          <div class="title">
            营销优势
          </div>
          <div class="sub-title">直销为主 SaaS为辅</div>

          <div class="item">
            <div class="item-header">直销</div>
            <div class="item-content">
              目前形成以南京为基地，北京上海广州为中心辐射
              全国二十多个大中城市的营销服务网络。
            </div>
          </div>

          <div class="item">
            <div class="item-header">线上销售</div>
            <div class="item-content">
              采用线上销售，用户订购模式，即购即用，效率提升，成本降低。
            </div>
          </div>
        </div>
        <div class="xianfa youshi-item">
          <div class="title">先发优势</div>
          <div class="item">代售点客户 100+</div>
          <div class="item">SaaS 用户发展迅猛</div>
        </div>
      </div>
    </div>

    <div class="jiaruwomen">
      <div class="icon-wrapper">
        <i class="iconfont icon-zuanshi"></i>
      </div>

      <div class="content">用心经营 品质保障</div>

      <el-button>加入我们</el-button>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import Banner from '@/components/Banner'

export default {
  name: 'Gongsijianjie',
  components: {
    banner: Banner
  },
  data() {
    return {
      banner: require('../assets/images/gongsijianjie/banner.jpg'),
      items: [
        {
          id: 0,
          title: '我们的模式',
          description: `腾宣威 是家股份制企业，它以南京基地为服务中心，在苏南、苏北、深圳
          、上海等地分别设立了机构和网络服务中心，业务涉及国内大部分地区，目前已实现分布更
          广泛、服务更到位的经营模式！`
        },
        {
          id: 1,
          title: '我们的服务',
          description: `经历 10000 小时，我们已拥有超过千万级的应用服务流量，其中涵盖国内各类 客户。
          我们主要为他们提供三大类综合解决方案：运营为核心的客户管理、品牌管理、数字化运营。`
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/mixins';

@media (max-width: 600px) {
  .gongsijianjie {
    .guanyuwomen {
      .content {
        .content-item {
          width: 100%;
          &:last-child {
            margin-top: 30px;
          }
        }
      }
    }
    .zuzhi {
      height: 200px;
    }
    .jiaruwomen {
      height: 200px;

      .icon-wrapper {
        i {
          font-size: 3rem;
        }
      }

      .el-button {
        width: 60%;
      }
    }
  }
}

@media (min-width: 600px) {
  .gongsijianjie {
    .guanyuwomen {
      .content {
        margin: 0 20%;
      }
      .content-item {
        width: 50%;
      }
    }

    .shichang {
      .header {
        margin: 0 20%;
      }
    }

    .zuzhi {
      margin: 0 20%;
      height: 400px;
    }

    .youshi {
      margin: 0 20%;

      .youshi-item {
        padding: 20px 50px;
      }
    }

    .jiaruwomen {
      margin: 0 20%;
      height: 400px;

      .icon-wrapper {
        i {
          font-size: 6rem;
        }
      }

      .content {
        font-size: 2rem;
      }

      .el-button {
        padding: 20px;
        font-size: 2rem;
        width: 30%;
      }
    }
  }
}

.gongsijianjie {
  .guanyuwomen {
    margin-top: 50px;

    .sub-header {
      font-size: 1.2rem;
      margin-top: 30px;
    }
    .description {
      @include textHover;
      margin-top: 20px;
      text-align: left;
    }

    .content {
      display: flex;
      flex-flow: row wrap;
      margin-top: 50px;

      .content-item {
        @include textHover;
        &:first-child .title {
          border-right: 1px solid $whiteText;
        }
        .title {
          height: 50px;
          line-height: 50px;
          color: $whiteText;
          background-color: map-get($colors, primary);
        }
        .desc {
          line-height: 30px;
          margin: 0 20px;
          margin-top: 50px;
          text-align: left;
        }
      }
    }
  }

  .shichang {
    margin-top: 50px;

    .header {
      height: 50px;
      line-height: 50px;
      color: $whiteText;
      background-color: map-get($colors, primary);
    }
  }

  .zuzhi {
    background-image: url(../assets/images/gongsijianjie/womendezuzhi.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .header {
      color: white;
    }
    .desc {
      border-top: 1px solid white;
      padding-top: 10px;
      margin-top: 20px;
      color: white;
      font-size: 1.5rem;
    }
  }

  .youshi {
    margin-top: 50px;

    .youshis {
      margin-top: 50px;

      .youshi-item {
        color: white;
        @include cardHover;
        padding: 20px;

        background-color: map-get($colors, primary);
        &:not(:first-child) {
          margin-top: 3px;
        }

        .title {
          font-size: 2rem;
          margin-bottom: 30px;
        }
        .sub-title {
          margin-top: -20px;
        }
        .item {
          font-size: 1.5rem;
          text-align: left;
          line-height: 35px;

          &:not(:first-child) {
            margin-top: 10px;
          }
        }
      }

      .xianfa {
        .item {
          text-align: center;
        }
      }
    }
  }

  .jiaruwomen {
    margin-top: 50px;
    background-image: url(../assets/images/gongsijianjie/jiaruwomen.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .icon-wrapper {
      padding-top: 4%;
      i {
        color: map-get($colors, danger);
      }
    }

    .content {
      width: 40%;
      margin: 0 auto;
      padding: 10px 0;

      color: map-get($colors, danger);
      border-top: 1px solid map-get($colors, danger);
      border-bottom: 1px solid map-get($colors, danger);
    }

    .el-button {
      margin-top: 40px;
      background-color: map-get($colors, danger);
      border: none;
      color: white;
    }
  }
}
</style>
