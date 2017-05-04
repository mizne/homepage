<template>
  <div class="advantage">
    <div class="abstract">
      <div class="header">
        选择我们的<span class="big-font">6</span>大优势
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
  name: 'IndexAdvantage',
  data() {
    return {
      advantages: [{
        header: '组件式WEB系统',
        content: '程序采用APP方式设计，任何功能均为独立组件，可拆除或组装功能，结构简单并且利于扩展与开发。',
        src: require('../assets/images/cpjs1.png')
      }, {
        header: '灵活的模板标签',
        content: '拥有灵活的标签系统，让您能够快速的在编辑器中制作模板，适合前端美工设计。',
        src: require('../assets/images/cpjs2.png')
      }, {
        header: '快速安装，数据同步',
        content: '安装只需将文件放进指定位置，即可进行一键同步安装，已有数据无缝同步，如用户操作等状态都将无缝同步到手机端中。',
        src: require('../assets/images/cpjs3.png')
      }, {
        header: 'HTML5',
        content: '万维网的核心语言、标准通用标记语言下的一个应用超文本标记语言(HTML)的第五次重大修改。',
        src: require('../assets/images/cpjs5.png')
      }, {
        header: 'CSS3',
        content: 'CSS技术的升级版本，CSS3语言开发是朝着模块化发展的。以前的规范实在是太庞大而且比较复杂。',
        src: require('../assets/images/cpjs6.png')
      }, {
        header: 'ICONFONT',
        content: '由阿里巴巴UX部门推出的矢量图标管理网站，也是国内首家推广Webfont影视图标的平台。',
        src: require('../assets/images/cpjs4.png')
      }]
    }
  }
}
</script>
<style scoped lang="scss">
.advantage {
  height: 1890px;
  margin: 0 5rem;
  .abstract {
    height: 330px;
    padding-top: 100px;
    .header {
      font-size: 2rem;
      .big-font {
        margin: 0 10px;
        font-style: italic;
        color: red;
        font-size: 4rem;
      }
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
    height: 250px;
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
