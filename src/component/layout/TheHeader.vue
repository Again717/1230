<template>
    <div class="coach-title">
        <h2><router-link to='/'>Find a Coach</router-link></h2>
        <div class="coach-change">
            <router-link to='/coaches'>All Coaches</router-link>
            <router-link to='/requests'>Requests</router-link>
            <router-link to='/login'>Login</router-link>
            <base-button v-if="istoken" @click="logout">Logout</base-button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        istoken () {
            return this.$store.getters.istoken
        }
    },
    // 注销账户,将token设置回null
    methods: {
        logout () {
            this.$store.dispatch('logout')
            this.$router.replace('/coaches')
        }
    }
}
</script>

<style scoped>
.coach-title{
    width: 100%;
    height: 70px;
    position: fixed;
    left: 0;
    top: 0;
    background: rgb(134, 78, 78);
    display: flex;
    align-items: center;
    justify-content: space-around
}
h2{
    color: #fff;
    font-size: 24px;
    font-weight: 300;
}
a{
    color: #fff;
    text-decoration: none;
}
.coach-change a{
    margin: 0 10px;
    padding: 0.5rem;
    border: 1px solid #ccc;
    background: none;
    font-size: 14px;
    font-weight: 300;
}
</style>
