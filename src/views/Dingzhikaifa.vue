<template>
  <div class="dingzhikaifa page">
    <banner :image="banner"></banner>

    <div class="liucheng">
      <div class="header">定制开发流程</div>
      <div class="tabs">
        <div class="tab">客户</div>
        <div class="tab">销售部</div>
        <div class="tab">项目部</div>
      </div>
      <div class="image"></div>
    </div>

    <div class="shouhou">
      <div class="header">关于售后</div>
      <div class="content">
        <div class="content-item" v-for="item in items" :key="item.id">
          <div class="title">{{item.title}}</div>
          <div class="description">{{item.body}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Banner from '@/components/Banner'

export default {
  name: 'Dingzhikaifa',
  components: {
    banner: Banner
  },
  data() {
    return {
      banner: require('../assets/images/dingzhikaifa/banner.jpg'),
      items: [
        {
          id: 0,
          title: '技术咨询',
          body: `乙方将向甲方提供免费技术咨询服务和产品培训。技术咨询服务的内容包括新技术通报，
          系统改进意见，提供技术方案，项目长远规划，研究解决技术难题等。乙方愿与甲方长期合作，
          为客户的长期稳定发展作出贡献。`
        },
        {
          id: 1,
          title: '客服专线',
          body: `乙方将为甲方提供5*8小时一对一客服帮助。甲方可通过乙方授权指定的系统管理员，
          通过乙方提供的热线电话获得帮助服务，包括疑难解答、故障定位、故障排除等服务。`
        },
        {
          id: 2,
          title: 'Internet远程维护',
          body: `乙方将为甲方提供Internet远程维护服务。维护时，甲方通过QQ远程协助等方式，让乙方
          售后服务人员、技术人员进行远程操作，或通过提供远程计算机的登录密码方式。`
        },
        {
          id: 3,
          title: '上门服务',
          body: `深圳/成都市内，乙方将为客户提供上门维护服务。对于甲方所反馈的系统故障，在远程维护及
          电话帮户都难以解决的情况下，乙方将排除服务人员进行上门维护，以确保客户的系统故障得到最快速、最全面、最彻底的解决。
          包含:非软件质量原因而上门服务的(如客户人员操作有误 上门维护、需要腾宣威公司人员上门培训等)，深圳/成都市内每年
          提供2次免费上门服务，超出每次收取出差补助￥500元/人天。深圳/成都市外 省外客户不提供免费上门售后服务。如需
          腾宣威公司人员上门支持，则客户报销负责往返路费和食宿，同时支付出差补助￥500元/人天。`
        },
        {
          id: 4,
          title: '硬件产品',
          body: `对于乙方提供的硬件产品，实施非认为损坏三个月包换、六个月保修的质保服务。超过保修期的
          硬件产品，如需维修，则客服自行承担维修成本，并承担设备发回总部的单程快递费用。在服务期间，如无法在
          规定的响应时间内排除硬件故障，乙方免费向甲方提供同等质量水平的替换产品使用。`
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
  .dingzhikaifa {
    margin: 0 10px;
    .liucheng {
      .tabs {
      }
      .image {
        width: 100%;
        height: 600px;
      }
    }
  }
}

@media (min-width: 600px) {
  .dingzhikaifa {
    .liucheng {
      .tabs {
        .tab {
          &:not(:first-child) {
            margin-left: 100px;
          }
        }
      }
      .image {
        width: 80%;
        height: 1600px;
      }
    }
  }
}

.dingzhikaifa {
  .liucheng {
    margin-top: 50px;

    .tabs {
      width: 80%;
      margin: 0 auto;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      .tab {
        font-size: 1.5rem;
        flex: 1;
        height: 60px;
        line-height: 60px;
        border-bottom: 2px solid #fb5859;
      }
    }

    .image {
      margin-top: 20px;
      margin: 0 auto;

      background-image: url(../assets/images/dingzhikaifa/liucheng1.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }

  .shouhou {
    margin-top: 50px;

    .content {
      margin-top: 50px;

      .content-item {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        @include cardHover;
        padding: 20px;

        .title {
          text-align: left;
          padding: 10px;
          width: auto;
          color: white;
          background-color: #fca93f;
          border-radius: 5px;
        }
        .description {
          padding: 20px;
          margin: 0;
          border: 1px solid #fca93f;
          text-align: left;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
