<template>
  <div class="contract">
    <div class="carousel-area"></div>
    <div class="info">
      <div class="email">
        <div class="logo">
          <img src="../assets/images/AD0I-KXKBRAEGAAgg47MwAUo8tuz5AYwajho.png" alt="">
        </div>
        <div class="text">
          tenswin@126.com
        </div>
      </div>
      <div class="address">
        <div class="logo">
          <img src="../assets/images/AD0I-KXKBRAEGAAg-43MwAUokLSU4gcwajho.png" alt="">
        </div>
        <div class="text">
          江苏省南京市建邺区金润国际广场1617
        </div>
      </div>
      <div class="tel">
        <div class="logo">
          <img src="../assets/images/AD0I-KXKBRAEGAAg-I3MwAUorf_LvAIwajho.png" alt="">
        </div>
        <div class="text">
          025-8666-2644
        </div>
      </div>
    </div>
    <div class="amap-wrapper">
      <el-amap :vid="'amap-vue'" :center="center" :zoom="zoom" :map-manager="amapManager" :plugin="plugin" :events="events">
        <el-amap-marker v-for="marker in markers" :key="marker.$index" :position="marker"></el-amap-marker>
        <el-amap-info-window v-for="window in windows" :key="window.$index" :position="window.position" :content="window.content" :open="window.open" :events="window.events">
  
        </el-amap-info-window>
      </el-amap>
    </div>
  </div>
</template>
<script>
import {
  AMapManager
} from 'vue-amap';
let amapManager = new AMapManager();

export default {
  name: 'Contract',
  data() {
    return {
      msg: 'Contract.vue',
      vid: 'amap-vue-1',
      zoom: 16,
      center: [118.7294089794, 31.9937003596],
      events: {
        'moveend': () => {
          let mapCenter = this.amapManager.getMap().getCenter();
          this.center = [mapCenter.getLng(), mapCenter.getLat()];
        },
        'zoomchange': () => {
          this.zoom = this.amapManager.getMap().getZoom();
        },
        'click': (e) => {
          alert('map clicked');
        }
      },
      plugin: ['ToolBar', {
        pName: 'MapType',
        defaultType: 0,
        events: {
          init(o) {
            console.log(o);
          }
        }
      }],
      amapManager: amapManager,
      markers: [
        [118.7294089794, 31.9937003596]
      ],
      windows: [
        {
          position: [118.7294089794, 31.9942004000],
          content: '江苏省南京市建邺区金润国际广场1617',
          open: true,
          events: {
            close() {
              console.log('close infowindow');
            }
          }
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
@media (min-width: 600px) {
  .contract {
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
      background-image: url(../assets/images/AD0I-KXKBRACGAAgiI7MwAUoioWd6AYwgA84wgM.jpg);
    }
    .info {
      width: 80%;
      margin: 40px auto;
      display: flex;

      .email {
        flex: 1;
      }

      .address {
        flex: 1;
      }

      .tel {
        flex: 1;
      }
      .text {
        margin-top: 20px;
      }
    }
    .amap-wrapper {
      width: 80%;
      margin: 40px auto;
      height: 500px;
    }
  }
}

@media (max-width: 600px) {
  .contract {
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
      background-image: url(../assets/images/AD0I-KXKBRACGAAgiI7MwAUoioWd6AYwgA84wgM.jpg);
    }
    .info {
      width: 100%;
      margin: 40px auto;
      display: flex;

      .email {
        flex: 1;
      }

      .address {
        flex: 1;
      }

      .tel {
        flex: 1;
      }
      .text {
        margin-top: 20px;
      }
    }
    .amap-wrapper {
      width: 80%;
      margin: 40px auto;
      height: 500px;
    }
  }
}
</style>
