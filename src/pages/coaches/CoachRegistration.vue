<template>
    <section>
        <coach-base>
        <h2>Register as a coach</h2>
        <!-- 触发自定义事件 -->
        <coach-form @set-add="setadd"></coach-form>
        </coach-base>
    </section>
</template>

<script>
import CoachForm from '../../component/coaches/CoachForm.vue'
export default {
    components: {
        CoachForm
    },
    methods: {
        // 发送到index总商店data格式
        setadd (data) {
            this.$store.dispatch('Coaches/registerCoach', data)
            // 提交表单后重定向返回主页
            this.$router.replace('/coaches')
        }
    }
}
</script>
