<template>
  <div class="more-reason-container">
    <div class="more-reason-header header">
      <div class="prefix">让您信赖我们的</div>
      <div class="suffix"><span class="number">3</span><span>大理由</span></div>
    </div>
    <div class="more-reason-tabs">
      <div class="more-reason-tab" v-for="(tab,index) in tabs" :key="tab.value">
        <div class="icon-wrapper">
          <i :class="['iconfont', tab.icon]"></i>
        </div>

        <div class="text">
          {{tab.label}}
        </div>

        <div class="description">
          {{tab.description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexMoreReasons',
  data() {
    return {
      tabs: [
        {
          label: '关于专业',
          value: 'pro',
          description: '多年电商O2O、活动营销、客户管理和精准分析等研发经验',
          icon: 'icon-people'
        },
        {
          label: '关于使用',
          value: 'use',
          description: '一看就会的营销CRM系统、视频介绍、操作说明',
          icon: 'icon-card'
        },
        {
          label: '关于服务',
          value: 'service',
          description: '免费升级、免费售后、支持上门洽谈安装',
          icon: 'icon-person'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/mixins';

@media (max-width: 600px) {
  .number {
    font-size: 3rem;
    // top: 40px;
    // left: 110px;
    width: 50px;
    height: 50px;
    line-height: 54px;
  }
  .suffix {
  }
  .more-reason-tabs {
    margin-top: 50px;
    flex-direction: column;
  }
}

@media (min-width: 600px) {
  .number {
    font-size: 5rem;
    // top: -35px;
    // left: 51%;
    width: 90px;
    height: 90px;
    line-height: 94px;
  }
  .prefix {
    display: inline;
  }
  .suffix {
    display: inline;
  }
}

.more-reason-container {
  margin-top: 100px;

  .more-reason-header {
    position: relative;
    height: 60px;
    margin-bottom: 20px;
    font-size: 2rem;

    .prefix {
      margin-right: 10px;
    }

    .suffix {
      span:last-child {
        margin-left: 10px;
      }
    }

    .number {
      display: inline-block;
      color: #267bcb;
      font-family: -webkit-pictograph;
      border: 2px solid #267bcb;
      border-radius: 50%;
    }
  }

  .more-reason-tabs {
    display: flex;
    justify-content: space-around;

    .more-reason-tab {
      flex: 1;
      margin: 20px;
      padding: 20px;
      @include cardHover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #5e4c98;
        i {
          font-size: 3.4rem;
          color: white;
        }
      }

      .text {
        margin-top: 10px;
        font-weight: bold;
      }
      .description {
        max-width: 250px;
        margin-top: 10px;
      }
    }
  }
}
</style>
