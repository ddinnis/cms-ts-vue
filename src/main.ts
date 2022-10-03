import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/index.css'
import 'normalize.css'

import router from './router'
import store, { setupStore } from './store'

import registerApp from './global'
import localCache from '@/utils/cache'

localCache.setCache('name', 'coderwhy')
localCache.setCache('password', '123456')
const app = createApp(App)
registerApp(app)
setupStore()
app.use(router).use(store).mount('#app')
