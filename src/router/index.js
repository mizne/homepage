import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'

import Ruanjianjieshao from '@/views/Ruanjianjieshao'
import Zhihuishangquan from '@/views/Zhihuishangquan'
import Zhihuihuizhan from '@/views/Zhihuihuizhan'
import Shangjiaban from '@/views/Shangjiaban'
import Liansuoban from '@/views/Liansuoban'
import Shangjialianmeng from '@/views/Shangjialianmeng'
import Jiaoyupeixun from '@/views/Jiaoyupeixun'
import Jiudianshangcheng from '@/views/Jiudianshangcheng'
import Chaoshishangcheng from '@/views/Chaoshishangcheng'

import Ruanjiangongneng from '@/views/Ruanjiangongneng'
import Yingjianjieshao from '@/views/Yingjianjieshao'
import Kehuanli from '@/views/Kehuanli'
import Qudaodaili from '@/views/Qudaodaili'
import Dingzhikaifa from '@/views/Dingzhikaifa'
import Gongsijianjie from '@/views/Gongsijianjie'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/ruanjianjieshao',
    name: 'ruanjianjieshao',
    component: Ruanjianjieshao
  }, {
    path: '/zhihuishangquan',
    name: 'zhihuishangquan',
    component: Zhihuishangquan
  }, {
    path: '/zhihuihuizhan',
    name: 'zhihuihuizhan',
    component: Zhihuihuizhan
  }, {
    path: '/shangjiaban',
    name: 'shangjiaban',
    component: Shangjiaban
  }, {
    path: '/liansuoban',
    name: 'liansuoban',
    component: Liansuoban
  }, {
    path: '/shangjialianmeng',
    name: 'shangjialianmeng',
    component: Shangjialianmeng
  }, {
    path: '/jiaoyupeixun',
    name: 'jiaoyupeixun',
    component: Jiaoyupeixun
  }, {
    path: '/jiudianshangcheng',
    name: 'jiudianshangcheng',
    component: Jiudianshangcheng
  }, {
    path: '/chaoshishangcheng',
    name: 'chaoshishangcheng',
    component: Chaoshishangcheng
  }, {
    path: '/ruanjiangongneng',
    name: 'ruanjiangongneng',
    component: Ruanjiangongneng
  }, {
    path: '/yingjianjieshao',
    name: 'yingjianjieshao',
    component: Yingjianjieshao
  }, {
    path: '/kehuanli',
    name: 'kehuanli',
    component: Kehuanli
  }, {
    path: '/qudaodaili',
    name: 'qudaodaili',
    component: Qudaodaili
  }, {
    path: '/dingzhikaifa',
    name: 'dingzhikaifa',
    component: Dingzhikaifa
  }, {
    path: '/gongsijianjie',
    name: 'gongsijianjie',
    component: Gongsijianjie
  }]
})
