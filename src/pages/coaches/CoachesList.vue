<template>
<div>
<!-- !!error 两个感叹号转换为字符串  常用来判断类型-->
<base-dialog :show="!!error" @close="haserror" title="An error">
<p>{{error}}</p>
</base-dialog>
<section>
      <coach-filter @set-change="setFilter"></coach-filter>
</section>
<coach-base>
    <section>
    </section>
    <section>
        <!-- 点击设置为true强制刷新 -->
        <base-button @click="loadCoaches(true)">Refresh</base-button>
        <base-button link to="/login?redirect=register" v-if="!istoken">Login to</base-button>
        <base-button v-if="istoken && !isUserId && !isLoading" link to='/register'>Register as Coach</base-button>
    </section>
    <base-spinner v-if="isLoading"></base-spinner>
    <div class="coach-item" v-else-if="hasCoaches">
    <ul>
        <!-- 循坏总商店数据 -->
        <coach-item v-for="coach in fistCoatch"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :areas="coach.areas"
        :description='coach.description'
        :rate ='coach.hourlyRate'
        >
        </coach-item>
    </ul>
</div>
 <h3 v-else>No coaches found.</h3>
</coach-base>
</div>
</template>

<script>
import CoachItem from '../../component/coaches/CoachItem.vue'
import CoachFilter from '../../component/coaches/CoachFilter.vue'

export default {
data () {
    return {
        error: null,
        isLoading: false,
        setFilteractive: {
            joker: true,
            again: true,
            rose: true
        }
    }
},
components: {
    CoachItem,
    CoachFilter
},
    computed: {
        istoken () {
            return this.$store.getters.istoken
        },
        isUserId () {
            return this.$store.getters['Coaches/isUserId']
        },
        fistCoatch () {
            // 获取总商店数据
           const coatches = this.$store.getters['Coaches/coaches']
           // 进行筛选
           return coatches.filter((coach) => {
            // includes('元素', 起始位置) js数组方法,查找是否存在,Boolean格式
                if (this.setFilteractive.joker && coach.areas.includes('joker')) {
                    return true
                }
                if (this.setFilteractive.again && coach.areas.includes('agian')) {
                    return true
                }
                if (this.setFilteractive.rose && coach.areas.includes('rose')) {
                    return true
                }
                return false
           })
        },
    hasCoaches () {
        return !this.isLoading && this.$store.getters['Coaches/hasCoaches']
    }
    },
    // 生命周期,进入页面刷新数据
    created () {
        this.loadCoaches()
    },
    methods: {
        setFilter (updataedFilter) {
              this.setFilteractive = updataedFilter
        },
    // 刷新数据
    // 由于一下方法调用了生命周期,初始化设置为false,在点击按钮后变为true
       async loadCoaches (newflushed = false) {
            this.isLoading = true
            try {
          await this.$store.dispatch('Coaches/loadCoaches', { forlastFeach: newflushed })
            } catch (error) {
                this.error = error.message || 'Something went wrong'
            }
             this.isLoading = false
        },
        haserror () {
             this.error = null
        }
    }
}
</script>

<style scoped>
.coach-item{
    display: flex;
    justify-content: center;
}

ul{
    width: 450px;
    height: 100%;
    list-style-type: none;
}
</style>