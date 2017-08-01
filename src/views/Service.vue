<template>
  <div class="service">
    <div class="carousel-area">
    </div>

	<service></service>
  </div>
</template>
<script>
import Service from '@/components/IndexService'

export default {
  name: 'Service',
  components: {
  	'service': Service
  },
  data() {
    return {
      msg: 'Service.vue'
    }
  }
}
</script>
<style scoped lang="scss">
@media (min-width: 600px) {
  .service {
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
    background-image: url(../assets/images/AD0I-KXKBRACGAAgsOvLwAUo0JOByQcwgA84wgM.jpg)

  }
}
}

@media (max-width: 600px) {
  .service {
  .carousel-area {
    width: 100%;
    height: 200px;
    cursor: default;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    overflow: hidden;
    display: block;
    outline: none;
    margin: 0px auto;
    position: relative;
    z-index: 1;
    background-image: url(../assets/images/AD0I-KXKBRACGAAgsOvLwAUo0JOByQcwgA84wgM.jpg)

  }
}
}
</style>
