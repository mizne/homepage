<template>
  <div class="home-header">
    <div class="logo">
      <h1 style="margin-top: 0;">腾宣威</h1>
    </div>
    <div class="tabs">
      <router-link to="/" class="item index" :class="{'selected': selectedTab === ''}">
        首页
      </router-link>
      <router-link to="/service" class="item service" :class="{'selected': selectedTab === 'service'}">
        我们的服务
      </router-link>
      <router-link to="/about" class="item about" :class="{'selected': selectedTab === 'about'}">
        关于我们
      </router-link>
      <router-link to="/news" class="item news" :class="{'selected': selectedTab === 'news'}">
        新闻动态
      </router-link>
      <router-link to="/contract" class="item contract" :class="{'selected': selectedTab === 'contract'}">
        联系我们
      </router-link>
      <router-link to="/hire" class="item hire" :class="{'selected': selectedTab === 'hire'}">
        招贤榜
      </router-link>
    </div>
  
    <div class="dropdown">
      <el-dropdown @command="handleCommand" trigger="click">
        <el-button type="primary">
          <i class="el-icon-menu"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="index">
              首页
          </el-dropdown-item>
          <el-dropdown-item command="service">
              我们的服务
          </el-dropdown-item>
          <el-dropdown-item command="about">
              关于我们
          </el-dropdown-item>
          <el-dropdown-item command="news">
              新闻动态
          </el-dropdown-item>
          <el-dropdown-item command="contract">
              联系我们
          </el-dropdown-item>
          <el-dropdown-item command="hire">
              招贤榜
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data() {
    return {
      msg: 'home-header',
      selectedTab: ''
    }
  },
  watch: {
    '$route'(to, from) {
      this.selectedTab = to.path.slice(1)
    }
  },
  created() {
    this.selectedTab = this.$route.path.slice(1)
  },
  methods: {
    handleCommand(command) {
      this.$router.push({ name: command })
    }
  }
}
</script>

<style lang="scss">
.home-header {
  height: 130px;
  display: flex;

  .logo {
    margin: 2.83rem 0;
    flex: 1;
  }

  @media (min-width: 600px) {
    .dropdown {
      display: none;
    }
    .tabs {
      flex: 2;
      margin: 2.83rem 0;
      font-size: 1.2rem;
      display: flex;

      .item {
        flex: 1;
        margin-left: 10px;
        padding: 0.5rem 0.5rem;
        border-radius: 20px;
        transition: background .5s ease;

        &:hover,
        &.selected {
          background-color: #7aca8f;
        }

        &.selected {
          color: white;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .tabs {
      display: none;
    }
    .dropdown {
      flex: 1;
      margin: 2.84rem 1rem;
      font-size: 1.2rem;
      display: flex;
      justify-content: flex-end;
    }
  }
}

a {
  color: #5a4444;
  text-decoration: none;
}
</style>

