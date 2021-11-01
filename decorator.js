export function readOnly(target, key, descriptor) {
    return {
        ...descriptor,
        writable: false
    }
}

export function customElement(name) {
    return function(target) {
        customElements.define(name, target)
    }
}