const Shape = require('../lib/shapeConstructor')

class Circle extends Shape {
    constructor (children, shapeColor, textColor, text) {
        super(children, shapeColor, textColor, text);
    }
render () {
    console.log(shapeColor)
    return `<circle cx="75" cy="100" r="20" fill="${shapeColor}" />`
}
}

let shape = new Circle(shapeColor = 'blue');

shape.render();

module.exports = Circle;