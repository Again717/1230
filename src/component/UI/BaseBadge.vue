<template>
    <span class="badge" :class="type"> {{text}} </span>
</template>
<script>
export default {
    props: ['title', 'type'],
    computed: {
        text () {
            return this.title.toUpperCase()
        }
    }
}
</script>

<style scoped>

</style>
