<template>
    <div class="code-container">
        <div ref="jsoncodeeditor"></div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import * as monaco from 'monaco-editor'
export default Vue.extend({
    props: {
        value: {},
        readonly: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            editor: null
        }
    },
    mounted() {
        const editor = monaco.editor.create(this.$refs.jsoncodeeditor, {
            value: this.value,
            language: 'json',
            lineNumbers: 'on',
            formatOnType: true
        })
        this.editor = editor
        setTimeout(async () => {
            await editor.getAction('editor.action.formatDocument').run()
            if (this.readonly) {
                editor.updateOptions({
                    readOnly: true
                })
            }
        }, 500)
        editor.onDidBlurEditorText(() => {
            const code = editor.getValue()
            this.changeHandler(code)
        })
    },
    beforeDestroy() {
        if (this.editor) {
            this.editor.dispose()
        }
    },
    methods: {
        changeHandler(code) {
            this.$emit('input', code)
        }
    }
})
</script>

<style lang="less">
.code-container {
    height: 500px;
    > div {
        height: 100%;
    }
}
</style>
