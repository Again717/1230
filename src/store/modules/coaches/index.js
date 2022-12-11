import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state () {
        return {
            // 设置数据不用每次跳到主页面刷新,设置一个时间间隔
             lastFeach: null,
            // 总商店数据
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Joker xue',
                    lastName: 'Again',
                    areas: ['joker', 'again', 'rose'],
                    description: '人类用沙(杀)想捏出梦里通天塔',
                    hourlyRate: '717'
                },
                {
                    id: 'c2',
                    firstName: 'Joker xue',
                    lastName: 'Again',
                    areas: ['agian'],
                    description: '结构 | 让平分的阳光已穿不透',
                    hourlyRate: '717'
                },
                {
                    id: 'c3',
                    firstName: 'Joker xue',
                    lastName: 'Rose',
                    areas: ['rose'],
                    description: '结构 | 让平分的阳光已穿不透',
                    hourlyRate: '717'
                }
            ]
        }
    },
    mutations,
    actions,
    getters
}
