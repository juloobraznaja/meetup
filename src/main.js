import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import AuthModule from './modules/AuthModule/AuthModule'
import MainModule from './modules/MainModule/MainModule'

// Vue.config.productionTip = false

Vue.use(AuthModule, { store, router })
Vue.use(MainModule, { router })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#root')
