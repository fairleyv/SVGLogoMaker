const Shape = require('../lib/shapeConstructor')

class Triangle extends Shape {
    constructor (children, shapeColor, textColor, text) {
        super(children, shapeColor, textColor, text);
    }
render () {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}"/>`
}
}

let shape = new Triangle(shapeColor = 'blue');

console.log(shape.render());

module.exports = Triangle;