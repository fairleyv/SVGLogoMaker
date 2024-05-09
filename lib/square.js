const Shape = require('../lib/shapeConstructor')

class Square extends Shape {
    constructor (children, shapeColor, textColor, text) {
        super(children, shapeColor, textColor, text);
    }
render () {
    return `    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="100" width="60" height="60" fill="${this.shapeColor}"/>
    <text x="50%" y="90%" style="dominant-baseline: middle; text-anchor: middle; fill: ${this.textColor}; font-family: Arial" font-size="10">${this.text}</text>
    </svg>`
}
};
module.exports = Square;