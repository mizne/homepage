<template>
	<div class="about el-row">
      <div class="content el-col-offset-12 el-col-11">
        <div class="header">
          关于我们
        </div>

        <div class="text-area">
          专注品牌事业十余年，是一家兼具国际视野、创新动力、全方位跨平台的品牌咨询与设计整合服务公司。公司业务涉及大数据、智能多媒体、物联网、云计算等。目前已为上百家国内优秀企业及全球500强企业提供了专业有效的品牌传播解决方案。
        </div>

        <div class="btn-area">
          <div class="more-btn" @click="toMore()">
            MORE
          </div>
        </div>
      </div>
  </div>
</template>

<script>
	export default {
		name: 'IndexAbout',
    methods: {
      toMore() {
        this.$router.push({name: 'about'})
      }
    }
	}
</script>

<style scoped lang="scss">
  .about {
    height: 605px;
    margin-top: 2rem;
    background: url(../assets/images/AD0I-KXKBRACGAAgo5XLwAUozsfIuQcw-w443QQ.jpg) no-repeat top;

    .content {
      padding-top: 150px;

      .header {
        text-align: left;
        font-size: 1.5rem;
      }

      .text-area {
        margin-top: 40px;
        color: #666;
        line-height: 2.5rem;
      }

      .btn-area {
        margin-top: 100px;
        .more-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          width: 200px;
          border-radius: 20px;
          border: 1px solid #ccc;
          cursor: pointer;

          &:hover {
            border: 1px solid #666;
          }
        }
      }
    }
  }
</style>