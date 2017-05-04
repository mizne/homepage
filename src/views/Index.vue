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
  name: 'hello',
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
        url: 'http://11703036.s61i.faiusr.com/2/AD0I-KXKBRACGAAgi43LwAUo_PGZpgcwgA84igU.jpg'
      }, {
        url: 'http://11703036.s61i.faiusr.com/2/AD0I-KXKBRACGAAgybzbwAUo0da-KDCADziKBQ.jpg'
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
