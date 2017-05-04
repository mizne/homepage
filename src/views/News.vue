<template>
  <div class="news">
    <div class="carousel-area">
    </div>
    <div class="dynamic">
      <div class="abstract">
        <div class="header">最新动态</div>
        <div class="flag"></div>
        <div class="content">
          多年来我们始终专注于高水准的品牌整合服务，立足北京放眼全球我们了解市场，更善于将创新运用其中绝妙的创意配以高水平的执行及传播渠道的有效整合使我们跻身国内顶尖品牌顾问公司之列。
        </div>
      </div>
      <div class="item-row el-row" v-for="newList in newses">
        <div class="item el-col-8" v-for="news in newList">
          <div class="image">
            <img :src="news.src" alt="">
          </div>
          <div class="header">
            {{news.header}}
          </div>
          <div class="content">
            {{news.content}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'News',
  data() {
    return {
      msg: 'News.vue',
      newses: [
        [{
          src: 'http://11703036.s61i.faiusr.com/2/AD0I-KXKBRACGAAggPvLwAUo2-qRRjC3Aji5AQ.jpg',
          header: '让认知探索带来更好业务成果',
          content: '中心旨在推动中国旅游信息化领域内学术研究、支撑旅游公共信息服务、促进传统旅游产业升级、旅游信息化专业人才培养四大范式...'
        }, {
          src: 'http://11703036.s61i.faiusr.com/2/AD0I-KXKBRACGAAgg-vLwAUo-OGgoQQwtwI4uQE.jpg',
          header: '永洪科技创始人何春涛：金融...',
          content: '如果说金融是经济的血液，那么数据就相当于金融的血液。没有数据支持的金融活动就如同无源之水、无本之木，带有极大的盲目...'
        }, {
          src: 'http://11703036.s61i.faiusr.com/2/AD0I-KXKBRACGAAghfvLwAUosPrQBTC3Aji5AQ.jpg',
          header: 'PP营销--2014年最火热的...',
          content: '随着移动互联网时代的到来和移动设备的广泛应用，使得APP应用伴随智能手机一道快速成长，也成为了颠覆原有行业模式的一股...'
        }],
        [{
          src: 'http://11703036.s61i.faiusr.com/2/AD0I-KXKBRACGAAgivvLwAUotK613gMwtwI4uQE.jpg',
          header: '移动APP逐渐改变了人们的生...',
          content: '现如今，移动互联网的飞速发展，则开始切切实实的改变我们的生活、工作和思维方式，各种层出不穷的APP逐渐改变着我们的...'
        }, {
          src: 'http://11703036.s61i.faiusr.com/2/AD0I-KXKBRACGAAgmIbMwAUosfaE-QIwtwI4uQE.jpg',
          header: '当今互联网发展趋势',
          content: '互联网是个人、商家、组织、媒体比较追捧的一个领域，它不仅可以提供个人、商家在线查询资料、休闲娱乐，同时还提供个人...'
        }, {
          src: 'http://11703036.s61i.faiusr.com/2/AD0I-KXKBRACGAAgj-vLwAUomt6gmAcwtwI4uQE.jpg',
          header: '"互联网+" 未来发展十大趋势',
          content: '从现状来看，"互联网+"处于初级阶段，是个都在热谈但是没有落实的理论阶段。各领域针对"互联网+"都会做一定的论证与...'
        }]
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.news {
  .carousel-area {
    width: 100%;
    height: 450px;
    cursor: default;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    overflow: hidden;
    display: block;
    outline: none;
    margin: 0px auto;
    position: relative;
    z-index: 1;
    background-image: url(../assets/images/AD0I-KXKBRACGAAgkvvLwAUo9OfDrQQwgA84wgM.jpg)
  }
  .dynamic {
  	margin: 40px auto;
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
    .item-row {
      width: 80%;
      margin: 20px auto;
      .item {
        color: #666;
        .header {
          margin-top: 10px;
          font-size: 1.2rem;
        }
        .content {
          margin: 10px auto;
          width: 80%;
          line-height: 1.5rem;
        }
        &:hover {
          border: 1px solid #e9e9e9;
          box-shadow: 0 2px 6px #ccc;
        }
      }
    }
  }
}
</style>
