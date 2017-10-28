<template>
  <div class="zhihuishangquan-general">
    <div class="title">
      <div class="shangquan item" @click="routeTo('zhihuishangquan')" :class="{'active': selectedTab === 'zhihuishangquan'}">
        智慧商圈
      </div>
      <div class="huizhan item" @click="routeTo('zhihuihuizhan')" :class="{'active': selectedTab === 'zhihuihuizhan'}">
        智慧会展
      </div>
    </div>

    <div class="content">
      <div class="content-header">
        {{general.title}}
      </div>

      <div class="content-description">
        <div class="text">
          {{general.description}}
        </div>
        <div class="image" :style="{'background-image': 'url('+general.image+')'}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'General',
  props: {
    general: {
      type: Object
    }
  },
  watch: {
    $route(to, from) {
      const route = to.path.slice(1)
      this.selectedTab = route
    }
  },
  data() {
    return {
      selectedTab: ''
    }
  },
  methods: {
    routeTo(name) {
      this.$router.push({ name })
    }
  },
  created() {
    this.selectedTab = this.$route.name
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/mixins';

@media (max-width: 600px) {
  .title {
    padding: 0 20px;
  }
  .content {
    .content-header {
      font-size: 1.5rem;
    }
    .content-description {
      margin-top: 20px;
      line-height: 22px;
      flex-direction: column;
      .image {
        margin-top: 20px;
      }
    }
  }
}

@media (min-width: 600px) {
  .zhihuishangquan-general {
    .title {
      width: 50%;
      margin: 0 auto;
    }
    .content {
      .content-header {
        font-size: 1.5rem;
      }
      .content-description {
        .text {
          padding-right: 20px;
        }
      }
    }
  }
}

.zhihuishangquan-general {
  margin-top: 40px;
  @include textHover;

  .title {
    font-size: 2rem;
    height: 80px;
    line-height: 80px;
    display: flex;
    .item {
      cursor: pointer;
      flex: 1;
      border-radius: 10px;
      &:last-child {
        margin-left: 20px;
      }
      &.active {
        background-color: map-get($colors, primary);
        color: $whiteText;
      }
      &:hover {
        color: $whiteText;
        background-color: map-get($colors, primary);
      }
    }
  }

  .content {
    margin-top: 30px;
    padding: 20px;
    border: 1px solid $greyText;
    .content-header {
      padding: 10px;
      text-align: left;
    }

    .content-description {
      display: flex;
      align-items: center;
      .text {
        flex: 2;
        text-align: left;
        line-height: 30px;
      }

      .image {
        flex: 1;
        width: 100%;
        height: 200px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>
