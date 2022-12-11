import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/index.js'

import axios from '@/plugins/axiosInstance.js'
import VueAxios from 'vue-axios'

import CoachBase from './component/UI/CoachBase.vue'
import BaseBadge from './component/UI/BaseBadge.vue'
import BaseButton from './component/UI/BaseButton.vue'
import BaseSpinner from './component/UI/BaseSpinner.vue'
// import BaseDialog from './component/UI/BaseDialog.vue'

// defineAsyncComponent只有在需要组件时才调用
const BaseDialog = defineAsyncComponent(() => import('./component/UI/BaseDialog.vue'))

const app = createApp(App)
app.component('coach-base', CoachBase)
app.component('base-badge', BaseBadge)
app.component('base-button', BaseButton)
app.component('base-spinner', BaseSpinner)
app.component('base-dialog', BaseDialog)

app.use(store)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
