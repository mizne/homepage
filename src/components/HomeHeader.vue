<template>
  <div class="home-header">
    <div class="logo">
      <!-- <h1 style="margin-top: 0;">腾宣威</h1> -->
      <a to="/" @click="routeTo('index')">
        <img src="../assets/images/shouye/logo.png" alt="腾宣威软件科技">
      </a>
    </div>
    <div class="tabs">
      <a to="/" @click="routeTo('index')" class="item index" :class="{'selected': selectedTab === ''}">
        首页
      </a>
      <a @click="routeTo('ruanjianjieshao')" @mouseenter="toShowSoftwares()" @mouseleave="toHideSoftwares()"
      class="item ruanjianjieshao" :class="{'selected': selectedTab === 'ruanjianjieshao'}">
        软件介绍
        <ul class="all-software" v-show="showSoftwares" @mouseenter="toShowSoftwares()" @mouseleave="toHideSoftwares()">
          <li class="software" @click="$event.stopPropagation();routeTo('zhihuishangquan')">智慧商圈</li>
          <li class="software" @click="$event.stopPropagation();routeTo('zhihuihuizhan')">智慧会展</li>
          <li class="software" @click="$event.stopPropagation();routeTo('shangjiaban')">智慧商家版</li>
          <li class="software" @click="$event.stopPropagation();routeTo('liansuoban')">连锁版</li>
          <li class="software" @click="$event.stopPropagation();routeTo('shangjialianmeng')">商家联盟</li>
          <li class="software" @click="$event.stopPropagation();routeTo('jiaoyupeixun')">教育培训</li>
          <li class="software" @click="$event.stopPropagation();routeTo('jiudianshangcheng')">酒店商城</li>
          <li class="software" @click="$event.stopPropagation();routeTo('chaoshishangcheng')">超市商城</li>
        </ul>
      </a>
      <a @click="routeTo('ruanjiangongneng')" class="item ruanjiangongneng" :class="{'selected': selectedTab === 'ruanjiangongneng'}">
        软件功能
      </a>
      <a @click="routeTo('yingjianjieshao')" class="item yingjianjieshao" :class="{'selected': selectedTab === 'yingjianjieshao'}">
        硬件介绍
      </a>
      <a @click="routeTo('kehuanli')" class="item kehuanli" :class="{'selected': selectedTab === 'kehuanli'}">
        客户案例
      </a>
      <a @click="routeTo('qudaodaili')" class="item qudaodaili" :class="{'selected': selectedTab === 'qudaodaili'}">
        渠道代理
      </a>
      <a @click="routeTo('dingzhikaifa')" class="item dingzhikaifa" :class="{'selected': selectedTab === 'dingzhikaifa'}">
        定制开发
      </a>
      <a @click="routeTo('gongsijianjie')" class="item gongsijianjie" :class="{'selected': selectedTab === 'gongsijianjie'}">
        公司简介
      </a>
      <a href="tel:02586662644" class="item tel">025-86662644</a>
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
          <el-dropdown-item command="ruanjianjieshao">
              软件介绍
          </el-dropdown-item>
          <el-dropdown-item command="ruanjiangongneng">
              软件功能
          </el-dropdown-item>
          <el-dropdown-item command="yingjianjieshao">
              硬件介绍
          </el-dropdown-item>
          <el-dropdown-item command="kehuanli">
              客户案例
          </el-dropdown-item>
          <el-dropdown-item command="qudaodaili">
              渠道代理
          </el-dropdown-item>
          <el-dropdown-item command="dingzhikaifa">
              定制开发
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
      selectedTab: '',
      href: 'http://test.xiaovbao.cn/login',
      activeIndex2: '1',
      showSoftwares: false,
      timeId: null
    }
  },
  watch: {
    $route(to, from) {
      this.selectedTab = this.computeSelectedTabFromRoute(to)
    }
  },
  created() {
    this.selectedTab = this.computeSelectedTabFromRoute(this.$route)
  },
  methods: {
    toShowSoftwares() {
      if (this.timeId) {
        window.clearTimeout(this.timeId)
      }
      this.showSoftwares = true
    },
    toHideSoftwares() {
      this.timeId = window.setTimeout(() => {
        this.showSoftwares = false
      }, 200)
    },
    handleCommand(command) {
      if (command === 'manager') {
        window.location.href = this.href
        return
      }
      this.$router.push({ name: command })
    },
    routeTo(name) {
      this.$router.push({ name })
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    computeSelectedTabFromRoute(router) {
      const softwares = [
        'zhihuishangquan',
        'zhihuihuizhan',
        'shangjiaban',
        'liansuoban',
        'shangjialianmeng',
        'jiaoyupeixun',
        'jiudianshangcheng',
        'chaoshishangcheng'
      ]
      const route = router.path.slice(1)
      return softwares.indexOf(route) >= 0 ? 'ruanjianjieshao' : route
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins';

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

@media (min-width: 600px) {
  .dropdown {
    display: none;
  }
  .tabs {
    flex: 4;
    margin: 1.43rem 0;
    font-size: 1.2rem;
    display: flex;

    .item {
      flex: 1;
      margin-left: 10px;
      padding: 0.5rem;
      border-radius: 20px;
      cursor: pointer;
      height: 80px;
      line-height: 80px;
      transition: background 0.5s ease;

      &:hover,
      &.selected {
        background-color: #456fc3;
        color: $whiteText;
      }

      &.selected {
        color: $whiteText;
      }
    }
  }
}

.home-header {
  height: 130px;
  display: flex;
  padding: 20px 0;

  .logo {
    margin-left: 50px;
  }

  .tel {
    color: map-get($colors, primary);
    min-width: 130px;
  }

  .ruanjianjieshao {
    position: relative;
    .all-software {
      position: absolute;
      top: 100px;
      left: -40px;
      z-index: 100;
      height: 60px;
      line-height: 60px;
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: map-get($colors, primary);
      color: $whiteText;
      padding: 0 20px;
      .software {
        min-width: 100px;
        &:not(:last-child) {
          margin-right: 10px;
        }
        &:hover {
          background-color: darken(map-get($colors, primary), 20);
        }
      }
    }
  }
}
</style>

