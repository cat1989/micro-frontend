import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

Vue.use(ElementUI)
Vue.use(VueRouter)

let instance = null

export function bootstrap() {

}

export function mount({
    container,
    base,
}) {
    const router = new VueRouter({
        routes,
        base,
        mode: 'history',
    })
    router.afterEach((to, from) => {
        const customEvent = new CustomEvent("beforeRouteLeave")
        window.dispatchEvent(customEvent)
    })
    instance = new Vue({
        router,
        render: (h) => h(App),
    }).$mount(container)
}

export function unmount() {
    instance.$destroy()
    instance.$el.remove()
}
