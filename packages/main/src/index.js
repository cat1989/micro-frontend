import { createApp } from 'vue'
import App from './App'
import ElementPlus from 'element-plus'
import '@/assets/styles/normalize.scss'
import 'element-plus/dist/index.css'

const container = document.createElement("div")
document.body.appendChild(container)

createApp(App).use(ElementPlus).mount(container)
