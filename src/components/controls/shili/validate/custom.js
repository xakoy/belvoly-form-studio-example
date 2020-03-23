import Editor from './Custom.vue'

const validateCustom = (rule, value, callback) => {
    if (value !== 'EL') {
      callback(new Error('请输入"EL"'))
    } else {
      callback()
    }
}

const validate = {
    ruleName: 'custom',
    defaultValue: null,
    editor: Editor,
    getRule: function (value, control, vue) {
        if (!value) {
            return null
        }
        return { validator: validateCustom }
    }
}

export default validate
