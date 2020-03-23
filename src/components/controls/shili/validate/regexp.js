import Editor from './Regexp.vue'

const regexp = {
    ruleName: 'regexp',
    defaultValue: null,
    editor: Editor,
    getRule: function (value, control, vue) {
        console.log(value)
        if (!value) {
            return null
        }
        return { pattern: new RegExp(value), message: '格式不正确' }
    }
}

export default regexp
