export default {
    // 添加新的数据到总商店
    registerCoaches (state, payload) {
        state.coaches.push(payload)
    },
    // 将新增数据变为总state.coaches的数据
    setCoaches (state, payload) {
        state.coaches = payload
    },
    lastFeachtime (state) {
        state.lastFeach = new Date().getTime()
    }
}
