import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import './assets/css/styles.scss';
import './assets/css/variables.scss';
 // element-ui的全部组件
import ElementUI from 'element-ui';
// element-ui的css
import 'element-ui/lib/theme-chalk/index.css'
// 使用elementUI
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
