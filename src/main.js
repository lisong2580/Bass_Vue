// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入jquery
import 'jquery'
// 引入axios
import axios from 'axios'
axios.defaults.withCredentials=true
// import VUEaxios from 'vue-axios'

// 引入echarts
import echarts from 'echarts'
import 'echarts/map/js/world.js'
import 'echarts/map/js/china.js'
import JSON from 'echarts/map/json/province/guizhou.json';

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$axios = axios
// Vue.prototype.$VueAxios= VueAxios

Vue.prototype.$fetch=Fetch;
// this.$fetch("")

Vue.prototype.$echarts = echarts
echarts.registerMap('贵州', JSON);

import Fetch from 'fetch-jsonp'
import FetchJsonp from "fetch-jsonp"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
