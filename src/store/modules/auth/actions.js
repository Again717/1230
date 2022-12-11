import API from '../../../plugins/axiosInstance.js'
let timer
export default {
async login (context, playlod) {
    const newuser = {
        name: playlod.name,
        email: playlod.email,
        password: playlod.password
    }
return context.dispatch('auth', {
    ...newuser,
    mode: 'login'
})
},
    // 异步处理
  async signup (context, playlod) {
    const loginuser = {
        email: playlod.email,
        password: playlod.password
    }
      return context.dispatch('auth', {
        ...loginuser,
        mode: 'signup'
        })
    },
   async auth (context, playlod) {
    const mode = playlod.mode
        let url = '/user/login'
        if (mode === 'signup') {
            url = '/user/authes'
        }

        const token = []
        const idtoken = []
        let tokenes = ''
        let userId = ''
       await API.post(url, playlod)
        .then((res) => {
    if (mode === 'signup') {
            if (res.data.status === 1001) {
                // 发送错误报告
                const error = new Error(res.message || 'is not user')
                throw error
            } else if (res.data.status === 1002) {
                alert('用户名存在')
            } else {
                alert('注册成功')
                token.push(res.data.data.token)
                idtoken.push(res.data.data.id)
                console.log(res)
            }
    }
            if (res.data.status === 2001) {
                // 发送错误报告
                alert(res.data.message)
                const error = new Error(res.message || 'is not user')
                throw error
            } else if (res.data.status === 2002) {
                // 发送错误报告
                alert(res.data.message)
                const error = new Error(res.message || 'is not user')
                throw error
            } else {
                tokenes = res.data.data.token
                userId = res.data.data._id
                console.log(userId)
                alert('登录成功')
            }
        }).catch((err) => {
            throw err
        })

        // 设置用户到期时间将注销 重新登录
        const newuserDate = 7000
         const userDate = new Date().getTime() + newuserDate
        localStorage.setItem('token', tokenes)
        localStorage.setItem('userId', userId)
        localStorage.setItem('userDate', userDate)

      timer = setTimeout(function () {
            context.dispatch('authLogout')
        }, newuserDate)

        if (mode === 'signup') {
            context.commit('setUser', {
                token: token,
                userId: idtoken
            })
        } else {
            context.commit('setUser', {
                token: tokenes,
                userId: userId
            })
        }
    },
    tryLogin (context) {
        // 保存记忆
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        const tokentime = localStorage.getItem('userDate')
// 计算当前剩余时间
const expiresIn = tokentime - new Date().getTime()
if (expiresIn < 0) {
     return
}

// 登录后开始计算时间
timer = setTimeout(function () {
    context.dispatch('authLogout')
}, expiresIn
)
        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId
            })
        }
    },
    // 注销用户
    logout (context) {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('userDate')

        clearTimeout(timer)
        context.commit('setUser', {
            token: null,
            userId: null
        })
    },
    // 检查当前注销后存在的页面是否需要登录用户
    authLogout (context) {
        context.dispatch('logout')
        // 当注销被调用时,触发改变isLogout的状态
        context.commit('didLogout')
    }
}