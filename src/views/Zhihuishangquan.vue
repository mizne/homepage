<template>
  <div class="zhihuishangquan page">

    <banner :image="banner"></banner>
    <general :general="general"></general>
    <mubiaokequn></mubiaokequn>

    <div class="idea-container">
      <idea-item v-for="idea in ideas" :key="idea.id" :idea="idea"></idea-item>
    </div>

    <use-group></use-group>
    <chengzhaodaili :daili="daili"></chengzhaodaili>
  </div>
</template>

<script>
import Vue from 'vue'
import Banner from '@/components/Banner'
import General from '@/components/zhihuishangquan/General'
import Mubiaokequn from '@/components/zhihuishangquan/Mubiaokequn'
import Ideaitem from '@/components/zhihuishangquan/Ideaitem'
import Chengzhaodaili from '@/components/Chengzhaodaili'
import UseNowGroup from '@/components/UseNowGroup'

export default {
  name: 'Zhihuishangquan',
  components: {
    banner: Banner,
    general: General,
    mubiaokequn: Mubiaokequn,
    'idea-item': Ideaitem,
    'chengzhaodaili': Chengzhaodaili,
    'use-group': UseNowGroup
  },
  data() {
    return {
      banner: require('../assets/images/zhihuishangquan/banner.jpg'),
      general: {
        title: '基于小V宝商圈导航能力 开展引流和精准营销服务',
        description: `针对商贸城、购物街、本地商圈、大型MALL普遍入驻多业态商家的现状，
        【智慧商圈解决方案】既能整合平台上的各商家数据，又能为其中的独立商家/商城提供独立系统，
        以单独管理收银、会员、精准营销等体系。最终在平台导航功能的指引下，实现将顾客有效引流至商家，
        沉淀高价值大数据。`,
        image: require('../assets/images/zhihuishangquan/banner_small.png')
      },
      daili: {
        title: '腾宣威软件科技',
        desc1: '面向全国诚招代理',
        desc2: '期待您的加入',
        image: require('../assets/images/zhihuishangquan/chengzhaodaili.png')
      },
      ideas: [
        {
          id: 0,
          title: '智慧全景',
          description:
            `基于智慧商圈/商家服务平台,开发手机APP、小程序、公众号,与服务平台功能对接,
            实现数据共享,用户的手机连上商圈的WIFI,智能终端自动弹出整个商圈的微应用,
            并且根据用户位置和消费习惯推送个性化的商圈资讯,使用户、商家、商圈实现智慧化。`,
          image: require('../assets/images/zhihuishangquan/zhihuiqianjing.png')
        },
        {
          id: 1,
          title: '智点单',
          description:
            `小V宝e点单为商家提供线下转线上交易能力，并具有完善的微商城管理能力，支持店家进行各种促销活动，和商家系统无缝对接。`,
          image: require('../assets/images/zhihuishangquan/zhidiandan.png')
        },
        {
          id: 2,
          title: '慧支付',
          description: '小V宝e码付为商家提供线上统一支付入口，并提供支付返现、支付抽奖、关注公众号等各种能力。',
          image: require('../assets/images/zhihuishangquan/huizhifu.png')
        },
        {
          id: 3,
          title: '智联盟',
          description:
            `商家联盟是指某一区域通过组织运营商为了达到某种商业目的而组织起来的一个商业联盟体系。 
            在这个商家联盟体系之内，实现了会员资源共享、合作共赢为目的，达到会员刷卡消费一卡通， 
            走到哪儿，哪里就可以刷卡消费打折积分。`,
          image: require('../assets/images/zhihuishangquan/zhilianmeng.png')
        },
        {
          id: 4,
          title: '慧营销',
          description:
            `小V宝e代售为商家提供各种营销能力，通过物联网、互联网、云服务、大数据等技术为商家提供线上和线下的统一运营活动，
            通过门店引流及精准二次营销，满足商家运营需求。`,
          image: require('../assets/images/zhihuishangquan/huiyingxiao.png')
        },
        {
          id: 5,
          title: '智联网',
          description:
            `小V宝e联网为商圈、商家提供客户互联网接入能力，互动分享，为商圈、商家积累大数据，通过营销创造更多销售机会，
            在享受网上冲浪的同时用户可以针对商家进行实际查看等智慧服务。`,
          image: require('../assets/images/zhihuishangquan/zhilianwang.png')
        },
        {
          id: 6,
          title: '慧管理',
          description:
            `小V宝v管理为商圈、商家提供用户管理和连接能力，满足用户在商圈内各种消费和服务需求，
            让平台成为用户生活的一部分。智慧商圈平台的大数据整合分析系统能将顾客的消费行为进行有效的整合分析，
            让商圈运营者和商家了解顾客的人流情况、消费偏好、消费习惯、消费水平等顾客大数据，也能帮助商圈、
            商家在统一平台内对自身的经营状况有效把控(顾客流动状况、销售时报、收入报表、会员活跃度、热门商品等)。`,
          image: require('../assets/images/zhihuishangquan/huiguanli.png')
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
</style>
