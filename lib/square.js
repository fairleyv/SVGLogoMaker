const Shape = require('../lib/shapeConstructor')

class Square extends Shape {
    constructor (children, shapeColor, textColor, text) {
        super(children, shapeColor, textColor, text);
    }
render () {
    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}"/>
    <text x="50%" y="50%" style="dominant-baseline: middle; text-anchor: middle; fill: ${this.textColor}; font-family: Arial" font-size="40">${this.text}</text>
    </svg>`
}
};
module.exports = Square;