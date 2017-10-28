<template>
  <div class="ruanjianjieshao-chengzhaodaili" :style="{'background-image': 'url('+daili.image+')'}">
    <div class="content">
      <div class="header">
        {{daili.title}}
      </div>

      <div class="description">
        <div class="first-line">
          {{daili.desc1}}
        </div>
        <div class="last-line">
          {{daili.desc2}}
        </div>

        <div class="btn">
          <el-button>更多详情</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chengzhaodaili',
  props: {
    daili: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/mixins';

@media (max-width: 600px) {
  .ruanjianjieshao-chengzhaodaili {
    .content {
      width: 80%;
    }
  }
}

@media (min-width: 600px) {
  .ruanjianjieshao-chengzhaodaili {
    .content {
      width: 50%;
    }
  }
}
.ruanjianjieshao-chengzhaodaili {
  position: relative;
  margin-top: 50px;
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    .header {
      font-size: 2.5rem;
      color: $whiteText;
    }
    .description {
      margin-top: 30px;
      padding: 30px 0;
      font-size: 2rem;
      color: $whiteText;
      line-height: 40px;
      border-top: 1px solid $whiteText;
    }
    .btn {
      margin-top: 50px;
      .el-button {
        font-size: 1.5rem;
        color: $whiteText;
        background-color: $greyBg;
      }
    }
  }
}
</style>
