<template>
  <div class="qudaodaili page">
    <banner :image="banner"></banner>

    <div class="xuanze">
      <div class="header">
        选择腾宣威
      </div>

      <div class="description">
        <div class="desc1">协作是未来的价值,联盟是未来的结构,共生、共赢是未来竞争的根基。</div>
        <div class="desc2">我们以绝对领先的产品质量和技术水准为基石,大力发展合作伙伴生态链,与合作伙伴一起,共同向客户提供优质的服务。</div>
      </div>

      <div class="youshis">
        <div class="youshi">技术团队优势</div>
        <div class="youshi">产品优势</div>
        <div class="youshi">区域化服务</div>
      </div>

      <ul class="youshi-desc description">
        <li>版本多,既可以卖产品又可以卖服务。</li>
        <li>单机版: 客户范围广,适合中小店铺,一次付费,终身使用,免费升级,安全稳定,操作简单,无需联网。</li>
        <li>在线BS云版: 无需安装,只需一根网线,维护方便,支持微信/手机端/移动pos端。</li>
        <li>行业细分版: 美发店版、汽车美容版、可视卡版、茶楼酒店版、游乐园版。</li>
      </ul>

      <div class="fuwutixi">
        <div class="title">服务体系</div>
        <div class="content">
          <div class="fuwu-item" v-for="fuwu in fuwus" :key="fuwu.id">
            <div class="icon-wrapper">
              <i :class="['iconfont', fuwu.icon]"></i>
            </div>
            <div class="header">{{fuwu.header}}</div>
            <div class="description">{{fuwu.desc}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="fuwuchengnuo">
      <div class="header">服务承诺</div>
      <div class="content">
        <div class="chengnuo-item" v-for="chengnuo in chengnuos" :key="chengnuo.id">
          {{chengnuo.label}}
        </div>
      </div>

      <div class="image"></div>
    </div>


    <div class="hezuoliucheng">
      <div class="header">合作流程</div>
      <div class="content">
        <div class="chengnuo-item" v-for="liucheng in liuchengs" :key="liucheng.id">
          {{liucheng.label}}
        </div>
      </div>

      <div class="image">
        <div class="header">
          <el-button>申请成为代理</el-button>
        </div>
        <div class="content">
          <input type="text" v-model="daili.name" placeholder="您的姓名">
          <input type="text" v-model="daili.phone" placeholder="您的电话">
          <input type="text" v-model="daili.email" placeholder="您的邮箱">
          <input type="text" v-model="daili.companyName" placeholder="公司名称">
          <input type="text" v-model="daili.address" placeholder="您的地址">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Banner from '@/components/Banner'

export default {
  name: 'Qudaodaili',
  components: {
    banner: Banner
  },
  data() {
    return {
      banner: require('../assets/images/qudaodaili/banner.jpg'),
      fuwus: [
        {
          id: 0,
          icon: 'icon-tel',
          header: '电话、邮件、MSN、QQ支持',
          desc: `通过电话、邮件、MSN、QQ等通讯工具实现远程即时通讯，
          在第一时间解答、解决客户使用智能软件管理系统过程中遇到的各种技术问题。`
        },
        {
          id: 1,
          icon: 'icon-yuanchengxiezhu',
          header: '远程协助操作支持',
          desc: `经过客户许可后，通过远程协助操控用户电脑，进行"手把手"式的在线技术支持，
          实现比上门更及时、更方便、更低成本的远程协助服务。`
        },
        {
          id: 2,
          icon: 'icon-shangmenfuwu',
          header: '上门支持(收费)',
          desc: `根据客户的具体需要，安排技术工程师上门服务，面对面进行系统安装、调试、培训、设置、释疑。`
        }
      ],
      chengnuos: [
        {
          id: 0,
          label: '5*8小时，30分钟快速响应。'
        },
        {
          id: 1,
          label: '简单问题4小时内提供完整解决方案。'
        },
        {
          id: 2,
          label: '复杂问题48小时内提供完整解决方案。'
        },
        {
          id: 3,
          label: '终生免费升级服务。'
        },
        {
          id: 4,
          label: '免费提供数据导入技术支持，包括从其他软件导入数据。'
        },
        {
          id: 5,
          label: '免费提供数据备份恢复服务。'
        },
        {
          id: 6,
          label: '免费提供重新安装配置腾宣威系列软件的服务。'
        },
        {
          id: 7,
          label: '免费提供涉及腾宣威系列软件、硬件、服务器等技术指导。'
        },
        {
          id: 8,
          label: '免费提供涉及腾宣威系列软件的营销、管理策略指导。'
        },
        {
          id: 9,
          label: '接受客户上门咨询、培训、学习、观摩(需提前电话预约)。'
        }
      ],
      liuchengs: [
        {
          id: 0,
          label: '电话咨询或网站了解腾宣威经营产品及服务模式'
        },
        {
          id: 1,
          label: '与渠道经理洽谈代理合作模式，签署协议，支付代理预存金'
        },
        {
          id: 2,
          label: '公司提供产品相关文档以及产品销售技巧培训文档'
        },
        {
          id: 3,
          label: '代理商派遣业务精英至总部学习'
        },
        {
          id: 4,
          label: '代理商在其区域内开展销售产品'
        }
      ],
      daili: {
        name: '',
        phone: '',
        email: '',
        companyName: '',
        address: ''
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@import '../assets/scss/mixins';

@media (max-width: 600px) {
  .qudaodaili {
    margin: 0 10px;
    .xuanze {
      .youshis {
        flex-direction: column;
        .youshi {
          width: 100%;
        }
      }

      .fuwutixi {
        min-height: 600px;

        .content {
          flex-direction: column;
          .fuwu-item {
            @include cardHover;
            padding: 20px;
            i {
              color: white;
            }
            &:not(:first-child) {
              margin-top: 20px;
            }
          }
        }
      }
    }

    .fuwuchengnuo {
      .image {
        height: 300px;
      }
    }

    .hezuoliucheng {
      .image {
        height: 400px;
        padding: 10px 0;
        .content {
          margin-top: 10px;
          input {
            height: 20px;
            line-height: 20px;
            width: 80%;
            padding: 10px;
          }
        }
      }
    }
  }
}

@media (min-width: 600px) {
  .qudaodaili {
    .xuanze {
      .youshis {
        margin: 0 15%;

        .youshi {
          &:not(:first-child) {
            margin-left: 15%;
          }
        }
      }

      .youshi-desc {
        margin: 0 15%;
      }

      .fuwutixi {
        height: 600px;
        color: $whiteText;
        padding: 100px 0 0 0;
        background-image: url(../assets/images/qudaodaili/fuwutixi.png);

        .fuwu-item {
          padding: 0 40px;
          &:not(:first-child) {
            margin-left: 20px;
          }

          .header,
          .description {
            color: $whiteText;
          }
        }
      }
    }

    .fuwuchengnuo {
      .image {
        height: 600px;
      }
    }

    .hezuoliucheng {
      .image {
        height: 600px;
        padding-top: 50px;
        .content {
          margin-top: 50px;
          input {
            height: 40px;
            line-height: 40px;
            width: 40%;
            font-size: 1.5rem;
            padding: 10px;
          }
        }
      }
    }
  }
}

.qudaodaili {
  .xuanze {
    margin-top: 50px;

    .description {
      margin-top: 30px;
      .desc2 {
        margin-top: 10px;
      }
    }

    .youshis {
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      .youshi {
        flex: 1;
        height: 60px;
        line-height: 60px;
        border-bottom: 2px solid #ff820a;
      }
    }

    .youshi-desc {
      margin-top: 30px;
      text-align: left;
      @include textHover;
      li {
        margin-top: 5px;
      }
    }

    .fuwutixi {
      margin-top: 50px;

      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;

      .title {
        font-size: 2rem;
      }

      .content {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        .fuwu-item {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          min-height: 420px;


          .icon-wrapper {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background-color: #c7756a;
            display: flex;
            justify-content: center;
            align-items: center;
            i {
              font-size: 5rem;
            }
          }
          .header {
            font-size: 1.3rem;
            margin-top: 20px;
            
          }
          .description {
            margin-top: 20px;
            
          }
        }
      }
    }
  }

  .fuwuchengnuo {
    margin-top: 50px;

    .content {
      margin-top: 50px;
      .chengnuo-item {
        @include textHover;

        &:not(:first-child) {
          margin-top: 20px;
        }
      }
    }

    .image {
      margin-top: 50px;

      background-image: url(../assets/images/qudaodaili/fuwuchengnuo.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }

  .hezuoliucheng {
    margin-top: 50px;

    .content {
      margin-top: 50px;
      .chengnuo-item {
        @include textHover;
        &:not(:first-child) {
          margin-top: 20px;
        }
      }
    }

    .image {
      color: white;
      margin-top: 50px;
      background-image: url(../assets/images/qudaodaili/chengweidaili.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;

      .header {
        button {
          font-size: 2rem;
        }
      }

      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        input {
          color: white;
          display: block;
          margin-top: 20px;
          background-color: transparent;
        }
      }
    }
  }
}
</style>
