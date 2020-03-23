<template>
    <el-input size="small" v-model="rule.regexp" placeholder="表达式">
        <template slot="prepend">正则</template>
    </el-input>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    props: ['control'],
    data() {
        return {}
    },
    computed: {
        editControl() {
            return this.control
        },
        rule() {
            return this.editControl.config.rule
        }
    }
})
</script>
