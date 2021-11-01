export class FivesTest extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: 'open' })
        this.content = this.createElement('div', 'fives-test')
        this.content.innerText = 'test'
        this.shadowRoot.append(content);
    }

    createElement(tag, className) {
        const elem = document.createElement(tag)
        elem.classList.add(className)
        return elem
    }
}