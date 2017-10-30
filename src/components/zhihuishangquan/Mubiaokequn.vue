<template>
  <div class="zhihuishangquan-mubiaokequn">
    <div class="header">
      目标客群
    </div>

    <div class="content">
      <div class="image-container">
        <img src="../../assets/images/zhihuishangquan/shangyezongheti.png" alt="">
      </div>
      <div class="image-container">
        <img src="../../assets/images/zhihuishangquan/shangyejie.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'General',
  components: {}
}
</script>

<style scoped lang="scss">
@media (max-width: 600px) {
  .zhihuishangquan-mubiaokequn {
    .content {
      flex-direction: column;
      padding: 0 20px;
      .image-container {
        &:not(:first-child) {
          margin-top: 30px;
        }
      }
    }
  }
}

@media (min-width: 600px) {
  .zhihuishangquan-mubiaokequn {
    .content {
      .image-container {
        &:not(:first-child) {
          margin-left: 5%;
        }
      }
    }
  }
}

.zhihuishangquan-mubiaokequn {
  margin-top: 40px;

  .content {
    margin-top: 50px;
    display: flex;
    .image-container {
      img {
        transition: transform 0.3s;
      }
      &:hover img {
        transform: scale(1.05);
      }
    }
  }
}
</style>
