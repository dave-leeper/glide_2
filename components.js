export class NamedDataRow extends HTMLElement {
    constructor(parent, idPrefix) {
        super()
        this.wrapper = document.createElement('div')
        this.name = document.createElement('div')
        this.data = document.createElement('div')
        this.wrapper.setAttribute('class', 'NamedDataRow');
        this.wrapper.id(idPrefix + 'NamedDataRow')
        this.name.setAttribute('class', 'NamedDataName');
        this.name.id(idPrefix + 'NamedDataName')
        this.data.setAttribute('class', 'NamedDataData');
        this.data.id(idPrefix + 'NamedDataData')
        this.wrapper.appendChild(this.name)
        this.wrapper.appendChild(this.data)
        parent.appendChild(this.wrapper)
    }

    setNameData(name, data) {
        this.name.innerText = name
        this.data.innerText = data
    }
}

export class NamedDataColumn extends NamedDataRow {
    constructor(parent, idPrefix) {
        super(parent, idPrefix)
        this.wrapper.setAttribute('class', 'NamedDataColumn');
        this.wrapper.id(idPrefix + 'NamedDataColumn')
    }
}

export class MeaningCommentSource extends HTMLElement {
    constructor(parent, idPrefix) {
        super()
        this.wrapper = document.createElement('div')
        this.meaning = new NamedDataRow(wrapper, idPrefix + "Meaning")
        this.comment = new NamedDataColumn(wrapper, idPrefix + "Comment")
        this.source = new NamedDataRow(wrapper, idPrefix + "Source")
        this.wrapper.setAttribute('class', 'MeaningCommentSource');
        this.wrapper.id(idPrefix + 'MeaningCommentSource')
        parent.appendChild(this.wrapper)
     }

     setMeaningCommentSource(meaning, comment, source) {
        this.meaning.innerText = meaning
        this.comment.innerText = comment
        this.source.innerText = source
    }
}

export default class ColorColumn extends HTMLElement {
    constructor(parent, idPrefix) {
        super()
        this.wrapper = document.createElement('div')
        this.color = document.createElement('div')
        this.colorName = document.createElement('div')
        this.wrapper.setAttribute('class', 'ColorColumn');
        this.wrapper.id(idPrefix + 'ColorColumn')
        this.color.setAttribute('class', 'Color');
        this.color.id(idPrefix + 'Color')
        this.colorName.setAttribute('class', 'ColorName');
        this.colorName.id(idPrefix + 'ColorName')
        this.wrapper.appendChild(this.color)
        this.wrapper.appendChild(this.colorName)
        parent.appendChild(this.wrapper)
     }

     setColor(color, colorName) {
        this.color.style.backgroundColor = color
        this.colorName.innerText = colorName
    }
}

export class ColorsRow extends HTMLElement {
    constructor(parent, idPrefix) {
        super()
        this.wrapper = document.createElement('div')
        this.colorsName = document.createElement('div')
        this.wrapper.setAttribute('class', 'ColorsRow');
        this.wrapper.id(idPrefix + 'ColorsRow')
        this.colorsName.setAttribute('class', 'ColorsName');
        this.colorsName.id(idPrefix + 'ColorsName')
        this.colorsName.innerText = "Colors"
        this.wrapper.appendChild(this.colorsName)
        this.color1 = new ColorColumn(wrapper, idPrefix + "Color1")
        this.color2 = new ColorColumn(wrapper, idPrefix + "Color2")
        parent.appendChild(this.wrapper)
     }

     setColors(color1, color1Name, color2, color2Name) {
        this.color1.setColor(color1, color1Name)
        this.color2.setColor(color2, color2Name)
    }
}

export class TrigramAdditionalInfo extends HTMLElement {
    constructor(parent, idPrefix) {
        super()
        this.wrapper = document.createElement('div')
        this.verb = new NamedDataRow(wrapper, idPrefix + "Verb")
        this.letter = new NamedDataRow(wrapper, idPrefix + "Letter")
        this.shape = new NamedDataRow(wrapper, idPrefix + "Shape")
        this.wuXing = new NamedDataRow(wrapper, idPrefix + "WuXing")
        this.colorsRow = new ColorsRow(wrapper, idPrefix + "ColorsRow")
        this.wrapper.setAttribute('class', 'TrigramAdditionalInfo');
        this.wrapper.id(idPrefix + 'TrigramAdditionalInfo')
        parent.appendChild(this.wrapper)
    }

    setTrigramAdditionalInfo(trigram) {
        this.verb.setNameData("Verb", trigram.verb)
        this.letter.setNameData("Letter", trigram.letter)
        this.shape.setNameData("Shape", trigram.shape)
        this.wuXing.setNameData("Wu Xing", trigram.wuXing)
        this.colorsRow.setColors(trigram.color[0], trigram.colorName[0], trigram.color[1], trigram.colorName[1])
    }
}
