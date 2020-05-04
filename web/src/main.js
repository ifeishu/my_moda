import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false


// import style
import 'swiper/dist/css/swiper.css'
import './assets/iconfont/iconfont.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
import Card from './components/Card.vue'
Vue.component('m-card',Card);

import CardList from './components/CardList.vue'
Vue.component('m-list-card',CardList);

new Vue({
  router,
 
  render: h => h(App)
}).$mount('#app')
