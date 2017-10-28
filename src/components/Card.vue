<template>
  <div class="card-container" :style="{'background-image': 'linear-gradient(-180deg, #45444e 0%, '+color+' 100%)'}">
    <div class="card-title">
      {{title}}
    </div>
    <div class="card-content">
      {{content}}
    </div>
    <span class="new-text">new</span>
    <el-button @click.native="toView()">点击查看</el-button>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String
    },
    content: {
      type: String
    },
    color: {
      type: String
    }
  },
  data() {
    return {}
  },
  methods: {
    toView() {
      this.$emit('view')
    }
  },
  created() {
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/mixins';

.card-container {
  position: relative;
  padding: 20px;
  color: $whiteText;
  text-align: left;
  @include cardHover;

  .card-title {
    margin-top: 20px;
    font-size: 1.5rem;
  }

  .card-content {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .new-text {
    position: absolute;
    top: 3px;
    left: -3px;
    font-size: 0.8rem;
    transform: rotate(-45deg);
  }

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    top: -4px;
    left: -18px;
    width: 0;
    height: 0px;
    content: '';
    border-style: solid;
    border-width: 25px 25px 0px 25px;
    border-color: map-get($colors, danger) transparent;
    transform: rotate(135deg);
    box-shadow: 0px -2px 2px $whiteText;
  }
}
</style>
