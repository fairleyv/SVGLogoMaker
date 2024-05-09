const Shape = require('../lib/shapeConstructor')

class Square extends Shape {
    constructor (children, shapeColor, textColor, text) {
        super(children, shapeColor, textColor, text);
    }
render () {
    return `<rect x="100" y="100" width="60" height="60" fill="${shapeColor}"/>`
}
}

let shape = new Square(shapeColor = 'blue');

console.log(shape.render());

module.exports = Square;