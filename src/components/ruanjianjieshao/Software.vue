<template>
  <div class="ruanjianjieshao-software">
    <div class="header">
      {{software.title}}
    </div>
    <div class="description">
      {{software.description}}
    </div>
    <div class="image" :style="{'background-image': 'url(' + software.image + ')'}">

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
  .ruanjianjieshao-software {
    margin-top: 50px;
    max-height: 650px;

    .description {
      padding: 0 20px;
    }
    .image {
      height: 200px;
    }
  }
}

@media (min-width: 600px) {
  .ruanjianjieshao-software {
    margin-top: 50px;
    .image {
      height: 400px;
    }
  }
}
.ruanjianjieshao-software {
  @include cardHover;
  box-sizing: border-box;
  padding: 20px;

  &:hover .description {
    color: map-get($colors, primary);
  }

  .description {
    margin-top: 20px;
  }

  .image {
    margin-top: 20px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60% 60%;
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
