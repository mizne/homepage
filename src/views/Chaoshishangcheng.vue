<template>
  <div class="jiudianshangcheng page">
    <banner :image="banner"></banner>

  </div>
</template>

<script>
import Vue from 'vue'
import Banner from '@/components/Banner'

export default {
  name: 'Chaoshishangcheng',
  components: {
    banner: Banner
  },
  data() {
    return {
      banner: require('../assets/images/jiudianshangcheng/banner.png'),

    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/mixins';

@media (max-width: 600px) {
  .chaoshishangcheng {
  }
}

@media (min-width: 600px) {
  .chaoshishangcheng {
  }
}

.chaoshishangcheng {

}
</style>
