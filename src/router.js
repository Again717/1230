import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
// import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
// import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestsReceive from './pages/requests/RequestsReceive.vue'
import NotFound from './pages/NotFound.vue'
// 登录注册
import store from './store/index.js'
import UserAuth from './pages/auth/UserAuth.vue'
import LoginAuth from './pages/auth/LoginAuth.vue'

// 如果用户没使用到该页面组件,则不调用
// 加快网页速度
const CoachDetail = defineAsyncComponent(() =>
import('./pages/coaches/CoachDetail.vue'))
const CoachRegistration = defineAsyncComponent(() =>
import('./pages/coaches/CoachRegistration.vue'))
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
        path: '/coaches/:id',
        // 访问id路由视图
        props: true,
        component: CoachDetail,
        children: [
            { path: 'contact', component: ContactCoach }
        ]
    },
    { path: '/register', component: CoachRegistration, meta: { register: true } },
    { path: '/requests', component: RequestsReceive, meta: { register: true } },
    // 用户登录注册
    { path: '/auth', component: UserAuth, meta: { register: true } },
    { path: '/login', component: LoginAuth, meta: { registerUnauth: true } },
    // 当输入错误网站地址
    { path: '/:notFound(.*)', component: NotFound }
    ]
})
// 设置用户没有登录时不允许访问其他地方
router.beforeEach(function (to, _, next) {
    if (to.meta.register && !store.getters.istoken) {
        next('/login')
    } else if (to.meta.registerUnauth && store.getters.istoken) {
        next('/coaches')
    } else {
        next()
    }
})

export default router