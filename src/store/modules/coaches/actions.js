import API from '../../../plugins/axiosInstance'
// import qs from 'qs'
export default {
    // 创建添加新的数据格式
    registerCoach (context, data) {
        const newdata = {
            // 访问根目录内容rootGetters
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        }
        const userId = context.rootGetters.userId
        const token = context.rootGetters.token

       // API.defaults.timeout = 1000000
       // API.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 发送axios中post数据到mongodb存储
        API.post('/user/add', newdata)
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
        console.log(token)
        console.log(userId)
    context.commit('registerCoaches', {
        ...newdata,
        id: userId
})
},
async loadCoaches (context, playlod) {
 // 如果超过1分钟则为true,则执行下面请求数据,反之则不执行
 // 设置playlod,按钮强制刷新
    if (!playlod.forlastFeach && !context.getters.newlastFeach) {
            // 不执行
            return
    }
    const coaches = []
   await API.get('/user/add')
    .then(res => {
        console.log(res)
        for (const key in res.data) {
                const coach = {
                    id: res.data[key]._id,
                    firstName: res.data[key].firstName,
                    lastName: res.data[key].lastName,
                    description: res.data[key].description,
                    hourlyRate: res.data[key].hourlyRate,
                    areas: res.data[key].areas
            }
            coaches.push(coach)
            console.log(coach)
            }
    }).catch(err => {
        const error = new Error(err.message || 'Failed to fetch')
        console.log(err)
        throw error
    })
    console.log(coaches)
    context.commit('setCoaches', coaches)
    // 发送最后刷新数据的时间
     context.commit('lastFeachtime')
}
}