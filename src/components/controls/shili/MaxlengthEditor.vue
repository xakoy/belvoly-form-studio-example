<template>
    <div>
        最大长度:
        <el-input v-model="control.config.prop.maxlength" />
    </div>
</template>

<script>
export default {
    props: {
        control: {}
    }
}
</script>