<template>
  <div class="company-idea el-row">
    <div class="text-area el-col-offset-5 el-col-8">
      <div class="header">
        公司理念：
      </div>
      <div class="content">
        以诚信赢得市场，以质量铸造品牌，我们坚信："品牌不仅仅是一个商标"，一件产品，是一种品质，它用良好的质量维系消费者对企业的信赖；
      </div>
    </div>
    <div class="more-btn-area el-col-offset-1 el-col-4">
      <div class="more-btn" @click="knowMore()">
        了解更多
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IndexCompanyIdea',
  methods: {
    knowMore() {
      this.$router.push({
        name: 'service'
      })
    }
  }
}
</script>
<style scoped lang="scss">
.company-idea {
  height: 210px;
  color: white;
  background-color: #3ab6f1;
  .text-area {
    margin-top: 3rem;
    .header {
      text-align: left;
      font-size: 1.5rem;
      font-weight: bold;
    }
    .content {
      text-align: left;
      margin-top: 10px;
      font-size: 1.2rem;
    }
  }
  .more-btn-area {
    margin-top: 4.5rem;
    .more-btn {
      width: 200px;
      color: #3ab6f1;
      margin: 0 3rem;
      padding: 1.5rem 0;
      background-color: white;
      border-radius: 40px;
      cursor: pointer;
    }
  }
}
</style>
