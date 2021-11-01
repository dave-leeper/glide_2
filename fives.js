import { customElement } from './decorator'

@customElement('fives-test')
export class FivesTest extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: 'open' })
        this.content = this.createElement('div', 'fives-test')
        this.content.innerText = 'test'
    }

    createElement(tag, className) {
        const elem = document.createElement(tag)
        elem.classList.add(className)
        return elem
    }
}