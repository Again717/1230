export default {
    requests (state, _, _2, rootGetters) {
        const coachId = rootGetters.userId
        // 筛选对应id 添加邮箱
        return state.requests.filter(req => req.coachId === coachId)
    },
    hasrequests (_, getters) {
        return getters.requests && getters.requests.length > 0
    }
}