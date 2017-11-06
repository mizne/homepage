<template>
  <div class="more-company-container">
    <div class="more-company-header header">
      10000+
    </div>
    <div class="more-company-description description">
        超过10000家组织、团体信任并选择腾宣威客户管理软件
      </div>
    <div class="more-company-tabs">
      <div class="more-company-tab image-container" v-for="(tab,index) in tabs" :key="tab.id">
        <img :src="tab.image" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexMoreCompany',
  data() {
    return {
      tabs: [
        {
          id: 0,
          image: require('../../assets/images/shouye/company-0.png')
        },
        {
          id: 1,
          image: require('../../assets/images/shouye/company-1.png')
        },
        {
          id: 2,
          image: require('../../assets/images/shouye/company-2.png')
        },
        {
          id: 3,
          image: require('../../assets/images/shouye/company-3.png')
        },
        {
          id: 4,
          image: require('../../assets/images/shouye/company-4.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/mixins';

@media (max-width: 600px) {
  .more-company-tabs {
    flex-direction: column;

    .more-company-tab {
      &:not(:first-child) {
        margin-top: 20px;
      }
    }
  }
}

@media (min-width: 600px) {
  .more-company-tabs {
    .more-company-tab {
      &:not(:first-child) {
        margin-left: 20px;
      }
    }
  }
}

.more-company-container {
  margin-top: 100px;

  .more-company-header {
    position: relative;
    font-size: 3rem;
    color: map-get($colors, primary);
  }

  .description {
    font-size: 1.5rem;
    margin-top: 30px;
  }

  .more-company-tabs {
    margin-top: 60px;
    display: flex;
    .more-company-tab {
      flex: 1;
      @include cardHover;
    }
  }
}
</style>
