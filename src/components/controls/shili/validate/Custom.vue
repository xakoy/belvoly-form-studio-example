<template>
    <div>
        启用自定义: <el-switch v-model="rule.custom" />
    </div>
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
