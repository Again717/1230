<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>Number:{{ rate }}</h4>
        <div class="coach-areas">
            <base-badge v-for="area in areas" :key="area" :title="area" :type="area"></base-badge>
        </div>
        <div class="coach-button">
            <base-button class="coach coach-contact" link :to="coachContact">Contact</base-button>
           <base-button class="coach coach-view" link :to="coachView">View Details</base-button>
        </div>
    </li>
</template>

<script>
export default {
    // 传递参数
    props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
    computed: {
        // 获取数据
        fullName () {
            return this.firstName + '' + this.lastName
        },
        // 访问路径
        coachContact () {
            return '/coaches/' + this.id + '/' + 'contact'
        },
        coachView () {
            return '/coaches/' + this.id
        }
    }
}
</script>

<style scoped>
li{
    width: 100%;
    border: 1px solid #000;
    height: 100%;
    border-radius: 10px;
    position: relative;
    margin: 20px 0;
    padding: 1.5rem
}
h3{
    font-size: 24px;
}
h4{
    font-size: 14px;
}

.coach-button{
    position: absolute;
    bottom: 15px;
    right: 15px;
}
a{
    text-decoration: none;
    font-size: 14px;
}

</style>
