import { createApp } from 'vue'
import routes from '@/router/routes'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

let instance = null

export function bootstrap() {

}

export function mount({
    container,
    base,
}) {
    const router = createRouter({
        routes,
        history: createWebHistory(base),
    })
    instance = createApp(App)
    instance.use(ElementPlus).use(router).mount(container)
}

export function unmount() {
    instance.unmount()
    // instance.$el.remove()
}
