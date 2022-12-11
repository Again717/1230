<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    // required设置为true时,调用组件时必须绑定:
    props: {
        mode: {
            type: String,
            required: false,
            default: null
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/'
        }
    }
}
</script>

<style scoped>
button,
a{
    text-decoration: none;
    padding: 0.65rem 1.3rem;
    color: #000;
    background-color: #ccc;
    cursor: pointer;
    border-radius: 30px;
    border: 1px solid #ccc;
    margin-right: 0.5rem;
    margin-top: 10px
}

.coach{
    margin: 0 5px;
    padding: 0.3rem;
    border-radius: 10px;
}

.coach-contact{
    border: 1px solid #ccc;
    color: #000;
}

.coach-view{
    background: #ccc;
    color: #fff;
    font-size: 13px;
}
</style>
