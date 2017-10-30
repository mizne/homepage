<template>
  <div class="kehuanli page">

    <banner :image="banner"></banner>

    <div class="chenggonganli">
      <div class="header">成功案例</div>
      <div class="content">
        <div class="anli-item" v-for="anli in anlis" :key="anli.id">
          <div class="image" :style="{'background-image': 'url('+anli.image+')'}"></div>

          <div class="description">
            <div class="title">{{anli.title}}</div>
            <div class="desc">{{anli.desc}}</div>
            <div class="action">
              <i class="iconfont icon-clock"></i>
              <span class="time">{{anli.date}}</span>
              <span class="to-detail">查看详情</span>
              <i class="iconfont icon-arrowright"></i>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="jiaruwomen">
      <el-button>联系我们</el-button>
      <div class="image">
        <img src="../assets/images/kehuanli/chengzhaodaili.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Banner from '@/components/Banner'
import Chengzhaodaili from '@/components/Chengzhaodaili'

export default {
  name: 'Kehuanli',
  components: {
    banner: Banner,
    chengzhaodaili: Chengzhaodaili
  },
  data() {
    return {
      banner: require('../assets/images/kehuanli/banner.jpg'),
      anlis: [
        {
          id: 0,
          title: '成都世纪康美美容机构中心',
          desc: `世纪康美美容店通过腾宣威软件更有效的管理客户，打破传统的人工手记工作，节约一个人力成本，
          通过会员营销，有效地提高了美容店的营业额，并深度的绑定了客户与商家，增强客户粘性`,
          date: '2017年09-13',
          image: require('../assets/images/kehuanli/anli-0.png')
        },
        {
          id: 1,
          title: '广州伟麟珠宝有限公司',
          desc: `腾宣威客户管理软件还可以实现商品管理、微信营销、会员分销管理系统等方面的管理`,
          date: '2017年09-11',
          image: require('../assets/images/kehuanli/anli-1.png')
        },
        {
          id: 2,
          title: '全球锁王(北京)科技有限公司',
          desc: `全球锁王(北京)科技有限公司，是一家集科研、销售、服务于一体的综合型企业。
          公司旗下现有全国独家专利--盗贼都无法打开的安全锁具产品，致力于打造全球新型锁具的翘楚企业。
          目前全面开拓中国市场，筹建各地分公司及代理商，现多部门人员储备，欢迎有识之士，共建未来祥业`,
          date: '2017年09-09',
          image: require('../assets/images/kehuanli/anli-2.png')
        },
        {
          id: 3,
          title: '河南信阳学院天弈租车行',
          desc: `天弈租车行位于河南信阳学院，主要业务是为学生提供电动车租赁服务，目前已经完全实现会员制管理，
          已经拥有上千固定的学生用户。目前有三个租赁点，拥有数百辆电动车，已经成为学生用户不可缺少的交通工具提供点。`,
          date: '2017年09-07',
          image: require('../assets/images/kehuanli/anli-3.png')
        },
        {
          id: 4,
          title: '四川汇中会议服务有限公司',
          desc: `四川汇中会议服务有限公司成立于2005年，主要面向全国市场，致力于解决客户的企业形象、商务信息、旅游信息、
          会议服务、展厅展示服务等。而此次合作，也主要针对旗下的圈圈行旅游，主要为国内国外旅游服务，总部位于成都，并在世界
          各地招募拥有本地生活经理的名校海归。`,
          date: '2017年09-06',
          image: require('../assets/images/kehuanli/anli-4.png')
        },
        {
          id: 5,
          title: '北京泰德宜林健康管理有限公司',
          desc: `北京泰德宜林健康管理有限公司成立于2015年07年14日，主要经营范围为健康管理(须经审批的诊疗活动除外);
          健康咨询(须经审批的诊疗活动除外);是中国领先的高端私人健康医疗服务机构，以国际化的健康医疗服务为理念，定制式
          医疗服务为特色。为客户提供电子健康档案、个性化。`,
          date: '2017年09-06',
          image: require('../assets/images/kehuanli/anli-5.png')
        },
        {
          id: 6,
          title: '梵森商贸有限公司',
          desc: `秦皇岛梵森商贸有限公司是一家经营家具、办公用品、礼品、工艺品、装饰材料、文化用品、化工产品、电器、
          服务、鞋帽、洗涤用品的批发、零售公司。想利用客户系统来实现客户资料、消费积分、多操作人员管理的一卡通消费。`,
          date: '2017年09-06',
          image: require('../assets/images/kehuanli/anli-6.png')
        },
        {
          id: 7,
          title: '青岛福临家政有限公司',
          desc: `青岛福临家政有限公司是一家提供家庭保洁、母婴护理、家庭教育、膳食等多方面家政公司，想利用客户管理系统进行
          一卡通管理，多元化消费，实现数据线上、线下同步管理。`,
          date: '2017年09-05',
          image: require('../assets/images/kehuanli/anli-7.png')
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
  .kehuanli {

    .chenggonganli {
      .content {
        .anli-item {
          .image {
            width: 100%;
            height: 300px;
          }
          .description {
            width: 100%;
          }
        }
      }
    }
  }
}

@media (min-width: 600px) {
  .kehuanli {
    margin: 0 5rem;

    .chenggonganli {
      .content {
        .anli-item {
          .image {
            width: 25%;
            height: 300px;
          }
          .description {
            width: 65%;
            padding: 0 50px;
          }
        }
      }
    }
  }
}

.kehuanli {
  .chenggonganli {
    margin-top: 50px;

    .content {
      margin-top: 50px;

      .anli-item {
        min-height: 300px;
        margin-top: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row wrap;
        @include cardHover;
        padding: 20px;

        .image {
          background-position: center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }

        .description {
          margin: 0;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          text-align: left;
          .title {
            width: 100%;
            font-size: 2rem;
            margin-top: 20px;
            line-height: 40px;
          }
          .desc {
            margin-top: 30px;
            font-size: 1.2rem;
            line-height: 30px;
          }
          .action {
            margin-top: 80px;
            cursor: pointer;
            .to-detail {
              margin-left: 50px;
            }

            .icon-arrowright {
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  }

  .jiaruwomen {
    margin-top: 50px;

    .el-button {
      font-size: 2rem;
    }

    .image {
      margin-top: 50px;
    }
  }
}
</style>
