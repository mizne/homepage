<template>
  <div class="index">
    
    <carousel :images="images"></carousel>
    
    <company-idea :class="{'animated fadeInUp': ideaAnimated}"></company-idea>

    <service :class="{'animated fadeInUp': serviceAnimated}"></service>

    <about :class="{'animated fadeInUp': aboutAnimated}"></about>

    <advantage :class="{'animated fadeInUp': advantageAnimated}"></advantage> 
  </div>
</template>

<script>
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
      ideaAnimated: true,
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

      if (yOffset > 1000) {
        this.aboutAnimated = true
      }

      if (yOffset > 1800) {
        this.advantageAnimated = true
      }

    }
  },
  created() {
    this._wheelListener = this.wheelListener.bind(this)
    addWheelListener(window, this._wheelListener)
    
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
