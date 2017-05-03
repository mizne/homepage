<template>
  <div class="index">
    
    <carousel :images="images"></carousel>
    
    <company-idea></company-idea>

    <service></service>

    <about></about>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import CompanyIdea from '@/components/CompanyIdea'
import Service from '@/components/Service'
import About from '@/components/About'

export default {
  name: 'hello',
  components: {
    'carousel': Carousel,
    'company-idea': CompanyIdea,
    'service': Service,
    'about': About
  },
  data () {
    return {
      msg: 'Index.vue',
      images: [{
        url: 'http://11703036.s61i.faiusr.com/2/AD0I-KXKBRACGAAgi43LwAUo_PGZpgcwgA84igU.jpg'
      }, {
        url: 'http://11703036.s61i.faiusr.com/2/AD0I-KXKBRACGAAgybzbwAUo0da-KDCADziKBQ.jpg'
      }]
    }
  }
}
</script>

<style scoped lang="scss">
.index {
  
}
</style>
