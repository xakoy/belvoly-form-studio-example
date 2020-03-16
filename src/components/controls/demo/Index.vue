<template>
    <div class="webpart webpart-demo">
        <div class="webpart-title">empty</div>
        <div class="webpart-body">
            {{ control.id }}
            <el-button @click="removeHandler">删除</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { IControl } from 'belvoly-form-studio'

@Component
export default class Index extends Vue {
    @Prop() control: IControl
    // @Prop() itemRemove

    removeHandler() {
        this.$emit('itemRemove', this.control)
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
