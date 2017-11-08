<template>
  <div class="ruanjianjieshao-general">
    <div class="ruanjianjieshao-general header">
      任何行业 任何时间 您都可以管理生意
    </div>

    <div class="content">
      <div class="content-header header">
        数字化营销CRM系统
      </div>

      <div class="content-description description">
        以数字化营销为核心的客户关系管理系统，以SAAS模式提供服务，完全免费的定制系统，为智慧商家/商圈及中小企业量身制定，
        截止2017年3月份，收费用户突破1000+。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'General',
  components: {}
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/mixins';

@media (max-width: 600px) {
  .content {
    .content-header {
      width: 80%;
      font-size: 1.5rem;
    }
    .content-description {
      margin-top: 20px;
      line-height: 25px;
    }
  }
}

@media (min-width: 600px) {
  .content {
    .content-header {
      width: 50%;
    }
    .content-description {
      margin-top: 50px;
    }
  }
}

.ruanjianjieshao-general {
  margin-top: 40px;

  .content {
    margin-top: 30px;
    color: $whiteText;
    min-height: 200px;
    padding: 0 20px 20px 20px;
    background-color: map-get($colors, primary);
    .content-header {
      color: $whiteText;
      font-weight: bold;
      padding: 10px;
      margin: 0 auto;
      box-shadow: 2px 2px 2px #333;
      background-color: darken(map-get($colors, primary), 20);

    }
    .content-description {
        color: $whiteText;
      }
  }
}
</style>
