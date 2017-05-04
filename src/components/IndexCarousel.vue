<template>
	<div class="carousel">
      <el-carousel :interval="4000" height="650px">
        <el-carousel-item v-for="item in images" :key="item.$index">
          <div class="image" :style="{'background-image': 'url(' + item.url + ')'}">
            <div class="header">
              {{item.header}}
            </div>
            <div class="content">
              {{item.content}}
            </div>
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
  .carousel {

    .image {
      height: 650px;
      cursor: default;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      display: block;
      outline: none;
      margin: 0px auto;
      position: relative;
      z-index: 1;

      .header {
        padding-top: 10rem;
        font-size: 3rem;
        font-weight: 700;
        color: #fff;
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