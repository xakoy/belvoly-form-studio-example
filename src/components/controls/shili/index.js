import { Properties } from 'belvoly-form-studio'
const { Label, LabelProperty, RequiredRule } = Properties
import Compontent from './Index.vue'
import MaxlengthEditor from './MaxlengthEditor.vue'

import Regexp from './validate/regexp'
import Custom from './validate/custom'

const config = {
    name: 'shili',
    icon: '',
    text: '示例组件',
    isData: true,
    prop: {
        label: '文本',
        maxlength: 10
    },
    rule: {
        required: false,
        regexp: null,
        custom: false
    }
}

const control = {
    config: config,
    component: Compontent,
    propertys: [ 
        new LabelProperty('文本'),
        {
            propName: 'maxlength',
            editor: MaxlengthEditor
        }
    ],
    rules: [
        new RequiredRule(),
        Regexp,
        Custom
    ]

}

export default control
