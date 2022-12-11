<template>
<div>
<!-- 双感叹号测试为Boolean类型 如果字符串为true,没有为false -->
<base-dialog :show="!!error" @close="hasrequests">
<p>{{ error }}</p>
</base-dialog>
    <section>
        <coach-base>
            <!-- 判断只有在数据加载的时候,显示微调器 -->
             <base-spinner v-if="isrequests"></base-spinner>
            <ul v-else-if="hasreq && !isrequests">
                <requests-item v-for=" reqs in req "
                :key="reqs.id"
                :id="reqs.id"
                :email="reqs.email"
                :message="reqs.message"></requests-item>
            </ul>
            <p v-else>This is not requests</p>
        </coach-base>
    </section>
</div>
</template>

<script>
import RequestsItem from './RequestsItem.vue'
export default {
    data () {
        return {
            isrequests: false,
            error: null
        }
    },
    components: {
        RequestsItem
    },
    computed: {
        req () {
            return this.$store.getters['requests/requests']
        },
        hasreq () {
            return this.$store.getters['requests/hasrequests']
        }
    },
    // 生命周期加载页面完成前加载数据
    created () {
        this.loadrequests()
    },
    methods: {
       async loadrequests () {
        // 判断数据在加载时显示微调器
        this.isrequests = true
        try {
          await this.$store.dispatch('requests/fetchRequests')
        } catch (error) {
            this.error = error.message || 'is not message'
        }
        // 数据加载完微调器不显示
        this.isrequests = false
        },
      // 将error设置为没有字符串,则为false不显示弹窗警告
    hasrequests () {
        this.error = null
    }
    }
}
</script>
