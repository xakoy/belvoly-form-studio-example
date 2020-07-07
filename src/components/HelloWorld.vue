<template>
    <div class="form-design">
        <div class="form-design-header">
            <el-row>
                <el-col :span="8">
                    <h3>表单设置： <span style="color:#FF0000">（修改表单设计将会丢失原有数据，请慎重操作）</span></h3>
                </el-col>
                <el-col :span="16" style="text-align: right">
                    <el-button size="small" @click="getModelHandler">获取JSON</el-button>
                    <el-button size="small" @click="preview">预览</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="form-design-container">
            <form-design ref="designer" :enable-property-valid="true"></form-design>
        </div>
        <el-dialog width="1200px" title="预览表单" v-if="previewDialogVisible" :visible.sync="previewDialogVisible">
            <viewer ref="viewer" :designModel="designModel"></viewer>
            <div>
                <el-button @click="saveHandler">
                    保存
                </el-button>
            </div>
        </el-dialog>
        <el-dialog width="800px" title="设计JSON" v-if="jsonDialogVisible" :visible.sync="jsonDialogVisible">
            <code-editor :readonly="true" :value="jsoncode"></code-editor>
        </el-dialog>
    </div>
</template>

<script>
import { Viewer, FormDesign } from 'belvoly-form-studio'
import CodeEditor from './Code.vue'

import { Message } from 'element-ui'

export default {
    components: {
        FormDesign,
        CodeEditor,
        Viewer
    },
    data() {
        return {
            previewDialogVisible: false,
            designModel: null,
            jsonDialogVisible: false,
            jsoncode: ''
        }
    },
    methods: {
        async preview() {
            const isValid = await this.$refs.designer.validate()
            if (!isValid) {
                Message.error('属性验证不通过')
                return
            }

            const model = this.$refs.designer.getModel()
            this.designModel = model
            this.previewDialogVisible = true
        },
        getModelHandler() {
            const model = this.$refs.designer.getModel()
            this.jsoncode = JSON.stringify(model)
            this.jsonDialogVisible = true
        },
        async saveHandler() {
            const viewer = this.$refs.viewer
            try {
                const valid = await viewer.validate()
                if (valid) {
                    const data = viewer.getData()
                    this.$message.success(JSON.stringify(data))
                }
            } catch (e) {}
        }
    }
}
</script>

<style lang="less">
.form-design {
    height: 100%;
    display: flex;
    flex-direction: column;
    &-header {
        h3 {
            font-weight: normal;
            font-size: 16px;
        }
        box-sizing: border-box;
        height: 50px;
        line-height: 50px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        padding: 0px 24px;
        text-align: left;
        // position: absolute;
        position: relative;
        z-index: 1;
        width: 100%;
    }

    &-container {
        flex: 1;
        height: 100px;
    }
}
</style>
