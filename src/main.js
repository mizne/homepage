// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import FastClick from 'fastclick'
// 引入vue-amap
import AMap from 'vue-amap';

import 'animate.css'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(ElementUI)
Vue.use(AMap);

AMap.initAMapApiLoader({
  key: '2eed9fcfa433b882686a80a66f9dbce1',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
