<template>
<!-- 防止默认提交 -->
    <form @submit.prevent="setadd">
        <div class="form-control">
            <label for="firstname" :class="{input: !firstname.isfrom}">Firstname</label>
            <input type="text" v-model.trim="firstname.val" @blur="newverify('firstname')">
            <p v-if="!firstname.isfrom">Is not Firstname</p>
        </div>
        <div class="form-control">
            <label for="lastname" :class="{input :!lastname.isfrom}">Lastname</label>
            <input type="text" v-model.trim="lastname.val" @blur="newverify('lastname')" />
            <p v-if="!lastname.isfrom">Is not Lastname</p>
        </div>
        <div class="form-control">
            <label for="description" :class="{input: !description.isfrom}">Description</label>
            <textarea id="description" rows="5" v-model.trim="description.val" @blur="newverify('description')"></textarea>
            <p v-if="!description.isfrom">Is not Description</p>
        </div>
        <div class="form-control">
            <label for="rate" :class="{input: !rate.isfrom}">Hourly Rate</label>
            <input id="rate" type="number" v-model.trim="rate.val" @blur="newverify('rate')" />
            <p v-if="!rate.isfrom">This Numbre is not</p>
        </div>

    <div class="form-control">
        <h3 :class="{input: !areas.isfrom}">Areas of Expertise</h3>
        <div>
            <input type="checkbox" id="joker" value="joker" v-model="areas.val" @blur="newverify('areas')" />
            <label for="joker">JOKER</label>
        </div>
        <div>
            <input type="checkbox" id="again" value="again" v-model="areas.val" @blur="newverify('areas')">
            <label for="again">Again</label>
        </div>
        <div>
            <input type="checkbox" id="rose" value="rose" v-model="areas.val" @blur="newverify('areas')">
            <label for="rose">Rose</label>
        </div>
        </div>
        <base-button to="/coaches">Sumbit</base-button>
    </form>

</template>
<script>
export default {
    // 记录自定义事件
    emits: ['set-add'],
    data () {
        return {
                firstname: {
                    val: '',
                    isfrom: true
                },
                lastname: {
                    val: '',
                    isfrom: true
                },
                description: {
                    val: '',
                    isfrom: true
                },
                rate: {
                    val: '',
                    isfrom: true
                },
                areas: {
                    val: [],
                    isfrom: true
                },
                fillUser: true
        }
    },
    methods: {
        // newverify (input) {
        //     this[input].isfrom = true
        // },
        newverify (input) {
            this.fillUser = true
           // this[input].isfrom = true
            if (this[input].val === '') {
                this[input].isfrom = false
                this.fillUser = false
            } else {
                this[input].isfrom = true
                this.fillUser = true
            }
            // if (this.lastname.val === '') {
            //     this.lastname.isfrom = false
            //     this.fillUser = false
            // }
            // if (this.description.val === '') {
            //     this.description.isfrom = false
            //     this.fillUser = false
            // }
            // if (!this.rate.val < 0 || !this.rate.val) {
            //     this.rate.isfrom = false
            //     this.fillUser = false
            // }
            // if (this.areas.val.length === 0) {
            //     this.areas.isfrom = false
            //     this.fillUser = false
            // }
        },
        // 获取当前提交输入框内容
        setadd () {
            const newSet = {
                first: this.firstname.val,
                last: this.lastname.val,
                desc: this.description.val,
                rate: this.rate.val,
                areas: this.areas.val
            }
            console.log(newSet)
            // 自定义事件
            this.$emit('set-add', newSet)
        }
    }
}
</script>

<style scoped>
.input{
    color: red;
}
</style>