<template>
<form @submit.prevent="newContact">
    <div>
        <label for="email" :class="{input: !fillContact}">Email:</label>
        <input type="email" v-model.trim="email">
    </div>
    <div>
        <label for="message" :class="{input: !fillContact}">Message:</label>
        <textarea rows="5" id="message" v-model.trim="message"></textarea>
    </div>
    <div>
        <p v-if="!fillContact">This email or message is not text</p>
        <base-button  to="/coaches">Sumbit</base-button>
    </div>
</form>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            message: '',
            fillContact: true,
            error: null
        }
    },
    methods: {
    newContact () {
    this.fillContact = true
if (this.email === '' || !this.email.includes('@') || this.message === '') {
    this.fillContact = false
    return
    }
    this.$store.dispatch('requests/requestsClass', {
            email: this.email,
            message: this.message,
            // 访问路由id带上params
            coachId: this.$route.params.id
    })
    this.$router.replace('/coaches')
    }
}
}
</script>

<style scoped>
.input{
    color: red
}
</style>
