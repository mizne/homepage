<template>
  <div class="home-footer">
    <div class="info">
      <div class="tuijianchanpin info-item">
        <div class="title">推荐产品</div>
        <ul>
          <li><router-link to="/zhihuishangquan">智慧商圈</router-link></li>
          <li><router-link to="/zhihuihuizhan">智慧会展</router-link></li>
          <li><router-link to="/liansuoban">连锁版</router-link></li>
          <li><router-link to="/shangjiaban">商家联盟</router-link></li>
          <li><router-link to="/jiaoyupeixun">教育培训</router-link></li>
          <li><router-link to="/jiudianshangcheng">酒店商城</router-link></li>
          <li><router-link to="/chaoshishangcheng">超市商城</router-link></li>
        </ul>
      </div>
      <div class="wangzhanditu info-item">
        <div class="title">网站地图</div>
        <ul>
          <li><router-link to="/ruanjianjieshao">软件介绍</router-link></li>
          <li><router-link to="/kehuanli">客户案列</router-link></li>
          <li><router-link to="/qudaodaili">渠道代理</router-link></li>
          <li><router-link to="/dingzhikaifa">定制开发</router-link></li>
        </ul>
      </div>

      <div class="kuaisudaohang info-item">
        <div class="title">快速导航</div>
        <ul>
          <li><router-link to="/about">关于我们</router-link></li>
          <li><router-link to="/news">新闻中心</router-link></li>
        </ul>
      </div>

      <div class="lianxiwomen info-item">
        <div class="title">
          联系我们
        </div>
        <ul>
          <li><a>公司地址: 南京市建邺区金润国际广场西塔16楼</a></li>
          <li><a>电话: 025-86662644</a></li>
          <li><a>邮箱: sales@xiaovbao.cn</a></li>
          <li><a>公司网站: http://www.xiaovbao.cn</a></li>
        </ul>
      </div>
    </div>

    <div class="copyright">
      <div class="year">CopyRight@  2017 - 版权所有</div>
      <div class="company">南京腾宣威软件科技有限公司</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter',
  data() {
    return {
      msg: 'home-footer'
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/scss/mixins';

@media (min-width: 600px) {
  .home-footer {
    .info {
      display: flex;
    }
  }
}

@media (max-width: 600px) {
  .home-footer {
    // height: 300px;

    .info {
      display: flex;
      flex-direction: column;

      .info-item {
        text-align: center !important;
        margin-top: 20px;
      }
    }
  }
}

.home-footer {
  margin-top: 100px;
  background-color: $blackBg;
  padding: 50px;

  .info {
    .info-item {
      flex: 1;
      text-align: left;

      .title {
        font-size: 1.2rem;
        font-weight: bold;
        color: $whiteText;
        margin-bottom: 20px;
      }
      ul {
        li {
          margin-top: 5px;
          a {
            color: $greyText;
            @include textHover;
          }
        }
      }
    }
  }
  .copyright {
    color: $greyText;
    margin-top: 30px;
    .year {
      margin-bottom: 20px;
    }
    .company {
      font-weight: bold;
    }
  }
}
</style>
