<template>
  <div class="use-btn-group">
      <el-button>在线试用</el-button>
      <el-button>立即咨询</el-button>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {},
  data() {
    return {}
  },
  methods: {},
  created() {}
}
</script>

<style scoped lang="scss">
@import '../assets/scss/mixins';

@media (max-width: 600px) {
  .use-btn-group {
    flex-direction: column;
    align-items: center;
    .el-button {
      &:last-child {
        margin-top: 20px;
      }
    }
  }
}

@media (min-width: 600px) {
  .use-btn-group {
    justify-content: center;
    .el-button {
      &:last-child {
        margin-left: 100px;
      }
    }
  }
}

.use-btn-group {
  margin-top: 50px;
  display: flex;

  .el-button {
    width: 200px;
    color: $whiteText;
    font-size: 2rem;
    border-radius: 10px;
    &:first-child {
      background-color: map-get($colors, primary);
    }
    &:last-child {
      background-color: map-get($colors, secondary);
    }
  }
}
</style>
