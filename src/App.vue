<template>
<the-header></the-header>
<!-- 绑定每次切换页面id -->
    <router-view v-slot="slotProps">
        <!-- 设置动画参数 -->
        <transition name="route" mode="out-in">
            <!-- 绑定当前切换页面触发动画 -->
            <component :is="slotProps.Component"></component>
        </transition>
    </router-view>
</template>

<script>
import TheHeader from './component/layout/TheHeader.vue'

export default {
    components: {
        TheHeader
    },
    computed: {
        didLogout () {
            return this.$store.getters.isLogout
        }
    },
    created () {
     this.$store.dispatch('tryLogin')
    },
    // 观察者  观察当前用户是否到期注销需重新登录
    watch: {
        // 如果当前值存在且改变了则重定向
    didLogout (curValue, oldValue) {
        if (curValue && curValue !== oldValue) {
            this.$router.replace('/coaches')
        }
    }
    }
}
</script>

<style>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.route-enter-from,
.route-leave-to{
    opacity: 0;
    transform: translateY(-30px)
}
.route-enter-active{
    transition: all 0.3s ease-in
}
.route-leave-active{
    transition: all 0.3s ease-out
}
.route-enter-to,
.route-leave-from{
    opacity: 1;
    transform: translateY(0)
}
</style>
