export default {
    coaches (state) {
        return state.coaches
    },
    // 至少拥有一个数据,否侧返回为false;
    hasCoaches (state) {
        return state.coaches && state.coaches.length > 0
    },
    isUserId (_, state, _2, rootGetters) {
        const coaches = state.coaches
        // 获取根目录数据
        const userId = rootGetters.userId
        // some数组方法判断总商店中是否添加新的数据
        // 如果其中一个id正确，则全部返回true,反之false
        return coaches.some(coach => coach.id === userId)
    },
    // 检测当前时间减去最后一次刷新时间是否超过1分钟,有则true,反之false
    newlastFeach (state) {
        const lastFeach = state.lastFeach
        const newlastFeach = new Date().getTime()
        return (newlastFeach - lastFeach) / 1000 > 60
    }
}
