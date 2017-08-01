<template>
  <div class="home-footer">
    <div class="info">
      <div class="logo">
        <h2 style="margin-top: 0;">腾宣威</h2>
      </div>
      <div class="contract">
        <img src="../assets/images/AD0I-KXKBRAEGAAgtJXLwAUosLjukAcwGjgc.png" alt="">
        <span>025-8666-2644</span>
      </div>
  
      <div class="qrcode">
        <img src="../assets/images/qrcode_for_gh_7acbc4b483d4_258.jpg" alt="">
      </div>
    </div>
  
    <div class="copyright">
      @2017 - 版权所有
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
@media (min-width: 600px) {
  .home-footer {
    margin-top: 100px;
    height: 400px;
    color: #bbb;
    background-color: #1f2025;


    .info {
      padding-top: 20px;
      width: 100%;
      display: flex;
      .logo {
        margin: 5rem 0;
        flex: 1;
      }

      .contract {
        margin: 5rem 0;
        flex: 1;
        span {
          margin-left: 20px;
          font-size: 2rem;
        }
      }

      .qrcode {
        flex: 1;
      }
    }

    .copyright {
      width: 200px;
      margin: 40px auto;
      color: #666;
    }
  }
}

@media (max-width: 600px) {
  .home-footer {
    margin-top: 100px;
    height: 680px;
    color: #bbb;
    background-color: #1f2025;

    .info {
      padding-top: 20px;
      width: 100%;
      .logo {
        margin: 5rem 0;
      }

      .contract {
        margin: 5rem 0;

        span {
          margin-left: 20px;
          font-size: 2rem;
        }
      }
    }

    .copyright {
      width: 200px;
      margin: 40px auto;
      color: #666;
    }
  }
}
</style>
