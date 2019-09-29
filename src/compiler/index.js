
import components from './component'
function compile (type) {
    let template = components[type]
    if(!template) return
    return template
}

export default compile