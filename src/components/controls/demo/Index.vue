<template>
    <div class="webpart webpart-demo">
        <div class="webpart-title">empty</div>
        <div class="webpart-body">
            {{ control.id }}
            <el-button @click="removeHandler">删除</el-button>
        </div>
        <viewer :designModel="designModel" />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { IControl, Viewer } from 'belvoly-form-studio'

@Component({
    components: {
        Viewer
    }
})
export default class Index extends Vue {
    @Prop() control: IControl
    // @Prop() itemRemove

    designModel = {
        controls: [
            {
                id: 'text1',
                name: 'text',
                prop: {}
            }
        ],
        form: {
            showRequiredAsterisk: true,
            labelPosition: 'top',
            labelWidth: 80
        }
    }
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
