<template>
  <div class="index">
    
    <carousel :images="images"></carousel>
    
    <transition enter-active-class="animated fadeInUp">
      <company-idea v-show="ideaAnimated"></company-idea>
    </transition>

    <transition enter-active-class="animated fadeInUp">
      <service v-show="serviceAnimated"></service>
    </transition>

    <transition enter-active-class="animated fadeInUp">
      <about v-show="aboutAnimated"></about>
    </transition>

    <transition enter-active-class="animated fadeInUp">
      <advantage v-show="advantageAnimated"></advantage>
    </transition>
    
  </div>
</template>

<script>
import Vue from 'vue'

import Carousel from '@/components/IndexCarousel'
import CompanyIdea from '@/components/IndexCompanyIdea'
import Service from '@/components/IndexService'
import About from '@/components/IndexAbout'
import Advantage from '@/components/IndexAdvantage'

import '@/util/wheel-event-polyfill'

export default {
  name: 'Index',
  components: {
    'carousel': Carousel,
    'company-idea': CompanyIdea,
    'service': Service,
    'about': About,
    'advantage': Advantage
  },
  data () {
    return {
      msg: 'Index.vue',
      ideaAnimated: false,
      serviceAnimated: false,
      aboutAnimated: false,
      advantageAnimated: false,
      images: [{
        header: '全球首屈一指的CRM系统',
        content: '以SaaS服务模式提供，完全免费的定制系统',
        url: require('../assets/images/banner-ld.jpg')
      }, {
        header: '全球首屈一指的CRM系统',
        content: '让我们一起改变移动电商',
        url: require('../assets/images/1-bg.jpg')
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
.index {
  
}
</style>
