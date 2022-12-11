<template>
<teleport to='body'>
    <div v-if="show" @click="tryClose" class="backdrop"></div>
<transition name="dialog">
    <dialog open v-if="show">
        <header>
            <slot name="header">
                <h2>{{title}}</h2>
            </slot>
        </header>
        <!-- 从组件调用一个slot对应一个组件 -->
        <section>
            <slot></slot>
        </section>
            <menu>
            <slot name="actions">
                <base-button @click="tryClose">Close</base-button>
            </slot>
            </menu>
    </dialog>
    </transition>
</teleport>
</template>

<script>
export default {
    emits: ['close'],
    // required设置为true时,调用组件时必须绑定:show
    props: {
        show: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            required: false
        },
        fixed: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        tryClose () {
            // 如果调用的组件设置了fixed为true
            // 则不执行自定义事件,也就是关闭弹窗事件
            if (this.fixed) {
                return
            }
            // 发送自定义事件
            this.$emit('close')
        }
    }
}
</script>
<style scoped>
.backdrop{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7)
}
dialog{
    width: 400px;
    height: 150px;
    background: #ccc;
    border-radius: 20px;
    position: absolute;
    top: 30%;
    margin: auto;
    border: none;
    outline: none;
}
.dialog-enter-to,
.dialog-leave-to{
    opacity: 0;
    transform: scale(0.8)
}

.dialog-enter-active{
    transition: all 0.3s  ease-out
}
.dialog-leave-active{
    transition: all 0.3s ease-in
}
.dialog-enter-from,
.dialog-leave-from{
    opacity: 1;
    transform: scale(1)
}

header h2{
    font-size: 15px;
    font-weight: 400;
    position: absolute;
    left: 10px;
    top: 10px;
}
button{
    position: absolute;
    background: rgb(189, 102, 102);
    bottom: 10px;
    right: 10px;
    color: #ffffff
}
</style>
