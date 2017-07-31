<template>
	<div class="about el-row">
      <div class="content el-col-offset-12 el-col-11">
        <div class="header">
          关于我们
        </div>

        <div class="text-area">
          专注品牌事业，建立以南京基地为服务中心，分别在苏南、苏北、深圳、上海等地设立分支机构和网络服务中心，业务涉及国内大部分地区。 目前已拥有有超过千万级的应用服务流量，涵盖国内各类客户，为他们提供三大类综合解决方案：企业管理  品牌推广  营销策划。
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
    height: 605;
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