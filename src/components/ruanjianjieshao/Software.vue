<template>
  <div class="ruanjianjieshao-software">
    <div class="header">
      {{software.title}}
    </div>
    <div class="description">
      {{software.description}}
    </div>
    <div class="image-wrapper" :style="{'width': software.width}">
      <img :src="software.image" alt="">
    </div>
    <div class="know-more">
      <el-button @click.native="knowMore()">了解更多</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Software',
  props: {
    software: {
      type: Object
    }
  },
  methods: {
    knowMore() {
      this.$router.push({
        name: this.software.route
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/mixins';

@media (max-width: 600px) {
}

@media (min-width: 600px) {
}
.ruanjianjieshao-software {
  @include cardHover;
  box-sizing: border-box;
  padding: 20px;
  margin-top: 50px;

  &:hover .description {
    color: map-get($colors, primary);
  }

  .image-wrapper {
    margin: 0 auto;
    margin-top: 20px;
  }

  .know-more {
    margin-top: 20px;
    .el-button {
      background-color: map-get($colors, primary);
      color: $whiteText;
    }
  }
}
</style>
