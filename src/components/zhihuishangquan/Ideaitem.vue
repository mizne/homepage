<template>
  <div class="idea-item-container">
    <div class="header">
      {{idea.title}}
    </div>
    <div class="description">
      {{idea.description}}
    </div>
    <div class="image-container">
      <img :src="idea.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ideaitem',
  props: {
    idea: {
      type: Object
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

.idea-item-container {
  margin-top: 40px;
  @include cardHover;
  padding: 20px;
  .description {
    margin-top: 20px;
    margin-bottom: 40px;
  }
}
</style>
