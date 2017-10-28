<template>
  <div class="index page">
    <carousel :images="images"></carousel>
    <software-summary></software-summary>
    <more-function></more-function>
    <more-reasons></more-reasons>
    <more-company></more-company>
  </div>
</template>

<script>
import Vue from 'vue'

import Carousel from '@/components/index/IndexCarousel'
import SoftwareSummary from '@/components/index/IndexSoftwareSummary'
import MoreFunction from '@/components/index/IndexMoreFunction'
import MoreReasons from '@/components/index/IndexMoreReasons'
import MoreCompany from '@/components/index/IndexMoreCompany'

import '@/util/wheel-event-polyfill'

export default {
  name: 'Index',
  components: {
    'carousel': Carousel,
    'software-summary': SoftwareSummary,
    'more-function': MoreFunction,
    'more-reasons': MoreReasons,
    'more-company': MoreCompany
  },
  data () {
    return {
      msg: 'Index.vue',
      ideaAnimated: false,
      serviceAnimated: false,
      aboutAnimated: false,
      advantageAnimated: false,
      images: [{
        header: '新零售全渠道客户营销CRM解决方案',
        content: '帮助商家有效实现客户引流、客户精准营销和客户管理',
        url: require('../assets/images/shouye/banner-1.jpg')
      }, {
        header: '新零售全渠道客户营销CRM行业标杆',
        content: '让我们一起改变移动电商',
        url: require('../assets/images/shouye/banner-2.jpg')
      }]
    }
  },
  methods: {
    wheelListener() {
      const yOffset = window.pageYOffset
      if (yOffset > 50) {
        this.serviceAnimated = true
      }

      if (yOffset > 1540) {
        this.aboutAnimated = true
      }

      if (yOffset > 2240) {
        this.advantageAnimated = true
      }

    }
  },
  created() {
    this._wheelListener = this.wheelListener.bind(this)
    addWheelListener(window, this._wheelListener)
    Vue.nextTick(() => {
      this.ideaAnimated = true
    })
  },
  beforeDestroyed() {
    removeWheelListener(window, this._wheelListener)
  }
}
</script>

<style scoped lang="scss">
</style>
