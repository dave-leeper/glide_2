// Create a class for the element
class FivesTest extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
  
      // Create a shadow root
      const shadow = this.attachShadow({mode: 'open'});
  
      // Create spans
      const wrapper = document.createElement('span');
      wrapper.setAttribute('class', 'wrapper');
  
      const icon = document.createElement('span');
      icon.setAttribute('class', 'icon');
      icon.setAttribute('tabindex', 0);
  
      const info = document.createElement('span');
      info.setAttribute('class', 'info');
  
      // Take attribute content and put it inside the info span
      const text = this.getAttribute('data-text');
      info.textContent = text;
  
      // Insert icon
      let imgUrl;
      if(this.hasAttribute('img')) {
        imgUrl = this.getAttribute('img');
      } else {
        imgUrl = 'Wu Xing.png';
      }
  
      const img = document.createElement('img');
      img.src = imgUrl;
      icon.appendChild(img);
  
      // Attach the created elements to the shadow dom
      shadow.appendChild(wrapper);
      wrapper.appendChild(icon);
      wrapper.appendChild(info);
    }
  }
customElements.define('fives-test', FivesTest);

class FivesNamedDataRow extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode: 'open'})
        const wrapper = document.createElement('div')
        const name = document.createElement('div')
        const data = document.createElement('div')
        wrapper.setAttribute('class', 'NamedDataRow');
        name.setAttribute('class', 'NamedDataName');
        data.setAttribute('class', 'NamedDataData');
        shadow.appendChild(wrapper)
        wrapper.appendChild(name)
        wrapper.appendChild(data)
        name.innerText = "name"
        data.innerText = "data"
    }
}
customElements.define('fives-named-data-row', FivesNamedDataRow);
