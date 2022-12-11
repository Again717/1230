export default {
    userId (state) {
        return state.userId
    },
    // 登录令牌
    token (state) {
        return state.token
    },
    istoken (state) {
        // 判断token是否为true
        return !!state.token
    },
    isLogout (state) {
        return state.islogout
    }
}