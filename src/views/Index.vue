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
        header: '免费开源的移动商城网店系统',
        content: '免费开源，开源基于MVC框架开发，组件式web系统，灵活的模板标签、快速安装数据同步，欢迎您的体验！',
        url: require('../assets/images/banner-ld.jpg')
      }, {
        header: '让我们一起改变移动电商',
        content: '国内免费开源的移动商城系统',
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
