<template>
  <div class="hire">
    <img src="../assets/images/hire.jpg">
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
      msg: 'Hire.vue'
    }
  }
}
</script>
<style scoped lang="scss">
.hire {}
</style>
