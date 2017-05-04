<template>
  <div class="advantage">
    <div class="abstract">
      <div class="header">
        选择我们的4大优势
      </div>
      <div class="flag">
      </div>
      <div class="content">
        我们已定制多套解决方案，助您轻松跨入"互联网+"时代，存储、计算、监控、安全你所需要的一切云产品，我们均能以业界领先的水平为您提供。
      </div>
    </div>
    <div class="advantage-area el-row" v-for="advantage in advantages">
      <div class="content-area el-col-10">
        <div class="header">{{advantage.header}}</div>
        <div class="text">{{advantage.content}}</div>
      </div>
      <div class="logo-area el-col-offset-4 el-col-10">
        <img :src="advantage.src">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'service',
  data() {
    return {
      advantages: [{
        header: '高稳定性',
        content: '用户数据的存储支撑了国内近千PB的用户数据',
        src: ('http://11703036.s61i.faiusr.com/4/AD0I-KXKBRAEGAAgwJXLwAUoh52YigUwPDg8.png')
      }, {
        header: '安全性',
        content: '多层沙箱防护及监控系统有效保障用户数据安全，让您更放心地存储数据',
        src: ('http://11703036.s61i.faiusr.com/4/AD0I-KXKBRAEGAAgwpXLwAUozNix6gQwPDg8.png')
      }, {
        header: '全球覆盖',
        content: '你可以将文件放置在对业务最有利的区域让用户实现快速高性能访问',
        src: ('http://11703036.s61i.faiusr.com/4/AD0I-KXKBRAEGAAgxZXLwAUo6LK07wUwPDg8.png')
      }, {
        header: '成本效益高',
        content: '我们有竞争力的定价匹配策略意味着你能借助云存储获得巨大的收益',
        src: ('http://11703036.s61i.faiusr.com/4/AD0I-KXKBRAEGAAgyJXLwAUo0oeJiAcwPDg8.png')
      }]
    }
  }
}
</script>
<style scoped lang="scss">
.advantage {
  height: 1230px;
  margin: 0 5rem;
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
  .advantage-area {
    height: 200px;
    width: 500px;
    margin: 0 auto;

    .content-area {
      color: #666;
      .header {
        font-size: 1.5rem;
      }

      .text {
        margin-top: 20px;
        line-height: 2rem;
      }
    }
  }
}
</style>
