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
          title: '南京金二村酒店商城',
          desc: `部署新零售产品，酒店可以改变传统房间摆放东西的模式，客人入住可以扫码线上购物，方便管理，
          丰富商品种类，减少不必要库存，后期也可以代卖周边的商家产品。`,
          date: '2017年09-13',
          image: require('../assets/images/kehuanli/anli-0.png')
        },
        {
          id: 1,
          title: '雪花冰餐饮商家营销',
          desc: `通过线上和线下融合，通过促销活动引流和二次精准营销，提升营收和利润`,
          date: '2017年09-11',
          image: require('../assets/images/kehuanli/anli-1.png')
        },
        {
          id: 2,
          title: '新航道英语培训',
          desc: `通过线上和线下融合，通过互动营销进行引流和二次精准营销，提升营收和利润`,
          date: '2017年09-09',
          image: require('../assets/images/kehuanli/anli-2.png')
        },
        {
          id: 3,
          title: '婚庆现场(微信互动)',
          desc: `通过微信互动，切合电子请帖加上二维码，提前进行红包节的互动，亲朋好友也可以通过红包节客户端进行红包充值等，
          现场通过摇一摇及3D抽奖制造气氛。适用于公司聚餐、会展、公司年会、直销公司活动、婚庆礼仪等。`,
          date: '2017年09-07',
          image: require('../assets/images/kehuanli/anli-3.png')
        },
        {
          id: 4,
          title: '江苏中协智能全国广播软件系统开发',
          desc: `我们采用"多对一顾问式面对面服务模式"，及时有效地为客户提供全方位产品和个性化系统解决方案，将传统CS架构改为
          BS架构，实现PC端-移动端一体化，可以联网远程操控广播设备，使中协智能在全国广播系统的销售中遥遥领先。`,
          date: '2017年09-06',
          image: require('../assets/images/kehuanli/anli-4.png')
        },
        {
          id: 5,
          title: '上海联展有限公司',
          desc: `我们为上海联展提供最省心的管理平台，主要包括业务流程管理系统BPM、观众数据管理中心系统VDM、展位
          销售管理系统BMM。协同工作平台，主要包括社会化网站系统SWS，微信增强开发平台Wechat，贸易配对服务系统TMS。
          安全有效的数据存储系统，主要包括行业级中央数据库DMC、活动营销效果监控系统STS。提供院校实训室的空间规划，设计
          和施工服务，各类实训室器材的整体采购和制作。`,
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
