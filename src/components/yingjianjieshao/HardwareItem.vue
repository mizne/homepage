<template>
  <div class="hardware-item-container">
    <div class="desc">
      <div class="header">
        {{hardware.title}}
      </div>

      <div class="description">
        <ul>
          <li v-for="feature in hardware.features" :key="feature.id">
            {{feature.label}}
          </li>
        </ul>
      </div>
    </div>

    <div class="image-container">
      <img :src="hardware.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HardwareItem',
  props: {
    hardware: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/mixins';

@media (max-width: 600px) {
  .hardware-item-container {
    flex-direction: column;
    width: 100%;
  }
}

@media (min-width: 600px) {
  .hardware-item-container {
    width: 40%;
    &:nth-child(2n) {
      margin-left: 5%;
    }
  }
}

.hardware-item-container {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @include cardHover;
  min-height: 600px;

  .desc {
    margin-top: 20px;
    margin-bottom: 40px;
    line-height: 25px;
    .header {
      font-size: 2rem;
      line-height: 40px;
    }
    .description {
      padding: 0 10px;
      text-align: left;
      margin: 40px 0 0 0;
      font-size: 1.5rem;
      line-height: 40px;
    }
  }
}
</style>
