import { createApp } from "vue"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App'

const container = document.createElement("div")
document.body.appendChild(container)

createApp(App).use(ElementPlus).mount(container)
