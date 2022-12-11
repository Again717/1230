import { createStore } from 'vuex'
import CoachesModules from './modules/coaches/index.js'
import ContactModules from './modules/coaches/requests/index.js'
import UserAuth from './modules/auth/index.js'

const store = createStore({
    modules: {
        Coaches: CoachesModules,
        requests: ContactModules,
        userauth: UserAuth
    }
})

export default store
