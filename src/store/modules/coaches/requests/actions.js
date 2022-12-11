import API from '../../../../plugins/axiosInstance'

export default {
    requestsClass (context, play) {
        const newrequests = {
            email: play.email,
            message: play.message
        }
        API.post('user/requests', newrequests)
        .then(res => {
             newrequests.id = res.data.id
            console.log(res)
        }).catch(err => {
            const error = new Error(err.message || 'Failed to send request')
            console.log(error)
            throw error
        })
        context.commit('addrequestsClass', newrequests)
    },
   async fetchRequests (context) {
        const requestsId = context.rootGetters.userId
        const token = context.rootGetters.token
        console.log(token)
        console.log(requestsId)
        const requestsItem = []
      await API.get('user/requests')
        .then(res => {
            console.log(res.data)
            for (const key in res.data) {
                const requests = {
                    id: key,
                    coachId: requestsId,
                    email: res.data[key].email,
                    message: res.data[key].message
                }
                requestsItem.push(requests)
                console.log(requests)
            }
        }).catch(err => {
            const error = new Error(err.message || 'is NOT MESSAGE')
            console.log(err)
            throw error
        })
        context.commit('setrequests', requestsItem)
    }
}