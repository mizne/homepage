<template>
  <div class="ruanjianjieshao-softwares">
    <software v-for="software in softwares" :key="software.id" :software="software"></software>
  </div>
</template>

<script>
import Software from '@/components/ruanjianjieshao/Software'

export default {
  name: 'Softwares',
  components: {
    software: Software
  },
  data() {
    return {
      softwares: [
        {
          id: 0,
          title: '智慧会展',
          description:
            'i-rdesk智慧接待台，基于会展大数据和共享经济理念，为大中型会展场景中的参展商提供观众接待、' +
            '数据管理等多项智能服务，提供以精准营销服务、促进贸易配对、创造新商机为核心的智慧会展解决方案。',
          image: require('../../assets/images/ruanjianjieshao/zhihuihuizhan.png'),
          route: 'zhihuihuizhan'
        },
        {
          id: 1,
          title: '智慧商圈',
          description:
            '针对商贸城、购物街、本地商圈、大型MALL普遍入驻多业态商家的现状，【智慧商圈解决方案】既能整合平台上的各商家数据，又能为其中的独立商家/' +
            '商城提供独立系统，以单独管理收银、会员、精准营销等体系。最终在平台导航功能的指引下，实现将顾客有效引流至商家，沉淀高价值大数据。',
          image: require('../../assets/images/ruanjianjieshao/zhihuishangquan.png'),
          route: 'zhihuishangquan'
        },
        {
          id: 2,
          title: '智慧商家版',
          description:
            '针对商贸城、购物街、本地商圈、大型MALL普遍入驻多业态商家的现状，【智慧商圈解决方案】既能整合平台上的各商家数据，又能为其中的独立商家/' +
            '商城提供独立系统，以单独管理收银、会员、精准营销等体系。最终在平台导航功能的指引下，实现将顾客有效引流至商家，沉淀高价值大数据。',
          image: require('../../assets/images/ruanjianjieshao/zhihuishangquan.png'),
          route: 'shangjiaban'
        },
        {
          id: 3,
          title: '商家连锁版',
          description:
            '适合单店和多店连锁或者是注重客户互动营销的店铺。实现数据实时同步,客户数据一卡通。注重客户发展，拓客维客功能强大。',
          image: require('../../assets/images/ruanjianjieshao/liansuoban.png'),
          route: 'liansuoban'
        },
        {
          id: 4,
          title: '商家联盟',
          description:
            '适合于指定行业或者一定区域内运行联盟一卡通，亦或商家联盟，会员统一办卡、消费、积分。盈利模式多样化，可个性化定制。',
          image: require('../../assets/images/ruanjianjieshao/shangjialianmeng.png'),
          route: 'shangjialianmeng'
        },
        {
          id: 5,
          title: '教育培训',
          description: '适合于教育培训行业的简单的会员软件，实现会员办卡消费、打折、积分等。',
          image: require('../../assets/images/ruanjianjieshao/jiaoyupeixun.png'),
          route: 'jiaoyupeixun'
        },
        {
          id: 6,
          title: '酒店商城',
          description:
            '适合于酒店行业的简单的会员软件，实现会员办卡消费、打折、积分等。盈利模式多样化，可个性化定制。',
          image: require('../../assets/images/ruanjianjieshao/shangjialianmeng.png'),
          route: 'jiudianshangcheng'
        },
        {
          id: 7,
          title: '超市商城',
          description:
            '适合于超市行业的简单的会员软件，实现会员办卡消费、打折、积分等。盈利模式多样化，可个性化定制。',
          image: require('../../assets/images/ruanjianjieshao/shangjialianmeng.png'),
          route: 'chaoshishangcheng'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@media (max-width: 600px) {
  .ruanjianjieshao-software {
    width: 100%;
  }
}

@media (min-width: 600px) {
  .ruanjianjieshao-softwares {
    .ruanjianjieshao-software {
      width: 46%;

      &:nth-child(2n) {
        margin-left: 8%;
      }
    }
  }
}

.ruanjianjieshao-softwares {
  margin-top: 40px;
  display: flex;
  flex-flow: row wrap;
}
</style>
