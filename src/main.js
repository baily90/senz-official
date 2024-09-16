import App from './App.vue'
import router from './router'
import { store } from './stores'
import 'default-passive-events'
import Vconsole from 'vconsole'
import './main.less'

const app = createApp(App)

if (import.meta.env.VITE_BUILD_ENV !== 'PRO') {
  new Vconsole()
}

app.use(store)
app.use(router)

app.mount('#app')
