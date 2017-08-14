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
  
    <div class="micro-mall">
      <div class="logo">
        <img src="../assets/images/SAAS.png" alt="" style="height: 360px;">
      </div>
      <div class="text-area">
        <div class="header">
          SAAS & CRM
        </div>
        <div class="flag">
        </div>
        <div class="content">
          <span style="display: block">国内第一套酒店SaaS系统，技术比肩salesforce，国内领先</span>
          <span style="display: block">2016年，通过国际软件成熟度三级阶段性评估（CMMI3）</span>
          <span style="display: block">2017年，顺利完成ISO9001：2008认证 </span>
        </div>
      </div>
    </div>
  
    <div class="micro-marketing">
      <div class="logo">
        <img src="../assets/images/edaishou.jpg" alt="" style="height: 360px; width: 100%;">
      </div>
      <div class="text-area">
        <div class="header">
          e代售
        </div>
        <div class="flag">
        </div>
        <div class="content">
          近千家代售点，涵盖大小商圈、住宅及写字楼，增加销售渠道，提高营收
        </div>
      </div>
  
    </div>
  
    <div class="micro-app">
      <div class="logo">
        <img src="../assets/images/ediancan.jpg" alt="" style="height: 360px;">
      </div>
      <div class="text-area">
        <div class="header">
          e点餐
        </div>
        <div class="flag">
        </div>
        <div class="content">
          <span style="display: block">引人、省人、留人”三位一体的o2o应用工具</span>
          <span style="display: block">打造 提升效率、降低成本、丰富体验 的互联网应用工具</span>
        </div>
      </div>
    </div>
  
    <div class="micro-app">
      <div class="logo">
        <img src="../assets/images/H00258.png" alt="" style="height: 360px;">
      </div>
      <div class="text-area">
        <div class="header">
          硬件系列-H00258
        </div>
        <div class="flag">
        </div>
        <div class="content">
          <span style="display: block">出单自动切纸，方便快捷</span>
          <span style="display: block">出单蜂鸣提醒，防止漏单</span>
          <span style="display: block">高速打印，提高效率</span>
          <span style="display: block">热敏打印原理，无需换墨</span>
        </div>
      </div>
    </div>
  
    <div class="micro-app">
      <div class="logo">
        <img src="../assets/images/H00358.png" alt="" style="height: 360px;">
      </div>
      <div class="text-area">
        <div class="header">
          硬件系列-H00358
        </div>
        <div class="flag">
        </div>
        <div class="content">
          <span style="display: block">智能双屏，灵敏触屏，耐戳耐用</span>
          <span style="display: block">高端配置，性能卓越</span>
          <span style="display: block">经久耐用，24h不间断开机</span>
          <span style="display: block">智能高效，运行稳定</span>
          <span style="display: block">广告客显，灵活切换</span>
        </div>
      </div>
    </div>
  
    <div class="micro-app">
      <div class="logo">
        <img src="../assets/images/H00458.png" alt="" style="height: 360px;">
      </div>
      <div class="text-area">
        <div class="header">
          硬件系列-H00458
        </div>
        <div class="flag">
        </div>
        <div class="content">
          <span style="display: block">完美设计，时尚享受</span>
          <span style="display: block">扩充性好，安全性高</span>
          <span style="display: block">独特散热，性能稳定</span>
          <span style="display: block">安装方便，维护简单</span>
        </div>
      </div>
    </div>
  
    <div class="micro-app">
      <div class="logo">
        <img src="../assets/images/H00558.png" alt="" style="height: 360px;">
      </div>
      <div class="text-area">
        <div class="header">
          硬件系列-H00558
        </div>
        <div class="flag">
        </div>
        <div class="content">
          <span style="display: block">工业级多媒体综合显示屏</span>
          <span style="display: block">画中画，支持播放商业广告</span>
          <span style="display: block">操作简单，性能优，功耗低</span>
        </div>
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
@media (min-width: 600px) {
  .service {
    margin: 0 5rem;
  }
}

.service {
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

  @media (min-width: 600px) {
    .micro-mall {
      height: 400px;
      padding-top: 40px;
      display: flex;

      .logo,
      .text-area {
        flex: 1;
      }

      .text-area {
        margin-left: 4rem;
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

  @media (max-width: 600px) {
    .micro-mall {
      min-height: 620px;
      margin-top: 40px;
      display: flex;
      flex-direction: column;

      .logo,
      .text-area {
        flex: 1;
      }

      .logo img {
        max-width: 100%;
      }

      .text-area {
        // margin-top: 4rem;
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



  @media (min-width: 600px) {
    .micro-marketing,
    .micro-app {
      height: 400px;
      padding-top: 40px;
      display: flex;

      .logo,
      .text-area {
        flex: 1;
      }

      .text-area {
        margin-left: 4rem;
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


  @media (max-width: 600px) {
    .micro-marketing,
    .micro-app {
      min-height: 620px;
      margin-top: 40px;
      display: flex;
      flex-direction: column;

      .logo,
      .text-area {
        flex: 1;
      }

      .logo img {
        max-width: 100%;
      }

      .text-area {
        // margin-top: 4rem;
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
}
</style>