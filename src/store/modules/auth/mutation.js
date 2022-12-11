export default {
    setUser (state, playlod) {
        state.userId = playlod.userId
        state.token = playlod.token
    },
    // 当用户到期,改变状态,无论当前用户存在那个页面
    // 都将返回到主页面
    didLogout (state) {
        state.islogout = true
    }
}