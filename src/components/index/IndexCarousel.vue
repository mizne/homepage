<template>
	<div class="carousel">
      <el-carousel :interval="4000">
        <el-carousel-item v-for="item in images" :key="item.$index">
          <div class="image" :style="{'background-image': 'url(' + item.url + ')'}">
            <!-- <div class="header">
              {{item.header}}
            </div>
            <div class="content">
              {{item.content}}
            </div> -->
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
  name: 'IndexCarousel',
  props: {
    images: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
@media (max-width: 600px) {
  .carousel {
    .image {
      height: 300px;
    }
  }
}

@media (min-width: 600px) {
  .carousel {
    .image {
      height: 700px;
    }
  }
}

.carousel {
  .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow: hidden;

    .header {
      padding-top: 10rem;
      font-size: 3rem;
      font-weight: 700;
      color: #fff;
      line-height: 60px;
    }

    .content {
      width: 80%;
      margin: 1rem auto;
      font-size: 24px;
      color: #fff;
      line-height: 2.4rem;
    }
  }
}
</style>
