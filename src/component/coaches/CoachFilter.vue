<template>
<div>
    <coach-base>
    <h2>Find Your Coach</h2>
    <span>
            <input type="checkbox" id="joker" checked @change="setFilter">
            <label for="joker">JOKER</label>
    </span>
    <span>
        <input type="checkbox" id="again" checked @change="setFilter">
        <label for="again">Again</label>
    </span>
    <span>
        <input type="checkbox" id="rose" checked @change="setFilter">
        <label for="rose">Rose</label>
    </span>
    </coach-base>
</div>
</template>

<script>
export default {
    // 发出的自定义事件
    emits: ['set-change'],
    data () {
        return {
            filters: {
                joker: true,
                again: true,
                rose: true
            }
        }
    },
    methods: {
        // 获取当前区分的状态
        setFilter (event) {
            const inputId = event.target.id
            const inputCheked = event.target.checked
            const updataedFilter = {
                // 复制一份filters
                ...this.filters,
                [inputId]: inputCheked
            }
            this.filters = updataedFilter
            this.$emit('set-change', updataedFilter)
        }
    }
}
</script>
