<template>
	<div class="service">
      <div class="abstract">
        <div class="header">
          我们的服务
        </div>
        <div class="flag">
          
        </div>
        <div class="content">
          我们已定制多套解决方案，助您轻松跨入"互联网+"时代，存储、计算、监控、安全你所需要的一切云产品，我们均能以业界领先的水平为您提供。
        </div>
      </div>

      <div class="cloud-data el-row">
        <div class="logo el-col-10">
          <img src="../assets/images/AD0I-KXKBRACGAAg0JjLwAUopuyGogQwlwM4_wE.jpg" alt="">
        </div>

        <div class="text-area el-col-offset-4 el-col-10">
          <div class="header">
            云数据中心操作系统
          </div>

          <div class="flag">
            
          </div>

          <div class="content">
            秉承开放化、模块化、标准化的基于虚拟化技术，实现了数据中心资源融合资源管理及服务交付。
          </div>
        </div>
      </div>

      <div class="big-data el-row">
        <div class="text-area el-col-10">
          <div class="header">
            复合大数据
          </div>

          <div class="flag">
            
          </div>

          <div class="content">
            海量、高增长率和多样化的信息资产，提供数据处理，分析，增值能力。通过自采集和与个大应用市场及数据机构采购合作，数据更多维，更具深度。
          </div>
        </div>

        <div class="logo el-col-offset-4 el-col-10">
          
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
    height: 1130px;
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

    .cloud-data {
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

    .big-data {
      .logo {
        height: 233px;
        background: url(../assets/images/AD0I-KXKBRAEGAAguZXLwAUopYicugQwqgE4uAE.png) no-repeat;
      }

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