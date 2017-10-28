<template>
  <div class="more-company-container">
    <div class="more-company-header header">
      10000+
    </div>
    <div class="more-company-description description">
        超过10000家组织、团体信任并选择腾宣威客户管理软件
      </div>
    <div class="more-company-tabs">
      <div class="more-company-tab image" v-for="(tab,index) in tabs" :key="tab.value" :style="{'background-image': 'url(' + tab.image + ')'}">
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
          value: 'zhubao',
          image: require('../../assets/images/shouye/zhubao.png')
        },
        {
          value: 'dianshang',
          image: require('../../assets/images/shouye/dianshang.png')
        },
        {
          value: 'qichemeirong',
          image: require('../../assets/images/shouye/qichemeirong.png')
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
      height: 300px;
      &:not(:first-child) {
        margin-top: 20px;
      }
    }
  }
}

@media (min-width: 600px) {
  .more-company-tabs {
    .more-company-tab {
      height: 500px;
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
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
