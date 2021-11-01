export class FivesTest extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: 'open' })
        this.content = this.createElement('div', 'fives-test')
        this.content.setAttribute('class', 'wrapper');
        this.content.innerText = 'test'
        const style = document.createElement('style');
        style.textContent = `
      .wrapper {
        position: relative;
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: green;
        border-radius: 10px;
        opacity: 0;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
     }`;
        this.shadowRoot.append(style, this.content);
    }

    createElement(tag, className) {
        const elem = document.createElement(tag)
        elem.classList.add(className)
        return elem
    }
}