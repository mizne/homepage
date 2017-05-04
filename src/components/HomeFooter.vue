<template>
  <div class="home-footer">
    <div class="info el-row">
      <div class="logo el-col-8">
        <h2 style="margin-top: 0;">腾宣威</h2>
      </div>
      <div class="contract el-col-offset-2 el-col-6">
        <img src="http://11703036.s61i.faiusr.com/4/AD0I-KXKBRAEGAAgtJXLwAUosLjukAcwGjgc.png" alt="">
        <span>025-8666-2644</span>
      </div>

      <div class="qrcode el-col-offset-2 el-col-6">
        <img src="../assets/qrcode_for_gh_7acbc4b483d4_258.jpg" alt="">
      </div>
    </div>

    <div class="copyright">
      @2017 - 版权所有
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'home-footer'
    }
  }
}
</script>

<style scoped lang="scss">
.home-footer {
  height: 400px;
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

</style>
