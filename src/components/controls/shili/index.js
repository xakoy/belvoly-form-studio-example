import { Properties } from 'belvoly-form-studio'
const { Label, LabelProperty } = Properties
import Compontent from './Index.vue'
import MaxlengthEditor from './MaxlengthEditor.vue'

const config = {
    name: 'shili',
    icon: '',
    text: '示例组件',
    prop: {
        label: '文本',
        maxlength: 10
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
    ]

}

export default control
