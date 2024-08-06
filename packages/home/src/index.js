import Vue from 'vue'
import router from '@/router'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

const container = document.createElement("div")
document.body.appendChild(container)

new Vue({
    router,
    render: (h) => h(App),
}).$mount(container)
