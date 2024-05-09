const Shape = require('../lib/shapeConstructor')

class Circle extends Shape {
    constructor (children, shapeColor, textColor, text) {
        super(children, shapeColor, textColor, text);
    }
render () {
    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="75" cy="100" r="75" fill="${this.shapeColor}" />
    <text x="50%" y="90%" style="dominant-baseline: middle; text-anchor: middle; fill: ${this.textColor}; font-family: Arial" font-size="50">${this.text}</text>
    </svg>`
}
};

module.exports = Circle;