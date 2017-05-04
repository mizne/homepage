<template>
  <div class="about">
    <div class="carousel-area">
    </div>

    <about></about>
  </div>
</template>
<script>
import About from '@/components/IndexAbout'

export default {
  name: 'About',
  components: {
  	'about': About
  },
  data() {
    return {
      msg: 'About.vue'
    }
  }
}
</script>
<style scoped lang="scss">
.about {
  .carousel-area {
    width: 100%;
    height: 450px;
    cursor: default;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    overflow: hidden;
    display: block;
    outline: none;
    margin: 0px auto;
    position: relative;
    z-index: 1;
    background-image: url(http://11703036.s61i.faiusr.com/2/AD0I-KXKBRACGAAg9vPLwAUotIrmqwMwgA84wgM.jpg)
  }

  .about {
  	margin: 40px auto;
  }
}
</style>
