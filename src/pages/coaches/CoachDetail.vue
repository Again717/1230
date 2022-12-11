<template>
<div>
<section>
    <coach-base>
        <h2>{{ fullNamees }}</h2>
        <h3>$ {{ rates }}</h3>
    </coach-base>
</section>

<section>
<coach-base>
    <header>
        <h2>Interested ? Realy</h2>
        <base-button to='/requests'>Requests</base-button>
    </header>
    <router-view></router-view>
</coach-base>
</section>

<section>
    <coach-base>
        <base-badge v-for="area in areas" :key="area.id" :title="area">
        <p>{{ description }}</p>
        </base-badge>
    </coach-base>
</section>
</div>
</template>

<script>
export default {
    props: ['id'],
    data () {
        return {
            selectedCoach: null
        }
    },
    // 生命周期
    created () {
        this.selectedCoach = this.$store.getters['Coaches/coaches'].find(co => co.id === this.id)
    },
    computed: {
        fullNamees () {
            return this.selectedCoach.firstName + '' + this.selectedCoach.lastName
        },
        areas () {
            return this.selectedCoach.areas
        },
        rates () {
            return this.selectedCoach.hourlyRate
        }
    }
}
</script>
