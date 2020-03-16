<template>
    <basic :config="control.config" :readonly="readonly">
        <el-input :value="value" @input="$emit('input', $event)" :maxlength="control.config.prop.maxlength"  />
    </basic>
</template>

<script>
import { Controls } from 'belvoly-form-studio'
const { Basic } = Controls

export default {
    components: {
        Basic
    },
    props: {
        control: {},
        value: {},
        readonly: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="less">
.webpart {
    border: 1px solid #ccc;
    margin-bottom: 20px;
    &-title {
        border-bottom: 1px solid #ccc;
        padding: 0 10px;
        line-height: 32px;
    }
    &-body {
        padding: 10px;
    }
}
</style>
