import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import App from './App.vue'
import i18n from './locales'
import router from './router'
import scui from './scui'
import store from './store'
import 'jsoneditor'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus, { size: 'default' })
app.use(i18n)
app.use(scui)

//挂载app
app.mount('#app')
