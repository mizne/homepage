<template>
  <div class="home-header el-row">
    <div class="logo el-col-8">
      <h1 style="margin-top: 0;">腾宣威</h1>
    </div>
    <div class="tabs el-col-16 el-row">
      <router-link to="/" class="item index el-col-3" :class="{'selected': selectedTab === ''}">
        首页
      </router-link>
      <router-link to="/service" class="item service el-col-3 el-col-offset-1" :class="{'selected': selectedTab === 'service'}">
        我们的服务
      </router-link>
      <router-link to="/about" class="item about el-col-3 el-col-offset-1" :class="{'selected': selectedTab === 'about'}">
        关于我们
      </router-link>
      <router-link to="/news" class="item news el-col-3 el-col-offset-1" :class="{'selected': selectedTab === 'news'}">
        新闻动态
      </router-link>
      <router-link to="/contract" class="item contract el-col-3 el-col-offset-1" :class="{'selected': selectedTab === 'contract'}">
        联系我们
      </router-link>
      <router-link to="/hire" class="item hire el-col-3 el-col-offset-1" :class="{'selected': selectedTab === 'hire'}">
        招贤榜
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      msg: 'home-header',
      selectedTab: ''
    }
  },
  watch: {
    '$route' (to, from) {
      this.selectedTab = to.path.slice(1)
    }
  },
  created() {
    this.selectedTab = this.$route.path.slice(1)
  }
}
</script>

<style scoped lang="scss">
.home-header {
  height: 130px;
  display: flex;

  .logo {
    margin: 2.83rem 0;
  }

  .tabs {
    margin: 2.83rem 0;
    font-size: 1.2rem;
    
    .item {
      padding: 0.5rem 0.5rem;
      border-radius: 20px;
      transition: background .5s ease;

      &:hover, &.selected {
        background-color: #7aca8f;
      }
    }
  }
}

a {
  color: #5a4444 !important;
  text-decoration: none;
}
</style>
