import { IControl, IConfig } from 'belvoly-form-studio'
import Compontent from './Index.vue'

const config: IConfig = {
    name: 'demo',
    icon: '',
    text: '示例组件',
    prop: {}
}

const control: IControl = {
    config: config,
    component: Compontent
}

export default control
