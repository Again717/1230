<template>
        <div class="login">
        <form @submit.prevent="loginsumbit">
        <coach-base>
            <div class="login-con">
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="email">
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="password">
                </div>
                <base-button>Login</base-button>
                <base-button link to='/auth'>Signup instead</base-button>
            </div>
        </coach-base>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            password: ''
        }
    },
        methods: {
      async  loginsumbit () {
            this.loginItem = true
            if (this.email === ' ' ||
            !this.email.includes('@') ||
            this.password.length < 6
            ) {
            this.loginItem = false
            return
         }
    try {
   await this.$store.dispatch('login', {
        email: this.email,
        password: this.password
    })
            // 如果没登录,则只能访问与登录和主页
        const regauth = '/' + (this.$route.query.redirect || 'coaches')
        this.$router.replace(regauth)
 } catch (err) {
    console.log(err)
}
}
}
}
</script>
<style scoped>
input{
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    width: 200px;
    height: 30px;
}
</style>
