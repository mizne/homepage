<template>
  <div class="home-header el-row">
    <div class="logo el-col-12">
      <h2 style="margin-top: 0;">腾宣威</h2>
    </div>
    <div class="tabs el-col-12 el-row">
      <div class="item index el-col-3" :class="{'selected': selectedTab === ''}">
        <router-link to="/">首页</router-link>
      </div>
      <div class="item service el-col-3 el-col-offset-1" :class="{'selected': selectedTab === 'service'}">
        <router-link to="/service">我们的服务</router-link>
      </div>
      <div class="item about el-col-3 el-col-offset-1" :class="{'selected': selectedTab === 'about'}">
        <router-link to="/about">关于我们</router-link>
      </div>
      <div class="item news el-col-3 el-col-offset-1" :class="{'selected': selectedTab === 'news'}">
        <router-link to="/news">新闻动态</router-link>
      </div>
      <div class="item contract el-col-3 el-col-offset-1" :class="{'selected': selectedTab === 'contract'}">
        <router-link to="/contract">联系我们</router-link>
      </div>
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

      &:hover, &.selected {
        background-color: #7aca8f;
      }
    }
  }
}

a {
  text-decoration: none;
}
</style>
