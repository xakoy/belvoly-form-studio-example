import Demo from './demo'
import ShiLi from './shili'

import { Studio } from 'belvoly-form-studio'

const initControls = function () {
    Studio.control(Demo)
    Studio.control(ShiLi)
}

export { initControls }
