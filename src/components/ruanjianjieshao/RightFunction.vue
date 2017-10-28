<template>
  <div class="ruanjianjieshao-right-function">
    <div class="icon-wrapper">
      <i :class="['iconfont', func.icon]" :style="{'color': func['icon-color']}"></i>
    </div>

    <div class="description">
      <div class="title">{{func.title}}</div>
      <div class="content">{{func.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightFunction',
  props: {
    func: {
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
  .ruanjianjieshao-right-function {
    padding-right: 30px;
  }
}

@media (min-width: 600px) {
  .ruanjianjieshao-right-function {
    padding: 0 30px;
  }
}
.ruanjianjieshao-right-function {
  margin-top: 30px;
  height: 200px;
  display: flex;
  align-items: center;
  border: 1px solid #E1E1E1;
  @include cardHover;
  padding: 20px;

  .icon-wrapper {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 50%;
    i {
      font-size: 3rem;
    }
  }

  .description {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      margin-bottom: 20px;
      font-weight: bold;
    }
  }
}
</style>
