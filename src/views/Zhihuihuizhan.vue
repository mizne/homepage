<template>
  <div class="zhuihuihuizhan page">

    <banner :image="banner"></banner>
    <general :general="general"></general>

    <div class="idea-container">
      <idea-item v-for="idea in ideas1" :key="idea.id" :idea="idea"></idea-item>
    </div>

    <div class="total1">
      <div class="zhipeidui total1-item" v-for="item in total1" :key="item.id">
        <div class="header">{{item.title}}</div>
        <div class="description">{{item.description}}</div>
      </div>
    </div>

    <div class="idea-container">
      <idea-item v-for="idea in ideas2" :key="idea.id" :idea="idea"></idea-item>
    </div>

    <div class="total2">
      <div class="header">功能多样/丰富展会内容</div>
      <div class="content">
        <div class="content-item" v-for="item in items" :key="item.id">
          <div class="image" :style="{'background-image': 'url('+item.image+')'}"></div>
          <div class="text" :style="{'color': item.color}">{{item.text}}</div>
        </div>
      </div>
    </div>

    <chengzhaodaili :daili="daili"></chengzhaodaili>
  </div>
</template>

<script>
import Vue from 'vue'

import Banner from '@/components/Banner'
import General from '@/components/zhihuishangquan/General'
import Ideaitem from '@/components/zhihuishangquan/Ideaitem'
import Chengzhaodaili from '@/components/Chengzhaodaili'
import UseNowGroup from '@/components/UseNowGroup'

export default {
  name: 'Zhuihuihuizhan',
  components: {
    banner: Banner,
    general: General,
    'idea-item': Ideaitem,
    chengzhaodaili: Chengzhaodaili,
    'use-group': UseNowGroup
  },
  data() {
    return {
      banner: require('../assets/images/zhihuihuizhan/banner.jpg'),
      general: {
        title: '智慧展台 i-rdesk',
        description:
          `i-rdesk智慧接待台，基于会展大数据和共享经济理念，为大中型会展场景中的参展商提供观众接待、
          数据管理等多项智能服务，提供以精准营销服务、促进贸易配对、创造新商机为核心的智慧会展解决方案。`,
        image: require('../assets/images/zhihuihuizhan/banner_small.png')
      },
      daili: {
        title: '腾宣威软件科技',
        desc1: '面向全国诚招代理',
        desc2: '期待您的加入',
        image: require('../assets/images/zhihuishangquan/chengzhaodaili.png')
      },
      ideas1: [
        {
          id: 0,
          title: '智管理',
          description:
            `通过i-rdesk前端透明窗体快速扫描观众名片，识别胸卡、微信二维码等证件信息，
            进行登记，方便展商快速采集观众信息。`,
          image: require('../assets/images/zhihuihuizhan/zhiguanli.png')
        },
        {
          id: 1,
          title: '慧营销',
          description:
            `内置多款展台互动游戏应用，通过关联现场屏幕显示，试用在展会期间，通过线上线下的互动分享，
            以增加展台曝光，提升观众对展台的关注度。`,
          image: require('../assets/images/zhihuihuizhan/huiyingxiao.png')
        },
        {
          id: 2,
          title: '智数据',
          description:
            '提供到访展台的客户数据管理、分析、追踪等功能，提高展会数据的使用效率。链接云端处理能力，及时存储共享贸易信息。',
          image: require('../assets/images/zhihuihuizhan/zhishuju.png')
        },
        {
          id: 3,
          title: '慧联网',
          description: '多台i-rdesk联网使用，可实现展会主办、展商、观众之间的协同工作，有效组织现场的大型活动和信息互通共享。',
          image: require('../assets/images/zhihuihuizhan/huilianwang.png')
        }
      ],
      total1: [
        {
          id: 0,
          title: '智配对',
          description: '针对数据库中的有效客户提供信息自动匹配、自动推送功能,提高贸易效率。'
        },
        {
          id: 1,
          title: '慧更多',
          description:
            `支持微信小程序的扩展功能，不限用户数量和连接数。支持展商在展会期间链接到场馆、服务商、主办方、观众的多项智能化应用。`
        }
      ],
      ideas2: [
        {
          id: 0,
          title: '展位/展品',
          description:
            `延长展商的参展传播时间，最大化参展效果:展前线上宣传，展中约见客户，展后持续跟进;
            提高展商与观众的沟通效率，加强互动;展位和展品可按分类查看，支持智能检索，
            还可预约、咨询、评论、下载资料等;展商页由展商自主在线制作，展品及资料等内容可任意添加，无数量限制。`,
          image: require('../assets/images/zhihuihuizhan/zhanweizhanpin.png')
        },
        {
          id: 1,
          title: '展会社交',
          description: '交换电子名片，可快速结交同行和生意伙伴;展商相关销售人员可以通过电子名片快速打开圈子，扩展人脉。',
          image: require('../assets/images/zhihuihuizhan/zhanhuishejiao.png')
        },
        {
          id: 2,
          title: '互动话题/互动圈',
          description:
            '展商发起话题、发布互动圈，多种宣传推广方式提升知晓率;主办方可收集到观众最喜欢的话题/最热门的讨论动态等，挖掘洞察。',
          image: require('../assets/images/zhihuihuizhan/hudonghuatihudongquan.png')
        },
        {
          id: 3,
          title: '数据报告',
          description: '展会大数据自动收集，自动生成直观数据报告便于主办方与展商获取真实活动反馈。',
          image: require('../assets/images/zhihuihuizhan/shujubaogao.png')
        }
      ],
      items: [
        {
          id: 0,
          image: require('../assets/images/zhihuihuizhan/wenjuan.png'),
          text: '问卷',
          color: '#E77769'
        },
        {
          id: 1,
          image: require('../assets/images/zhihuihuizhan/ziliao.png'),
          text: '资料',
          color: '#EE97B7'
        },
        {
          id: 2,
          image: require('../assets/images/zhihuihuizhan/lianjieziyouwangzhan.png'),
          text: '链接自有网站',
          color: '#EFBC69'
        },
        {
          id: 3,
          image: require('../assets/images/zhihuihuizhan/wenzhangfabu.png'),
          text: '文章发布',
          color: '#37BAE7'
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
  .zhuihuihuizhan {
    .total1 {
      flex-direction: column;
      .total1-item {
        margin-top: 20px;
      }
      .description {
        padding: 0 20px;
      }
    }
    .total2 {
      .content {
        flex-direction: column;
      }
    }
  }
}

@media (min-width: 600px) {
  .zhuihuihuizhan {
    .total1 {
      .total1-item:first-child {
        border-right: 1px solid #4c4c4c;
      }
      .description {
        padding: 0 100px;
      }
    }
    .total2 {
      .content {
        margin-top: 50px;
      }
    }
  }
}

.zhuihuihuizhan {
  .total1 {
    margin-top: 50px;
    display: flex;

    .total1-item {
      flex: 1;
    }

    .description {
      margin-top: 20px;
      line-height: 25px;
      text-align: left;
      @include textHover;
    }
  }

  .total2 {
    margin-top: 50px;
    .content {
      display: flex;
      .content-item {
        flex: 1;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        @include cardHover;
        padding: 20px;
        &:not(:first-child) {
          margin-left: 50px;
        }

        .image {
          width: 100px;
          height: 100px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        .text {
          font-size: 1.5rem;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
