<template>
  <div class="ruanjianjieshao page">

    <banner :image="banner"></banner>
    <general></general>
    <softwares></softwares>
    <funcs></funcs>

    <chengzhaodaili :daili="daili"></chengzhaodaili>
  </div>
</template>

<script>
import Vue from 'vue'

import Banner from '@/components/Banner'
import General from '@/components/ruanjianjieshao/General'
import Softwares from '@/components/ruanjianjieshao/Softwares'
import Functions from '@/components/ruanjianjieshao/Functions'
import Chengzhaodaili from '@/components/Chengzhaodaili'

export default {
  name: 'Ruanjianjieshao',
  components: {
    'banner': Banner,
    'general': General,
    'softwares': Softwares,
    'funcs': Functions,
    'chengzhaodaili': Chengzhaodaili
  },
  data() {
    return {
      banner: require('../assets/images/ruanjianjieshao/banner-1.gif'),
      daili: {
        title: '诚招合作代理',
        desc1: '腾宣威软件科技期待您的加入',
        desc2: '具体事宜可联系 025-86662644',
        image: require('../assets/images/ruanjianjieshao/chengzhaodaili.png')
      }
    }
  },
}
</script>

<style scoped lang="scss">
</style>
