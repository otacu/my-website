import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-googlemaps/dist/vue-googlemaps.css'
import VueGoogleMaps from 'vue-googlemaps'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.prototype.axios = axios;

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
    load: {
        apiKey: '你的apiKey',
        libraries: ['places'],
        useBetaRenderer: false,
        // true代表中国区,false代表全球区
        loadCn: window.localStorage.getItem("lang") == "zh-CN",
        callBack: function() {  // 回调

        }
    }
});

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
