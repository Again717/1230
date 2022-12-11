<template>
    <div class="user">
        <base-dialog :show="!!error" title="注册失败 请重试" @close="haserror">
        <p class="user-error">{{error}}</p>
        </base-dialog>
        <base-dialog :show="load" fixed>
        <base-spinner></base-spinner>
        </base-dialog>
    <coach-base>
        <form @submit.prevent="usersubmit">
                    <div>
                        <label for="name" :class="{input:username.isuer}">Name:</label>
                        <input type="text" id="username" v-model.trim="username.userval" @blur="userchange('username')">
                        <p class="user-err_text" v-if="!username.isuser">请输入用户名</p>
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" id="useremail" v-model.trim="useremail.userval" @blur="userchange('useremail')">
                    </div>
                    <p class="user-err_text"  v-if="!useremail.isuser">请输入邮箱</p>
                    <div>
                        <label for="Password">Password:</label>
                        <input type="password" id="userpassword" v-model.trim="userpassword.userval" @blur="userchange('userpassword')">
                    </div>
                    <p class="user-err_text"  v-if="!userpassword.isuser">请输入密码</p>
                    <div>
                        <label for="Password">Again Password:</label>
                        <input type="password" id="userpasswordes" v-model.trim="userpasswordes.userval" @blur="userchange('userpasswordes')">
                    </div>
                    <p class="user-err_text"  v-if="!userpasswordes.isuser">请输入第一次相同密码</p>
                    <base-button>Enroll</base-button>
                    <base-button link to='/login'>Login</base-button>
        </form>
        </coach-base>
    </div>
</template>

<script>
export default {
    data () {
        return {
            username: {
                userval: '',
                isuser: true
            },
            useremail: {
                userval: '',
                isuser: true
            },
            userpassword: {
                userval: '',
                isuser: true
            },
            userpasswordes: {
                userval: '',
                isuser: true
            },
            userItem: true,
            error: null,
            load: false,
            showes: true
        }
    },
    methods: {
        userchange (input) {
            if (this[input].userval === '') {
                this[input].isuser = false
            } else {
              this[input].isuser = true
            }
    },
    userveiry () {
        this.userItem = true
        if (this.username.userval === '') {
        this.username.isuser = false
        console.log('1')
        this.userItem = false
        }
        if (this.useremail.userval === '' ||
        !this.useremail.userval.includes('@')) {
            this.useremail.isuser = false
        this.userItem = false
        }
       if (this.userpassword.userval.length < 6) {
        this.userpassword.isuser = false
        this.userItem = false
       }
    if (this.userpasswordes.userval !== this.userpassword.userval) {
        this.userpasswordes.isuser = false
        this.userItem = false
    }
    },
   async usersubmit () {
    this.userveiry()
    if (!this.userItem) {
        return
    }
    this.userItem = true
    this.load = true
        try {
     await this.$store.dispatch('signup', {
            name: this.username.userval,
            email: this.useremail.userval,
            password: this.userpassword.userval
        })
        } catch (err) {
            console.log(err)
            this.error = err.message
        }
    this.load = false
},
haserror () {
    this.error = null
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
.user-error{
    position: absolute;
    left: 20px;
    top: 50px;
}
.user-err_text{
    color: red;
    font-size: 12px;
}
</style>
