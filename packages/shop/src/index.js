import { createApp } from 'vue'
import router from '@/router'
import App from './App'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

const container = document.createElement("div")
document.body.appendChild(container)

createApp(App).use(ElementPlus).use(router).mount(container)
