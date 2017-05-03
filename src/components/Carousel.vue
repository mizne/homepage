<template>
	<div class="carousel">
      <el-carousel :interval="4000" height="650px">
        <el-carousel-item v-for="item in images" :key="item">
          <div class="image" :style="{'background': 'url(' + item.url + ')'}"></div>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
	export default {
		name: 'carousel',
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
      background-position: 50% 50%;
      background-repeat: no-repeat;
      overflow: hidden;
      display: block;
      outline: none;
      margin: 0px auto;
      position: relative;
      z-index: 1;
    }
  }
</style>