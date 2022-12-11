export default {
    addrequestsClass (state, play) {
        state.requests.push(play)
    },
    setrequests (state, play) {
        state.requests = play
    }
}