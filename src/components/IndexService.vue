<template>
	<div class="service">
      <div class="abstract">
        <div class="header">
          我们的服务
        </div>
        <div class="flag">
          
        </div>
        <div class="content">
          打造优质的用户体验，搭建生态化电商系统。
        </div>
      </div>

      <div class="micro-mall el-row">
        <div class="logo el-col-10">
          <img src="../assets/images/index-1.jpg" alt="" style="height: 360px;">
        </div>
        <div class="text-area el-col-offset-4 el-col-10">
          <div class="header">
            微商城
          </div>
          <div class="flag">
          </div>
          <div class="content">
            一款移动商城系统,可在手机上面卖商品的电子商务软件系统。
          </div>
        </div>
      </div>

      <div class="micro-marketing el-row">
        <div class="text-area el-col-10">
          <div class="header">
            微营销
          </div>
          <div class="flag">
          </div>
          <div class="content">
            帮助企业打造一站式微信营销推广服务。
          </div>
        </div>
        <div class="logo el-col-offset-4 el-col-10">
          <img src="../assets/功能列表.png" alt="" style="height: 360px;">
        </div>
      </div>

      <div class="micro-app el-row">
        <div class="text-area el-col-10">
          <div class="header">
            小程序
          </div>
          <div class="flag">
          </div>
          <div class="content">
            小程序真正做到了小巧，不用安装，不用卸载的先进用户体验。
          </div>
        </div>
        <div class="logo el-col-offset-4 el-col-10">
          <img src="../assets/images/777_P_1483999965218.jpg" alt="" style="height: 360px;">
        </div>
      </div>
  </div>
</template>

<script>
	export default {
		name: 'IndexService',
	}
</script>

<style scoped lang="scss">
  .service {
    height: 1670px;
    margin: 0 5rem;
    border-bottom: 1px solid #bfb5b5;

    .abstract {
      height: 330px;
      padding-top: 100px;
      .header {
        font-size: 2rem;
      }
      .flag {
        width: 100px;
        margin: 40px auto;
        border-top: 2px solid red;
      }

      .content {
        color: #666;
        line-height: 2.5rem;
      }
    }

    .micro-mall {
      height: 400px;
      padding-top: 40px;

      .header {
        font-size: 1.5rem;
      }

      .flag {
        width: 100px;
        margin: 40px auto;
        border-top: 2px solid red;
      }

      .content {
        color: #666;
        line-height: 2.5rem;
      }
    }

    .micro-marketing, .micro-app {
      height: 400px;
      padding-top: 40px;

      .text-area {
        .header {
          font-size: 1.5rem;
        }

        .flag {
          width: 100px;
          margin: 40px auto;
          border-top: 2px solid red;
        }

        .content {
          color: #666;
          line-height: 2.5rem;
        }
      }
    }
  }
</style>