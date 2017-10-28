<template>
  <div class="banner" :style="{'background-image': 'url('+image+')'}">
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    image: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
@media (max-width: 600px) {
  .banner {
    height: 300px;
  }
}

@media (min-width: 600px) {
  .banner {
    height: 800px;
  }
}
.banner {
  width: 100%;
  margin: 0 auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
