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
        <img src="../assets/images/index-1.jpg" alt="" style="height: 360px;">
      </div>
      <div class="text-area">
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
  
    <div class="micro-marketing">
      <div class="logo">
        <img src="../assets/功能列表.png" alt="" style="height: 360px; width: 100%;">
      </div>
      <div class="text-area">
        <div class="header">
          微营销
        </div>
        <div class="flag">
        </div>
        <div class="content">
          帮助企业打造一站式微信营销推广服务。
        </div>
      </div>
  
    </div>
  
    <div class="micro-app">
      <div class="logo">
        <img src="../assets/images/777_P_1483999965218.jpg" alt="" style="height: 360px;">
      </div>
      <div class="text-area">
        <div class="header">
          小程序
        </div>
        <div class="flag">
        </div>
        <div class="content">
          小程序真正做到了小巧，不用安装，不用卸载的先进用户体验。
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
      height: 620px;
      margin-top: 40px;
      display: flex;
      flex-direction: column;

      .logo,
      .text-area {
        flex: 1;
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